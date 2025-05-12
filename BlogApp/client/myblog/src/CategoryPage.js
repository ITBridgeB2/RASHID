import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CategoryPage = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/postsByCategory/${category}`);
        setPosts(res.data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    fetchPosts();
  }, [category]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">{category.charAt(0).toUpperCase() + category.slice(1)} Blogs</h2>
      <div className="row">
        {posts.map((post, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shadow-lg border-0 rounded-lg overflow-hidden" style={{ height: '400px' }}>
              <div
                style={{
                  height: '160px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage: `url(https://source.unsplash.com/600x400/?${post.content_type})`,
                }}
              ></div>
              <div className="card-body p-3" style={{ height: '160px' }}>
                <small className="text-muted d-block mb-1"><strong>{post.email || 'Anonymous'}</strong></small>
                <h5 className="card-title text-dark" style={{ fontSize: '1.1rem' }}>{post.title}</h5>
                <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>{post.content.substring(0, 80)}...</p>
                <p className="text-muted mb-0"><small>By {post.author}</small></p>
                <p className="text-muted"><small>Type: {post.content_type}</small></p>
                <Link to="#" className="btn btn-primary btn-sm mt-2" style={{ borderRadius: '20px', fontWeight: 'bold' }}>
                  <i className="fas fa-arrow-right"></i> Read More
                </Link>
              </div>
              <div className="card-footer text-muted text-center" style={{ fontSize: '0.8rem' }}>
                <small>Published recently</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
