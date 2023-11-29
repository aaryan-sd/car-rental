import React, { useState, useEffect } from "react";
import Layout from "../../core/Layout";
import CarCard from "./CarCard";
import { getAllCars } from "./carAPI";
import "./Vehicles.css";

function Vehicles() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(false);
  const loadCars = () => {
    getAllCars().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCars(data.cars);
      }
    });
  };
  useEffect(() => {
    loadCars();
  }, []);

  return (
    <div className="vehiclespg">
    <Layout
      className={`bg-black flex justify-center gap-6 p-4 flex-wrap lg:justify-start h-full mt-16 ml-10`}
    >
      {cars &&
        cars.length > 0 &&
        cars.map((car, index) => {
          return <CarCard key={index} car={car} single={false} />;
        })}
    </Layout>
    </div>
  );
}

export default Vehicles;
