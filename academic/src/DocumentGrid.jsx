import React from 'react';

const DocumentGrid = () => {
  const documents = [
    { id: 1, title: 'Math Notes 2023', type: 'Notes' },
    { id: 2, title: 'Physics Paper 2022', type: 'Question Paper' },
    { id: 3, title: 'Chemistry Notes 2022', type: 'Notes' },
   
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="bg-white bg-opacity-10 backdrop-blur-md border border-purple-glow rounded-lg shadow-3d p-6 hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-xl font-bold text-neon-blue">{doc.title}</h3>
          <p className="text-md text-gray-300">{doc.type}</p>
        </div>
      ))}
    </div>
  );
};

export default DocumentGrid;
