import React from 'react';
import { Link } from 'react-router-dom';

const EntertainmentPage = () => {
  const blogs = [
    {
      title: 'The Evolution of Reality TV',
      content: 'Reality TV has taken the world by storm. This blog explores how reality television has evolved and become a cultural phenomenon.',
      author: 'Sarah Miller',
      email: 'sarahmiller@gmail.com',
      type: 'Entertainment',
      image: 'https://source.unsplash.com/600x400/?reality-tv',
    },
    {
      title: 'The Best Movies of 2025: A Sneak Peek',
      content: 'The year 2025 promises some great movies. This blog takes a look at the top films expected to hit theaters and why you should be excited.',
      author: 'Tom Harris',
      email: 'tomharris@gmail.com',
      type: 'Entertainment',
      image: 'https://source.unsplash.com/600x400/?movies,2025',
    },
    {
      title: 'How Music Festivals are Changing the Entertainment Industry',
      content: 'Music festivals have become an essential part of the entertainment industry. This blog discusses how they have transformed the way we experience live music.',
      author: 'Olivia Taylor',
      email: 'oliviataylor@gmail.com',
      type: 'Entertainment',
      image: 'https://source.unsplash.com/600x400/?music-festival',
    },
    {
      title: 'The Impact of Streaming Services on Entertainment Consumption',
      content: 'Streaming services have revolutionized the way we consume entertainment. This blog analyzes how platforms like Netflix, Hulu, and Disney+ have changed the industry.',
      author: 'Liam King',
      email: 'liamking@gmail.com',
      type: 'Entertainment',
      image: 'https://source.unsplash.com/600x400/?streaming',
    },
    {
      title: 'The Role of Social Media in Celebrity Culture',
      content: 'Social media plays a huge role in celebrity culture today. This blog looks at how platforms like Instagram and Twitter influence the lives of celebrities and their fans.',
      author: 'Megan Adams',
      email: 'meganadams@gmail.com',
      type: 'Entertainment',
      image: 'https://source.unsplash.com/600x400/?social-media,celebrity',
    },
    {
      title: 'The Future of Video Games: Virtual Reality and Beyond',
      content: 'Video games are evolving rapidly with the advent of virtual reality. This blog discusses the future of gaming and what we can expect in the coming years.',
      author: 'Nathaniel Scott',
      email: 'nscott@gmail.com',
      type: 'Entertainment',
      image: 'https://source.unsplash.com/600x400/?virtual-reality,gaming',
    },
    {
      title: 'How Podcasts Are Redefining the Entertainment Landscape',
      content: 'Podcasts have become one of the fastest-growing entertainment mediums. This blog explores the rise of podcasts and their influence on culture.',
      author: 'Emily Clark',
      email: 'emilyclark@gmail.com',
      type: 'Entertainment',
      image: 'https://source.unsplash.com/600x400/?podcast',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Entertainment Blogs</h2>
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
                <Link to="#" className="btn btn-primary btn-sm mt-2" style={{ borderRadius: '20px', fontWeight: 'bold' }}>
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

export default EntertainmentPage;
