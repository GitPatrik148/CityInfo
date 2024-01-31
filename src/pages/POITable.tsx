import React, { useState, useEffect } from "react";
import { fetchWrapper } from "../services/fetchWrapper";

interface POITableProps {
  onEdit: (poi: any) => void;
}

const POITable: React.FC<POITableProps> = ({ onEdit }) => {
  const [pois, setPois] = useState<any[]>([]);

  const getPointsOfInterest = async () => {
    const data = await fetchWrapper.getPointsOfInterest();
    setPois(data);
  };

  useEffect(() => {
    getPointsOfInterest();
  }, []);

  const handleEdit = (poi: any) => {
    onEdit(poi);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Google Maps URL</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pois.map((poi) => (
          <tr key={poi.id}>
            <td>{poi.id}</td>
            <td>{poi.name}</td>
            <td>{poi.description}</td>
            <td>{poi.googleMapsUrl}</td>
            <td>
              <button onClick={() => handleEdit(poi)}>Edit</button>
              {/* Egyéb műveletek, például törlés */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default POITable;
