import React from 'react';
import { Link } from 'react-router-dom';

const EducationPage = () => {
  const blogs = [
    {
      title: 'The Future of Online Education',
      content: 'With the rise of online learning platforms, education has become more accessible than ever...',
      author: 'Alice Johnson',
      email: 'alicejohnson@gmail.com',
      type: 'Education',
      image: 'https://source.unsplash.com/600x400/?online-education',
    },
    {
      title: 'Top 10 Study Hacks for Students',
      content: 'Discover effective study techniques to boost your productivity...',
      author: 'Bob Smith',
      email: 'bobsmith@gmail.com',
      type: 'Education',
      image: 'https://source.unsplash.com/600x400/?study,students',
    },
    {
      title: 'How to Choose the Right Career Path',
      content: 'Choosing a career is one of the most important decisions you’ll make...',
      author: 'Carol White',
      email: 'carolwhite@gmail.com',
      type: 'Education',
      image: 'https://source.unsplash.com/600x400/?career,education',
    },
    {
      title: 'The Importance of Lifelong Learning',
      content: 'Lifelong learning is essential to personal growth and career success...',
      author: 'David Green',
      email: 'davidgreen@gmail.com',
      type: 'Education',
      image: 'https://source.unsplash.com/600x400/?lifelong-learning',
    },
    {
      title: 'Top 5 Skills Every Student Should Learn',
      content: 'In today’s fast-paced world, students need more than just academic knowledge...',
      author: 'Eva Brown',
      email: 'evabrown@gmail.com',
      type: 'Education',
      image: 'https://source.unsplash.com/600x400/?student-skills',
    },
    {
      title: 'How Technology is Revolutionizing Education',
      content: 'Technology has had a profound impact on education, from AI tutors to virtual classrooms...',
      author: 'Franklin Lee',
      email: 'franklinlee@gmail.com',
      type: 'Education',
      image: 'https://source.unsplash.com/600x400/?education-technology',
    },
    {
      title: 'The Role of Emotional Intelligence in Education',
      content: 'Emotional intelligence (EQ) plays a significant role in academic success...',
      author: 'Grace Harris',
      email: 'graceharris@gmail.com',
      type: 'Education',
      image: 'https://source.unsplash.com/600x400/?emotional-intelligence',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-success">Education Blogs</h2>
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
                <Link to="#" className="btn btn-success btn-sm mt-2" style={{ borderRadius: '20px', fontWeight: 'bold' }}>
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

export default EducationPage;
