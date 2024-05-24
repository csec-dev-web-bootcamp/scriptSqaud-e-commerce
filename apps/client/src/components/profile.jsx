const ProfileCard = () => {

    
const user = {
          name: 'John Doe',
          email: 'john.doe@example.com'
        };

  return (
    <div className="absolute top-16 right-4 p-4 bg-white text-black border border-gray-300 rounded shadow-lg z-50">
    <h3 className="text-lg font-semibold mb-2">User Profile</h3>
    <p className="mb-1"><strong>Name:</strong> {user.name}</p>
    <p><strong>Email:</strong> {user.email}</p>
  </div>
  );
}

export default ProfileCard;
