
import React, { useState } from "react";
import POITable from "./POITable";
import POIForm from "./POIForm";
import { fetchWrapper } from "../services/fetchWrapper";

const POIPage: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const handleEdit = (poi: any) => {
    setEditData(poi);
    setIsFormVisible(true);
  };

  const handleAdd = () => {
    setEditData(null);
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    setEditData(null);
  };

  const handleSubmitForm = async (poiData: any) => {
    if (editData) {
      // Frissítés
      await fetchWrapper.updatePointOfInterest(editData.id);
    } else {
      // Hozzáadás
      await fetchWrapper.addPointOfInterest(poiData);
    }
  };

  return (
    <div>
      <h2>Point of Interest Page</h2>
      <button onClick={handleAdd}>Add POI</button>
      <POITable onEdit={handleEdit} />
      {isFormVisible && (
        <POIForm
          onClose={handleCloseForm}
          onSubmit={handleSubmitForm}
          initialData={editData}
        />
      )}
    </div>
  );
};

export default POIPage;

