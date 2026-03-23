import { link } from "react-router-dom";
export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-900 text-white fixed p-5">
            <h2 className="text-2xl font-bold mb-6">Cancer Hospital</h2>
            <ul className="space -y-4">
                <li><Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link></li>
                <li><Link to="/patients" className="hover:text-blue-300">Patients</Link></li>
                <li><Link to="/doctors" className="hover:text-blue-300">Doctors</Link></li>
                <li><Link to="/appointments" className="hover:text-blue-300">Appointments</Link></li>
                <li><Link to="/billing" className="hover:text-blue-300">Billing</Link></li>
                <li><Link to="/lab-results" className="hover:text-blue-300">Lab-Results</Link></li>
                <li><Link to="/chemotherapy" className="hover:text-blue-300">Chemotherapy</Link></li>
                <li><Link to="/patient-details" className="hover:text-blue-300">Patient-Details</Link></li>

            </ul>
        </div>
    );
}