export default function Navbar() {
  return (
    <div className="w-full bg-white shadow p-4 flex justify-between items-center fixed top-0 left-0 z-10 ml-64">
      <h1 className="text-xl font-bold">Hospital Management System</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome, Admin</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Logout
        </button>
      </div>
    </div>
  );
}