import React, { useState } from 'react';
// import axios from 'axios';

export default function Comment({ tweetId }) {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleCommentSubmit} className="flex">
        <input
          className="w-full rounded-l-full py-2 px-4 border border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-r-full px-4 hover:bg-blue-600 transition duration-300"
        >
          Post
        </button>
      </form>
    </div>
  );
}
