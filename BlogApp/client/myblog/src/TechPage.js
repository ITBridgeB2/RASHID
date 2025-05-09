import React, { useState } from 'react';

const TechPage = () => {
  const blogs = [
    {
      title: 'The Rise of Artificial Intelligence',
      content:
        'AI is transforming industries and society in ways we never imagined. With the advancement in machine learning algorithms and computational power...',
      author: 'Daniel Black',
      email: 'rashid@gmail.com',
      type: 'Tech',
      image: 'https://source.unsplash.com/600x400/?artificial-intelligence',
    },
    {
      title: 'Blockchain Technology Explained',
      content:
        'Blockchain has the potential to revolutionize industries. It is a decentralized and distributed digital ledger technology...',
      author: 'Linda Green',
      email: 'John@gmail.com',
      type: 'Tech',
      image: 'https://www.draegan.com/content/images/2021/08/YT-Cloud-Computing-2.png',
    },
    {
      title: 'The Future of 5G: What to Expect',
      content:
        '5G promises faster internet speeds and better connectivity for smart devices, AI systems, and the Internet of Things...',
      author: 'Carlos White',
      email: 'raheem@gmail.com',
      type: 'Tech',
      image: 'https://source.unsplash.com/600x400/?5g',
    },
    {
      title: 'Virtual Reality: Changing Experiences',
      content:
        'Virtual reality is becoming more mainstream in education, gaming, and even healthcare...',
      author: 'Jessica Moore',
      email: 'raviMohan@gmail.com',
      type: 'Tech',
      image: 'https://source.unsplash.com/600x400/?virtual-reality',
    },
    {
      title: 'The Role of Cybersecurity in the Digital Age',
      content:
        'Cybersecurity is critical as we shift more online. With growing data breaches and hacking incidents...',
      author: 'Oliver Black',
      email: 'Nandan@gmail.com',
      type: 'Tech',
      image: 'https://source.unsplash.com/600x400/?cybersecurity',
    },
    {
      title: 'Smartphone Evolution: A Journey',
      content:
        'Smartphones have evolved from simple communication devices to powerful computing machines...',
      author: 'Emily Foster',
      email: 'PremKumar@gmail.com',
      type: 'Tech',
      image: 'https://source.unsplash.com/600x400/?smartphone',
    },
    {
      title: 'Cloud Computing for Business',
      content:
        'Cloud computing has revolutionized how businesses operate by offering scalable and flexible computing resources over the internet...',
      author: 'Mark Adams',
      email: 'Vamshi@gmail.com',
      type: 'Tech',
      image: 'https://source.unsplash.com/600x400/?cloud-computing',
    },
    {
      title: 'The Internet of Things (IoT): Connecting the World',
      content:
        'The Internet of Things (IoT) refers to the growing network of connected devices that communicate with each other...',
      author: 'Sarah White',
      email: 'sarahwhite@gmail.com',
      type: 'Tech',
      image: 'https://source.unsplash.com/600x400/?internet-of-things',
    },
  ];

  const [expanded, setExpanded] = useState(Array(blogs.length).fill(false)); // Track expanded state for each blog

  const handleReadMore = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index]; // Toggle expanded state
      return newExpanded;
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5 text-primary fw-bold" style={{ fontSize: '2rem' }}>
        Tech Blogs
      </h2>

      <div className="row">
        {blogs.map((blog, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card shadow-sm border-0 rounded-4 h-100">
              {/* Email Header */}
              <div className="card-header bg-light text-muted text-center py-2" style={{ backgroundColor: '#f8f9fa' }}>
                <small>{blog.email}</small>
              </div>

              {/* Blog Image */}
              <div
                className="w-100"
                style={{
                  backgroundImage: `url('${blog.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '180px',
                  borderTopLeftRadius: '4px',
                  borderTopRightRadius: '4px',
                }}
              ></div>

              {/* Blog Content */}
              <div className="card-body px-4 py-3">
                <h5 className="card-title text-dark" style={{ fontSize: '1.25rem' }}>
                  {blog.title}
                </h5>
                <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                  {expanded[index] ? blog.content : blog.content.substring(0, 100) + '...'}
                </p>
                <button
                  className="btn btn-sm btn-outline-primary w-100 mt-2"
                  style={{ fontSize: '0.85rem', padding: '0.5rem' }}
                  onClick={() => handleReadMore(index)}
                >
                  {expanded[index] ? 'Show Less' : 'Read More'}
                </button>
                <p className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>
                  <strong>Author:</strong> {blog.author}
                </p>
                <p className="text-muted" style={{ fontSize: '0.85rem' }}>
                  <strong>Type:</strong> {blog.type}
                </p>
              </div>

              {/* Comment Section */}
              <div className="px-4 pb-3">
                <textarea
                  className="form-control mb-2"
                  rows="2"
                  placeholder="Write a comment..."
                  style={{ fontSize: '0.85rem' }}
                />
                <button className="btn btn-sm btn-outline-secondary w-100" style={{ fontSize: '0.85rem' }}>
                  Submit Comment
                </button>
              </div>

              {/* Footer */}
              <div className="card-footer text-center text-muted py-2">
                <small>Published 2 days ago</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechPage;
