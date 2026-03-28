export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-200 p-6 rounded shadow">Total Patients: 120</div>
        <div className="bg-green-200 p-6 rounded shadow">Active Treatments: 45</div>
        <div className="bg-red-200 p-6 rounded shadow">Critical Cases: 10</div>
      </div>
    </div>
  );
}