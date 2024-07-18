import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import StudentsView from "./student/StudentsView";
import Navbar from "./component/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./student/AddStudent";
import EditStudent from "./student/EditStudent";
import StudentProfile from "./student/StudentProfile";

function App() {
  return (
    <main className="container mt-5">
      <h2>Students managment system</h2>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-students" element={<StudentsView />}></Route>
          <Route exact path="/add-students" element={<AddStudent />}></Route>
          <Route
            exact
            path="/edit-students/:id"
            element={<EditStudent />}
          ></Route>
          <Route
            exact
            path="/student-profile/:id"
            element={<StudentProfile />}
          ></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
