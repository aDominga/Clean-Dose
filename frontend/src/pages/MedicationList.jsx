import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/api/medications";

export default function MedicationList() {
  const navigate = useNavigate();
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
    <div className="app">
      <header className="app-header">
        <h1>FDA Drug Recalls</h1>
      </header>

        <div className="table-shell">
        <div className="table-scroll">
        <table className="recalls-table">
          <thead>
            <tr>
              <th>Recall #</th>
              <th>Description</th>
              <th>Reason for recall</th>
              <th>Status</th>
              <th>Firm</th>
            </tr>
          </thead>
          <tbody>
            {medications.map((med) => (
              <tr
                key={med.id}
                className="clickable-row"
                onClick={() => navigate(`/medications/${med.id}`)}
              >
                <td>{med.recall_identifier}</td>
                <td>{med.description}</td>
                <td>{med.recall_reason}</td>
                <td>
                  <span className="status-badge">{med.status}</span>
                </td>
                <td>{med.recalling_firm}</td>
              </tr>
            ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
  );
}