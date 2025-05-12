import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const categories = [
    {
      name: 'Travel',
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      path: '/travel',
    },
    {
        name: 'Education',
        img: 'https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?semt=ais_hybrid&w=740',
        path: '/education',
      },
      {
        name: 'Movies',
        img: 'https://img.freepik.com/free-photo/assortment-cinema-elements-red-background-with-copy-space_23-2148457848.jpg?semt=ais_hybrid&w=740',
        path: '/movies',
      },
      {
        name: 'Politics',
        img: 'https://mrwallpaper.com/images/hd/politics-podium-silhouette-amjcw84vb8mpn7x8.jpg',
        path: '/politics',
      },
      {
        name: 'Entertainment',
        img: 'https://wallpapers.com/images/featured/entertainment-background-gftd7gh987h1ckko.jpg',
        path: '/entertainment',
      },
    {
      name: 'Tech',
      img: 'https://i.pinimg.com/736x/00/08/06/0008069a050ade9ecf214d6ddd18021d.jpg',
      path: '/tech',
    },
  ];

  return (
    <div className="home-container container mt-5">
      <h4 className="text-center mb-4">Select a category to explore blogs.</h4>

      <div className="row">
        {categories.map((category) => (
          <div className="col-md-4 mb-4" key={category.name}>
            <div
              className="category-card"
              style={{
                backgroundImage: `url(${category.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
                borderRadius: '10px',
                position: 'relative',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                className="category-overlay text-center"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '20px',
                  borderRadius: '10px',
                  width: '100%',
                  height: '100%',
                }}
              >
                <h5 className="card-title">{category.name}</h5>
                <p className="card-text">Explore blogs about {category.name}.</p>
                <Link to={category.path} className="btn btn-light mt-2">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
