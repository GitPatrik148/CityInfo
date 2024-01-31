import React, { useState, useEffect } from "react";

interface POIFormProps {
  onClose: () => void;
  onSubmit: (poiData: any) => void;
  initialData?: any;
}

const POIForm: React.FC<POIFormProps> = ({ onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    // Ha van kezdeti adat, állítsuk be a formát
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
        />
        <br />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
        />
        <br />
        <label>Google Maps URL:</label>
        <input
          type="text"
          name="googleMapsUrl"
          value={formData.googleMapsUrl || ""}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};
export {};

export default POIForm;
