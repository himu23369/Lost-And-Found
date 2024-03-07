import React, { useState } from 'react';
import { categories } from './data/data';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReportItemSection = () => {
  const [formData, setFormData] = useState({
    category: '',
    itemName: '',
    image: null,
    details: '',
    status: 'found', // Default to 'found', can be changed to 'lost'
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/item/submit', formData);
      console.log(response.data.message);
      toast.success('Report of the item submitted to the Admin.');
      setFormData({
        category: '',
        itemName: '',
        image: null,
        details: '',
        status: 'found',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Report Found or Lost Item</h1>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-semibold text-gray-600">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Item Name */}
          <div className="mb-4">
            <label htmlFor="itemName" className="block text-sm font-semibold text-gray-600">
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
              placeholder="Enter item name"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-semibold text-gray-600">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
            />
          </div>

          {/* Additional Details */}
          <div className="mb-4">
            <label htmlFor="details" className="block text-sm font-semibold text-gray-600">
              Additional Details
            </label>
            <textarea
              id="details"
              name="details"
              rows="4"
              value={formData.details}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
              placeholder="Provide additional details..."
            ></textarea>
          </div>

          {/* Status (Found or Lost) */}
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-semibold text-gray-600">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3"
            >
              <option value="found">Found</option>
              <option value="lost">Lost</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit Report
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ReportItemSection;
