"use client";

import React, { useState } from 'react';

const NewsForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    short_des: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    keywords: '',
    long_des: '',
    type: '',
    catID: '', // Assuming you have categories to select from
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to submit the form data to the backend
    try {
      const response = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('News submitted successfully!');
        setFormData({
          title: '',
          short_des: '',
          img1: '',
          img2: '',
          img3: '',
          img4: '',
          keywords: '',
          long_des: '',
          type: '',
          catID: '',
        });
      } else {
        alert('Failed to submit news.');
      }
    } catch (error) {
      console.error('Error submitting news:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>Title</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="short_des" style={{ display: 'block', marginBottom: '5px' }}>Short Description</label>
        <textarea id="short_des" name="short_des" value={formData.short_des} onChange={handleChange} placeholder="Short Description" required style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="img1" style={{ display: 'block', marginBottom: '5px' }}>Image 1 URL</label>
        <input type="text" id="img1" name="img1" value={formData.img1} onChange={handleChange} placeholder="Image 1 URL" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="img2" style={{ display: 'block', marginBottom: '5px' }}>Image 2 URL</label>
        <input type="text" id="img2" name="img2" value={formData.img2} onChange={handleChange} placeholder="Image 2 URL" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="img3" style={{ display: 'block', marginBottom: '5px' }}>Image 3 URL</label>
        <input type="text" id="img3" name="img3" value={formData.img3} onChange={handleChange} placeholder="Image 3 URL" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="img4" style={{ display: 'block', marginBottom: '5px' }}>Image 4 URL</label>
        <input type="text" id="img4" name="img4" value={formData.img4} onChange={handleChange} placeholder="Image 4 URL" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="keywords" style={{ display: 'block', marginBottom: '5px' }}>Keywords</label>
        <input type="text" id="keywords" name="keywords" value={formData.keywords} onChange={handleChange} placeholder="Keywords" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="long_des" style={{ display: 'block', marginBottom: '5px' }}>Long Description</label>
        <textarea id="long_des" name="long_des" value={formData.long_des} onChange={handleChange} placeholder="Long Description" required style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="type" style={{ display: 'block', marginBottom: '5px' }}>Type</label>
        <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} placeholder="Type" required style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="catID" style={{ display: 'block', marginBottom: '5px' }}>Category ID</label>
        <input type="number" id="catID" name="catID" value={formData.catID} onChange={handleChange} placeholder="Category ID" required style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
      </div>
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit News</button>
    </form>
  );
};

export default NewsForm; 