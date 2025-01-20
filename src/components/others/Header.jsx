
const Header = ({ user }) => {
  const handleLogout = () => {
    // localStorage.clear()
    localStorage.setItem('loggedInUser', '')
    window.location.reload();
  }
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-semibold  ">
        Hello <br />
        <span className="text-3xl">{user?.firstName ?? "Admin"} 👋🏻</span>
      </h1>
      <button className="bg-red-600 text-lg font-medium text-white px-3 py-1 rounded-sm" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Header;
