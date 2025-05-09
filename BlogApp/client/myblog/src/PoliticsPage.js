import React from 'react';
import { Link } from 'react-router-dom';

const PoliticsPage = () => {
  const blogs = [
    {
      title: 'The Rise of Political Polarization',
      content: 'Political polarization is at an all-time high. This blog explores how the division in political ideologies is affecting democracy...',
      author: 'John Doe',
      type: 'Politics',
      image: 'https://source.unsplash.com/600x400/?politics,polarization',
    },
    {
      title: 'Election 2024: What’s at Stake?',
      content: 'The 2024 elections are right around the corner. This blog covers what’s at stake for voters, candidates, and the future...',
      author: 'Jane Smith',
      type: 'Politics',
      image: 'https://source.unsplash.com/600x400/?election',
    },
    {
      title: 'The Role of Social Media in Politics',
      content: 'Social media platforms like Twitter and Facebook are shaping political discourse. This blog examines how they influence...',
      author: 'Mark Johnson',
      type: 'Politics',
      image: 'https://source.unsplash.com/600x400/?social-media,politics',
    },
    {
      title: 'Understanding Political Campaigns',
      content: 'Political campaigns are complex and multi-faceted. Learn about the strategies, technologies, and methods that go into...',
      author: 'Emily White',
      type: 'Politics',
      image: 'https://source.unsplash.com/600x400/?campaign',
    },
    {
      title: 'Global Politics: Major Trends in 2025',
      content: 'This blog explores the emerging trends in global politics for 2025, highlighting shifting alliances, economic factors...',
      author: 'David Brown',
      type: 'Politics',
      image: 'https://source.unsplash.com/600x400/?global-politics',
    },
    {
      title: 'The Impact of Political Leaders on Global Relations',
      content: 'Political leaders influence international relations, whether through diplomacy or conflict. This blog delves into the power...',
      author: 'Olivia Green',
      type: 'Politics',
      image: 'https://source.unsplash.com/600x400/?leaders,politics',
    },
    {
      title: 'How Political Parties Shape National Policy',
      content: 'Political parties play a central role in government policy. This blog discusses how party ideologies influence national and...',
      author: 'Liam Gray',
      type: 'Politics',
      image: 'https://source.unsplash.com/600x400/?political-party',
    },
    {
      title: 'The Future of Democracy',
      content: 'The future of democratic systems is uncertain. In this blog, we explore potential challenges and solutions to ensuring...',
      author: 'Sarah Moore',
      type: 'Politics',
      image: 'https://source.unsplash.com/600x400/?democracy,future',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Politics Blogs</h2>
      <div className="row">
        {blogs.map((blog, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shadow-lg border-0 rounded-lg overflow-hidden" style={{ height: '380px' }}>
              <div
                style={{
                  height: '160px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage: `url(${blog.image})`,
                }}
              ></div>
              <div className="card-body p-3" style={{ height: '140px' }}>
                <h5 className="card-title text-dark" style={{ fontSize: '1.1rem' }}>{blog.title}</h5>
                <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>{blog.content.substring(0, 80)}...</p>
                <p className="text-muted"><small>By {blog.author}</small></p>
                <p className="text-muted"><small>Content Type: {blog.type}</small></p>
                {/* Stylish Read More Button */}
                <Link to="#" className="btn btn-primary btn-sm mt-3" style={{ borderRadius: '20px', fontWeight: 'bold' }}>
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

export default PoliticsPage;
