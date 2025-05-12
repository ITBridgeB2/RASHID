import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import BadWordsFilter from 'bad-words';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD || 'your_new_password',
  database: 'blogapp',
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Bad words filter
const checkBadWords = (content) => {
  const filter = new BadWordsFilter();
  return filter.isProfane(content);
};

// Register Endpoint
app.post('/api/register', (req, res) => {
  const { username, email, mobile, password, confirmPassword } = req.body;

  if (!username || !email || !mobile || !password || !confirmPassword) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);

  const checkEmailQuery = 'SELECT * FROM users WHERE email = ? OR mobile = ?';
  db.query(checkEmailQuery, [email, mobile], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    if (results.length > 0) {
      return res.status(400).json({ error: 'Email or mobile already in use' });
    }

    const query = 'INSERT INTO users (username, email, mobile, password) VALUES (?, ?, ?, ?)';
    db.query(query, [username, email, mobile, hashedPassword], (err) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

// Login Endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secretkey', { expiresIn: '1h' });
    res.json({
      message: 'Login successful',
      token,
      user: { id: user.id, username: user.username, email: user.email }
    });
  });
});

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];
  if (!token) return res.status(403).json({ error: 'Token is required' });

  jwt.verify(token, process.env.JWT_SECRET || 'secretkey', (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    req.userId = decoded.id;
    next();
  });
};

// Create Post
app.post('/api/createposts', verifyToken, (req, res) => {
  const { title, content, content_type } = req.body;
  const author = req.userId;

  if (!title || !content || !content_type) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (checkBadWords(content)) {
    return res.status(400).json({ error: 'Content contains inappropriate language' });
  }

  const query = 'INSERT INTO posts (title, content, content_type, author) VALUES (?, ?, ?, ?)';
  db.query(query, [title, content, content_type, author], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database error: ' + err.message });
    res.status(201).json({ message: 'Post created successfully', postId: result.insertId });
  });
});

// Get My Posts
app.get('/api/mypost', verifyToken, (req, res) => {
  const author = req.userId;

  const query = 'SELECT * FROM posts WHERE author = ? ORDER BY created_at DESC';
  db.query(query, [author], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error fetching posts' });
    res.json(results);
  });
});

app.put('/api/updatePost/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  const { title, content, content_type } = req.body;
  const author = req.userId;

  const query = 'UPDATE posts SET title = ?, content = ?, content_type = ? WHERE id = ? AND author = ?';
  db.query(query, [title, content, content_type, id, author], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error updating post' });
    if (result.affectedRows === 0) {
      return res.status(403).json({ error: 'You are not the author or post does not exist' });
    }
    res.status(200).json({ message: 'Post updated successfully' });
  });
});


// Delete Post
app.delete('/api/deletePost/:id', verifyToken, (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM posts WHERE id = ? AND author = ?';
  db.query(query, [id, req.userId], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error deleting post' });
    if (result.affectedRows === 0) {
      return res.status(403).json({ error: 'You are not the author of this post' });
    }
    res.json({ message: 'Post deleted successfully' });
  });
});

// Get Posts by Category with uploader email
app.get('/api/postsByCategory/:content_type', (req, res) => {
  const { content_type } = req.params;

  const query = `
    SELECT posts.id, posts.title, posts.content, posts.content_type, users.username AS author, users.email AS author_email
    FROM posts
    JOIN users ON posts.author = users.id
    WHERE posts.content_type = ?
    ORDER BY posts.created_at DESC
  `;

  db.query(query, [content_type], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error fetching posts by content type' });
    res.json(results);
  });
});

// ✅ Publish Post Endpoint
app.put('/api/publishPost/:postId', verifyToken, (req, res) => {
  const { postId } = req.params;
  const { category } = req.body;

  if (!category) {
    return res.status(400).json({ error: 'Category is required' });
  }

  const query = 'UPDATE posts SET content_type = ? WHERE id = ? AND author = ?';
  db.query(query, [category, postId, req.userId], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error publishing post' });
    if (result.affectedRows === 0) {
      return res.status(403).json({ error: 'You are not the author of this post or post does not exist' });
    }
    res.json({ message: 'Post published successfully' });
  });
});

// ✅ Add Comment to a Post
app.post('/api/posts/:postId/comments', verifyToken, (req, res) => {
  const { postId } = req.params;
  const { comment } = req.body;
  const userId = req.userId;

  if (!comment) return res.status(400).json({ error: 'Comment is required' });
  if (checkBadWords(comment)) return res.status(400).json({ error: 'Inappropriate language in comment' });

  const query = 'INSERT INTO comments (post_id, user_id, comment) VALUES (?, ?, ?)';
  db.query(query, [postId, userId, comment], (err) => {
    if (err) return res.status(500).json({ error: 'Error adding comment' });
    res.status(201).json({ message: 'Comment added successfully' });
  });
});

// ✅ Get Comments for a Post
app.get('/api/posts/:postId/comments', (req, res) => {
  const { postId } = req.params;

  const query = `
    SELECT comments.id, comments.comment, comments.created_at, users.username, users.email
    FROM comments
    JOIN users ON comments.user_id = users.id
    WHERE comments.post_id = ?
    ORDER BY comments.created_at DESC
  `;

  db.query(query, [postId], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error fetching comments' });
    res.json(results);
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
