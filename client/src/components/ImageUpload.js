import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);

    try {
      const res = await axios.post('http://localhost:5000/api/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleImageUpload}>
      <input
        type="text"
        placeholder="Image Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageUpload;
