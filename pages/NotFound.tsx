
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-6xl font-bold text-brand-purple">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <p className="text-gray-600 mt-2">Sorry, the page you are looking for does not exist.</p>
      <Link to="/dashboard" className="mt-6 px-4 py-2 bg-brand-purple text-white rounded-lg">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
