import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-950 text-pink-100 py-5 w-full  bottom-0">
      <div className=" mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Ecommerce Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;