import React from 'react';
import { Link } from 'react-router-dom';

const TravelPage = () => {
  const blogs = [
    {
      title: 'Top 10 Places to Visit in Europe',
      content: 'Europe is home to some of the most iconic landmarks and diverse cultures...',
      author: 'John Doe',
      email: 'johndoe@gmail.com',
      type: 'Travel',
      image: 'https://source.unsplash.com/600x400/?europe,travel',
    },
    {
      title: 'The Ultimate Guide to Budget Travel',
      content: 'Traveling on a budget is possible with the right planning...',
      author: 'Jane Smith',
      email: 'janesmith@gmail.com',
      type: 'Travel',
      image: 'https://source.unsplash.com/600x400/?budget-travel',
    },
    {
      title: 'How to Travel Solo Safely',
      content: 'Solo travel is one of the most liberating experiences...',
      author: 'Michael Johnson',
      email: 'michaeljohnson@gmail.com',
      type: 'Travel',
      image: 'https://source.unsplash.com/600x400/?solo-travel',
    },
    {
      title: 'Best Hiking Trails Around the World',
      content: 'For outdoor enthusiasts, hiking is an exhilarating way to connect with nature...',
      author: 'Sarah Lee',
      email: 'sarahlee@gmail.com',
      type: 'Travel',
      image: 'https://source.unsplash.com/600x400/?hiking,adventure',
    },
    {
      title: 'The Best Cities for Food Lovers',
      content: 'Food is one of the best ways to experience a new culture...',
      author: 'Chris Walker',
      email: 'chriswalker@gmail.com',
      type: 'Travel',
      image: 'https://source.unsplash.com/600x400/?food,travel',
    },
    {
      title: 'Top 5 Luxury Travel Experiences',
      content: 'For those looking to indulge in the finer things...',
      author: 'Rachel Adams',
      email: 'racheladams@gmail.com',
      type: 'Travel',
      image: 'https://source.unsplash.com/600x400/?luxury,travel',
    },
    {
      title: 'Cultural Etiquette Around the World',
      content: 'Understanding cultural norms is key when traveling to new places...',
      author: 'David Brown',
      email: 'davidbrown@gmail.com',
      type: 'Travel',
      image: 'https://source.unsplash.com/600x400/?culture,world',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-danger">Travel Blogs</h2>
      <div className="row">
        {blogs.map((blog, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shadow-lg border-0 rounded-lg overflow-hidden" style={{ height: '400px' }}>
              <div
                style={{
                  height: '160px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage: `url(${blog.image})`,
                }}
              ></div>
              <div className="card-body p-3" style={{ height: '160px' }}>
                <small className="text-muted d-block mb-1"><strong>{blog.email}</strong></small>
                <h5 className="card-title text-dark" style={{ fontSize: '1.1rem' }}>{blog.title}</h5>
                <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>{blog.content.substring(0, 80)}...</p>
                <p className="text-muted mb-0"><small>By {blog.author}</small></p>
                <p className="text-muted"><small>Type: {blog.type}</small></p>
                <Link to="#" className="btn btn-danger btn-sm mt-2" style={{ borderRadius: '20px', fontWeight: 'bold' }}>
                  <i className="fas fa-arrow-right"></i> Read More
                </Link>
              </div>
              <div className="card-footer text-muted text-center" style={{ fontSize: '0.8rem' }}>
                <small>Published 2 days ago</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPage;
