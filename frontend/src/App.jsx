import { useState } from "react";
import Navbar from "./Components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddUser from "./Pages/User/AddUser";
import EditUser from "./Pages/User/EditUser";
import ViewUser from "./Pages/User/ViewUser";
import AddExercise from "./Pages/Exercise/AddExercise";
import ViewExercises from "./Pages/Exercise/ViewExercises";
import { ViewExercise } from "./Pages/Exercise/ViewExercise";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="/home" element={<Home />}></Route>
          {/* <Route path="/addUser" element={<AddUser />}></Route> */}
          <Route path="/editUser/:id" element={<EditUser />}></Route>
          <Route path="/viewUser/:id" element={<ViewUser />}></Route>
          <Route path="/:id/addExercise" element={<AddExercise />}></Route>
          <Route path="/:id/exercises" element={<ViewExercises />}></Route>
          <Route
            path="/:user_id/exercise/:exercise_id"
            element={<ViewExercise />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
