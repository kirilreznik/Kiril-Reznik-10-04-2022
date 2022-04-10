import React from "react";
import { useSelector } from "react-redux";
const HomePage = () => {
  const currentCountry = useSelector((state) => state.currentCountry);
  return <div>HomePage</div>;
};

export default HomePage;
