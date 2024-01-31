import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import CityTable from "./CitiesTable";
import { fetchWrapper } from "../services/fetchWrapper";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
const CitiesPage = () => {
  const [cities, setCities] = useState<any[]>([]);
  const [newCityData, setNewCityData] = useState<any>({
    name: "",
    description: "",
    pointOfInterest: "",
    population: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setNewCityData({
      name: "",
      description: "",
      pointOfInterest: "",
      population: "",
    });
  };
  const getCities = async () => {
    try {
      const data = await fetchWrapper.get("/cities");
      setCities(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
  const addCity = async () => {
    try {
      await fetchWrapper.post("/cities", newCityData);
      setNewCityData({
        name: "",
        description: "",
        pointOfInterest: "",
        population: "",
      });
      getCities();
      handleCloseModal();
    } catch (error) {
      console.error("Error adding city:", error);
    }
  };
  const updateCity = async (cityId: number, updatedCityData: any) => {
    try {
      await fetchWrapper.put("/cities/${cityId}", updatedCityData);
      getCities();
    } catch (error) {
      console.error("Error updating city with ID ${cityId}:", error);
    }
  };
  const deleteCity = async (cityId: number) => {
    try {
      await fetchWrapper.delete("/cities/${cityId}");
      getCities();
    } catch (error) {
      console.error("Error deleting city with ID ${cityId}:", error);
    }
  };
  useEffect(() => {
    getCities();
  }, []);
  return (
    <div>
      <div>
        <h2>Add New City</h2>
        <Button variant="outlined" onClick={handleOpenModal}>
          Add City
        </Button>
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Add New City</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please provide the details for the new city.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="City Name"
              type="text"
              fullWidth
              value={newCityData.name}
              onChange={(e) => setNewCityData({ ...newCityData, name: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              value={newCityData.address}
              onChange={(e) => setNewCityData({ ...newCityData, description: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Point of Interest"
              type="text"
              fullWidth
              value={newCityData.pointOfInterest}
              onChange={(e) => setNewCityData({ ...newCityData, pointOfInterest: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Population"
              type="number"
              fullWidth
              value={newCityData.population}
              onChange={(e) =>
                setNewCityData({ ...newCityData, population: parseInt(e.target.value, 10) || 0 })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Cancel
            </Button>
            <Button onClick={addCity} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      {!cities.length ? (
        <div></div>
      ) : (
        <CityTable
          cities={cities}
          onUpdate={(cityId, updatedCityData) => updateCity(cityId, updatedCityData)}
          onDelete={(cityId) => deleteCity(cityId)}
        />
      )}
    </div>
  );
};
export default CitiesPage;