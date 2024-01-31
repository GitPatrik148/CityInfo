import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContextProvider from "./context/UserContext";
import HomePage from "./pages/HomePage";
import CitiesPage from "./pages/CitiesPage";
import Layout from "./components/Layout";

import "./styles/App.scss";
import CityDetailPage from "./pages/CityDetailPage";
import UsersPage from "./pages/UsersPage";
import PointOfInterestpage from "./pages/PointOfInterestpage";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="cities" element={<CitiesPage />} />
            <Route path="cities/:cityId" element={<CityDetailPage />} />

            <Route path="users" element={<UsersPage />} />
            <Route path="*" element={<div>https://styxa.ro/</div>} />

            <Route path="/PointOfInterest" element={<PointOfInterestpage />} />
            <Route path="/poi" element={<PointOfInterestpage />} />
            <Route path="*" element={<div></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
  
}

export default App;
