function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Course Platform</h1>
        <div>
          <a href="/" className="px-4 hover:text-gray-200">Home</a>
          <a href="/courses" className="px-4 hover:text-gray-200">Courses</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;