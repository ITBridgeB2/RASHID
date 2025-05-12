import React from 'react';
import { Link } from 'react-router-dom';

const SportsPage = () => {
  const blogs = [
    {
      title: 'The Rise of eSports: A New Era in Competitive Gaming',
      content: 'eSports has exploded in popularity over the last decade. This blog explores the rise of competitive gaming and its impact on the traditional sports industry.',
      author: 'Alex Johnson',
      type: 'Sports',
      image: 'https://source.unsplash.com/600x400/?esports'
    },
    {
      title: 'The Legacy of Michael Jordan in Basketball',
      content: 'Michael Jordan’s influence on the game of basketball goes beyond his incredible achievements on the court. This blog takes a deep dive into his lasting impact on the sport.',
      author: 'Mia Williams',
      type: 'Sports',
      image: 'https://source.unsplash.com/600x400/?michael-jordan'
    },
    {
      title: 'The Evolution of Football Tactics',
      content: 'Football tactics have evolved drastically over the years. This blog examines how strategies in the beautiful game have changed and what it means for the future of football.',
      author: 'Jack Smith',
      type: 'Sports',
      image: 'https://source.unsplash.com/600x400/?football'
    },
    {
      title: 'Why Women’s Sports Deserve More Recognition',
      content: 'Women’s sports have been gaining momentum, but they still lack the recognition they deserve. This blog looks at the challenges and the growing support for female athletes.',
      author: 'Sophie Adams',
      type: 'Sports',
      image: 'https://source.unsplash.com/600x400/?womens-sports'
    },
    {
      title: 'How Technology is Changing Sports',
      content: 'From VR to instant replays, technology has revolutionized the sports viewing experience. This blog discusses how new tech trends are shaping how fans engage with sports.',
      author: 'James Lee',
      type: 'Sports',
      image: 'https://source.unsplash.com/600x400/?sports-technology'
    },
    {
      title: 'Best Sports Documentaries to Watch in 2025',
      content: 'Sports documentaries have become a genre in their own right. This blog compiles the best sports documentaries you need to watch in 2025.',
      author: 'Ella Martinez',
      type: 'Sports',
      image: 'https://source.unsplash.com/600x400/?sports-documentary'
    },
    {
      title: 'The Future of the Olympic Games',
      content: 'The Olympic Games continue to evolve. This blog explores what changes we can expect and what new sports might be added to the roster.',
      author: 'Daniel Kim',
      type: 'Sports',
      image: 'https://source.unsplash.com/600x400/?olympics'
    },
    {
      title: 'Mental Health in Professional Sports',
      content: 'Mental health is critical in an athlete’s life. This blog explores how sports teams and organizations are addressing mental wellness today.',
      author: 'Olivia Brown',
      type: 'Sports',
      image: 'https://source.unsplash.com/600x400/?athletes-mental-health'
    },
  ];

  return (
    <div className="container mt-5">
      <style>{`
        .sports-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
        }

        .sports-card:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .sports-img {
          height: 180px;
          background-size: cover;
          background-position: center;
        }

        .sports-card-body {
          padding: 1rem;
        }

        .sports-title {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .sports-text {
          font-size: 0.95rem;
          color: #555;
        }

        .sports-footer {
          background-color: #f8f9fa;
          font-size: 0.85rem;
        }

        .sports-btn {
          background-color: #ff5733;
          border: none;
          color: white;
          padding: 8px 16px;
          font-size: 0.9rem;
          font-weight: bold;
          border-radius: 20px;
          text-transform: uppercase;
        }

        .sports-btn:hover {
          background-color: #ff3d00;
        }
      `}</style>

      <h2 className="text-center mb-4 text-primary">Sports Blogs</h2>

      <div className="row justify-content-center">
        {blogs.map((blog, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card sports-card h-100 shadow">
              <div
                className="sports-img"
                style={{ backgroundImage: `url(${blog.image})` }}
              ></div>
              <div className="card-body sports-card-body">
                <h5 className="sports-title">{blog.title}</h5>
                <p className="sports-text">{blog.content.substring(0, 120)}...</p>
                <p className="text-muted mb-1"><small>By {blog.author}</small></p>
                <p className="text-muted"><small>Type: {blog.type}</small></p>
                <Link to="#" className="btn sports-btn">Read More</Link>
              </div>
              <div className="card-footer sports-footer text-center">
                <small>Published 3 days ago</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsPage;
