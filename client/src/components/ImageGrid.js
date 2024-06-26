import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import './ImageGrid.css';

const ImageGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log('API URL:', process.env.REACT_APP_API_URL); 
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/images`);
        setImages(res.data);
      } catch (err) {
        console.error('Error fetching images:', err.message);
      }
    };

    fetchImages();
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map(image => (
        <div key={image._id} className="image-item">
          <img src={`${process.env.REACT_APP_API_URL}${image.imageUrl}`} alt={image.title} />
        </div>
      ))}
    </Masonry>
  );
};

export default ImageGrid;
