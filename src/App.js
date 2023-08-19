import Header from "./components/Header.js"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Contact from "./components/Contact.jsx"
import axios from "axios" ;
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/contact.css"
import Project from "./components/Project.jsx"

axios.defaults.withCredentials = true

function App() {
  return (
    <Router>
   <ToastContainer />
   <Routes>
      <Route exact path="/" element={<Header/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/projects" element={<Project/>}    />
   </Routes>
   </Router>
  );
}

export default App;
