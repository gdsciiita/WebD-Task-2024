import React, { useState } from 'react';

const ContributionForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'Notes',
    file: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
   
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur-md border border-purple-glow rounded-lg shadow-3d p-6">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-neon-blue" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full p-2 bg-gray-800 bg-opacity-20 border border-gray-600 rounded focus:outline-none focus:border-indigo-500 text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-neon-blue" htmlFor="type">
          Type
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          className="w-full p-2 bg-gray-800 bg-opacity-20 border border-gray-600 rounded focus:outline-none focus:border-indigo-500 text-white"
          required
        >
          <option value="Notes">Notes</option>
          <option value="Question Paper">Question Paper</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2 text-neon-blue" htmlFor="file">
          Upload File
        </label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
          className="w-full p-2 bg-gray-800 bg-opacity-20 border border-gray-600 rounded focus:outline-none text-white"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded shadow-button-glow hover:shadow-indigo-500/40 transition-all duration-300"
      >
        Submit Contribution
      </button>
    </form>
  );
};

export default ContributionForm;
