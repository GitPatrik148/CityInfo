import React from "react";
import { useParams } from "react-router-dom";

const CityDetailPage = () => {
  const { cityId } = useParams();

  return <div>City detail page for ID: {cityId}</div>;
};

export default CityDetailPage;
