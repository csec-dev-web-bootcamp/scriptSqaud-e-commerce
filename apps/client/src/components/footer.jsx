import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5 w-full -mb-auto bottom-0">
      <div className=" mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Ecommerce Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;