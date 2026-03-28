import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed p-5">
      <ul className="space-y-4 mt-8">
        <li>
          <Link to="/" className="hover:text-blue-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/patients" className="hover:text-blue-300">
            Patients
          </Link>
        </li>
      </ul>
    </div>
  );
}