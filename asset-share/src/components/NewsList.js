import React from 'react';

const NewsList = ({ title, img, link, source, author, publishedAt, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={title} className="w-full h-48 object-cover" />
      </a>
      <div className="p-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-semibold text-lg"
        >
          {title}
        </a>
        <p className="text-gray-700 text-sm">{description}</p>
        <div className="flex items-center mt-4">
          <img
            src={source.id ? `/icons/${source.id}.png` : '/icons/default.png'} // You can store icons locally and use them
            alt={source.name}
            className="w-4 h-4 mr-1"
          />
          <span className="text-gray-600 text-xs">{source.name}</span>
          <span className="text-gray-600 text-xs mx-2">|</span>
          <span className="text-gray-600 text-xs">{publishedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsList;