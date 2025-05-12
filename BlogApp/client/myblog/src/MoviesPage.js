import React from 'react';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  const blogs = [
    {
      title: 'The Best Blockbusters of 2025',
      content: '2025 is set to bring some incredible movies to theaters. This blog takes a look at the most anticipated blockbusters.',
      author: 'Michael R.',
      email: 'michaelr@gmail.com',
      type: 'Movies',
      image: 'https://source.unsplash.com/600x400/?blockbuster,movie',
    },
    {
      title: 'Top Action Movies to Watch in 2025',
      content: 'Action-packed films are a staple of the movie industry. Here are the top action movies that you should look out for in 2025.',
      author: 'Amanda W.',
      email: 'amandaw@gmail.com',
      type: 'Movies',
      image: 'https://source.unsplash.com/600x400/?action,movie',
    },
    {
      title: 'The Future of Movie Theaters',
      content: 'With the rise of streaming, the future of movie theaters is in question. This blog explores how cinemas are adapting to survive.',
      author: 'Steve M.',
      email: 'stevem@gmail.com',
      type: 'Movies',
      image: 'https://source.unsplash.com/600x400/?movie-theater',
    },
    {
      title: 'The Impact of Streaming Services on the Movie Industry',
      content: 'Streaming platforms like Netflix and Disney+ have changed the way we watch movies. This blog discusses the impact on the movie industry.',
      author: 'Lauren T.',
      email: 'laurent@gmail.com',
      type: 'Movies',
      image: 'https://source.unsplash.com/600x400/?streaming,service',
    },
    {
      title: 'Top Animated Movies to Watch in 2025',
      content: 'Animation continues to grow in popularity. This blog covers the best animated movies to look out for in 2025.',
      author: 'Nick F.',
      email: 'nickf@gmail.com',
      type: 'Movies',
      image: 'https://source.unsplash.com/600x400/?animated,movie',
    },
    {
      title: 'Oscar Predictions for 2025',
      content: 'As the Oscars approach, everyone wants to know which films are likely to take home the golden statue. We analyze the contenders.',
      author: 'Jessica D.',
      email: 'jessicad@gmail.com',
      type: 'Movies',
      image: 'https://source.unsplash.com/600x400/?oscar',
    },
    {
      title: 'The Evolution of Superhero Movies',
      content: 'Superhero movies have become a dominating force in Hollywood. This blog takes a look at how the genre has evolved over the years.',
      author: 'Brian K.',
      email: 'briank@gmail.com',
      type: 'Movies',
      image: 'https://source.unsplash.com/600x400/?superhero,movie',
    },
    {
      title: 'The Return of Classic Movie Franchises',
      content: 'Many classic movie franchises are making a return in 2025. This blog explores the upcoming sequels and remakes that fans are eagerly waiting for.',
      author: 'Samantha P.',
      email: 'samanthap@gmail.com',
      type: 'Movies',
      image: 'https://source.unsplash.com/600x400/?classic,franchise',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Movies Blogs</h2>
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

export default MoviesPage;
