import React, { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("http://localhost:8000/api/users");
      const data = await res.json();
      setData(data);
    }

    fetchUsers();
  }, [data]);
  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 border-r">Name</th>
            <th className="py-2 px-4 border-r">Email</th>
            <th className="py-2 px-4">Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-r">{user.name}</td>
              <td className="py-2 px-4 border-r">{user.email}</td>
              <td className="py-2 px-4">{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
