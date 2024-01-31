import React from "react";
import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";



const HomePage = () => {
  return (
    <div>
      <p>This is the Homepage of the City Info Application!</p>
      <p>This Application was developed as a project for the styxa intro I.T. course
        -2023
      </p>
      <img src="styxalogo2.jpg" alt="styxa logo" />
      <p>
        <a href="https://styxa.ro/">Click to follow Styxa contact link 2 learn coding like a pro!</a> 
      </p>
    </div>
  );
};

export default HomePage;
