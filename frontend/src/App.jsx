import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/medications";

export default function App() {
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMedications(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>FDA Drug Recalls</h1>
      <table>
        <thead>
          <tr>
            <th>Recall #</th>
            <th>reason for recall</th>
            <th>Status</th>
            <th>Firm</th>
          </tr>
        </thead>
        <tbody>
          {medications.map((med) => (
            <tr key={med.id}>
              <td>{med.recall_identifier}</td>
              <td>{med.recall_reason}</td>
              <td>{med.status}</td>
              <td>{med.recalling_firm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}