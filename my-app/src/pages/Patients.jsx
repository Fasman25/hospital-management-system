import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    location: "",
    symptoms: "",
  });

  // Fetch patients
  const fetchPatients = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/patients");
      setPatients(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form
  const addPatient = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/patients/register",
        form
      );

      alert(res.data.message);

      fetchPatients();

      // reset form
      setForm({
        name: "",
        age: "",
        gender: "",
        phone: "",
        email: "",
        location: "",
        symptoms: "",
      });

    } catch (err) {
      console.log(err);
      alert("Error registering patient");
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Patients</h1>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2" />

        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2" />

        <input name="age" value={form.age} onChange={handleChange} placeholder="Age" className="border p-2" />

        <input name="gender" value={form.gender} onChange={handleChange} placeholder="Gender" className="border p-2" />

        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border p-2" />

        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="border p-2" />

        <input name="symptoms" value={form.symptoms} onChange={handleChange} placeholder="Symptoms" className="border p-2" />
      </div>

      <button onClick={addPatient} className="bg-blue-500 text-white p-2 rounded">
        Register
      </button>

      <ul className="mt-4 space-y-2">
        {patients.map((p) => (
          <li key={p._id} className="border p-3 rounded">
            <Link to={`/patients/${p._id}`} className="font-bold">
              {p.name}
            </Link>
            <p>Age: {p.age}</p>
            <p>Email: {p.email}</p>
            <p>Phone: {p.phone}</p>
            <p>Symptoms: {p.symptoms}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}