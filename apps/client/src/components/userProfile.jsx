import Link from "next/link";

const UserProfile = () => {
    // Mock user information
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com'
    };
  
    return (
      <div className="absolute top-16 right-4 p-4 w-72  bg-white text-black border border-gray-300 rounded shadow-lg z-50">
        <div className=" flex space-x-6 ">
        <Link href="/login"><button className="px-6 p-2   bg-black text-white rounded-md">Sign In</button></Link>
        <p className="font-semibold text-xl ">or</p>
        <Link href="/register"><button className="px-6 p-2 bg-black text-white rounded-md">Sign Up</button></Link>
        </div>
      </div>
    );
  };

  export default UserProfile;