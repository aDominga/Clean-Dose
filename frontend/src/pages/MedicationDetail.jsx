import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const API_URL = "http://localhost:3000/api/medications";

// Template: label + field name for every DB column you care about
const FIELDS = [
  { label: "Recall #", key: "recall_identifier" },
  { label: "Description", key: "description" },
  { label: "Reason for recall", key: "recall_reason" },
  { label: "Status", key: "status" },
  { label: "Classification", key: "classification" },
  { label: "Product type", key: "product_type" },
  { label: "Recalling firm", key: "recalling_firm" },
  { label: "Report date", key: "report_date" },
  { label: "Recall initiation date", key: "recall_initiation_date" },
  { label: "Termination date", key: "termination_date" },
  { label: "Event ID", key: "event_id" },
  { label: "Address", key: "address" },
  { label: "City", key: "city" },
  { label: "State", key: "state" },
  { label: "Country", key: "country" },
];

export default function MedicationDetail() {
  const { id } = useParams();        // reads :id from URL
  const navigate = useNavigate();
  const [medication, setMedication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Recall not found");
        return res.json();
      })
      .then((data) => {
        setMedication(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!medication) return null;

  return (
    <div className="app detail-page">
      <header className="app-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1>Recall Details</h1>
        <p className="detail-subtitle">{medication.recall_identifier}</p>
      </header>

      <div className="detail-card">
        {FIELDS.map(({ label, key }) => (
          <div className="detail-row" key={key}>
            <span className="detail-label">{label}</span>
            <span className="detail-value">
              {medication[key] || "—"}
            </span>
          </div>
        ))}
      </div>

      <Link to="/" className="back-link">Back to all recalls</Link>
    </div>
  );
}