import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


function Footer() {
  return (
    <div>
    <div className='flex p-16 justify-between border '>
      <div>
      <h1 className='text-pink-950 text-2xl  mt-6 font-bold'>SSECOMMERCE</h1>
      <p className='text-gray-500 mt-6'>Bridging Boundaries, Elevating Solutions: <br />
        Your Ethiopian-Rooted, Global Tech Powerhouse.</p>
      <h1 className='font-bold text-xl'>social</h1>
      <div className='flex gap-4 mt-6'>
      <a href="https://facebook.com" className="text-pink-950 hover:underline">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="text-pink-950  hover:underline">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-pink-950 hover:underline">
            <FaInstagram size={24} />
          </a>
          </div>
      </div>

      <div className="">
       <h1 className="font-bold text-xl">Home</h1>
       <div className="text-gray-500 text-sm pr-96 ">
    <a href="/contact">Contact</a> <br />
       <a href="/about">About</a>
       </div>
      </div>
      </div>
      <div className=" border p-4  text-sm text-center text-gray-500">
      <p>&copy; {new Date().getFullYear()} SSECOMMERCE. All rights reserved.</p>
      </div>
      </div>
    
  )
}

export default Footer
