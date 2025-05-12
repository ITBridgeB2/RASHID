import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');
  const [showFullContent, setShowFullContent] = useState(null);
  const [editPostId, setEditPostId] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/mypost', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data);
      } catch (error) {
        setMessage('Failed to load posts');
      }
    };

    fetchPosts();
  }, []);

  const handleDeletePost = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/deletePost/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      setMessage('Failed to delete post');
    }
  };

  const startEdit = (post) => {
    setEditPostId(post.id);
    setNewTitle(post.title);
    setNewContent(post.content);
    setNewCategory(post.category);
    setNewAuthor(post.username);
  };

  const handleEditPost = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      const updatedPost = {
        title: newTitle,
        content: newContent,
        category: newCategory,
        author: newAuthor,
      };
      await axios.put(`http://localhost:5000/api/updatePost/${postId}`, updatedPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(posts.map((post) => (post.id === postId ? { ...post, ...updatedPost } : post)));
      setEditPostId(null);
      setMessage('Post updated successfully!');
    } catch (error) {
      setMessage('Failed to edit post');
    }
  };

  const handleToggleFullContent = (postId) => {
    setShowFullContent((prevState) => (prevState === postId ? null : postId));
  };

  const handlePublishPost = async (postId, category) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:5000/api/publishPost/${postId}`,
        { category },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage('Post published successfully!');
      navigate(`/${category}`);
    } catch (error) {
      setMessage('Failed to publish post');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="container mt-5">
      <h3>My Posts</h3>
      {message && <div className="alert alert-info">{message}</div>}
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="row">
          {posts.map((post) => (
            <div className="col-md-6 mb-4" key={post.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  {editPostId === post.id ? (
                    <>
                      <div className="mb-2">
                        <label>Title</label>
                        <input
                          type="text"
                          value={newTitle}
                          onChange={(e) => setNewTitle(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="mb-2">
                        <label>Content</label>
                        <textarea
                          value={newContent}
                          onChange={(e) => setNewContent(e.target.value)}
                          className="form-control"
                          rows={5}
                        />
                      </div>
                      <div className="mb-2">
                        <label>Content-Type</label>
                        <input
                          type="text"
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label>Author</label>
                        <input
                          type="text"
                          value={newAuthor}
                          onChange={(e) => setNewAuthor(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <button onClick={() => handleEditPost(post.id)} className="btn btn-primary">
                        Save
                      </button>
                      <button
                        onClick={() => setEditPostId(null)}
                        className="btn btn-secondary ml-2"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <h5 className="card-title">{post.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Author: {post.username}</h6>
                      <h6 className="card-subtitle mb-2 text-muted">Content-Type: {post.category}</h6>
                      <p className="card-text text-muted">
                        Created on: {formatDate(post.created_at)}
                      </p>
                      <p className="card-text">
                        {showFullContent === post.id
                          ? post.content
                          : post.content.substring(0, 100) + '...'}
                      </p>
                      <button
                        onClick={() => handleToggleFullContent(post.id)}
                        className="btn btn-link"
                      >
                        {showFullContent === post.id ? 'Show Less' : 'View Full Content'}
                      </button>
                      <button
                        onClick={() => startEdit(post)}
                        className="btn btn-warning ml-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="btn btn-danger ml-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handlePublishPost(post.id, post.category)}
                        className="btn btn-success ml-2"
                      >
                        Publish
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPosts;
