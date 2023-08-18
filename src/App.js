import Header from "./components/Header.js"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Contact from "./components/Contact.jsx"
import axios from "axios" ;
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/contact.css"


axios.defaults.withCredentials = true

function App() {
  return (
    <Router>
   <ToastContainer />
   <Routes>
      <Route exact path="/" element={<Header/>} />
      <Route path="/contact" element={<Contact/>} />
   </Routes>
   </Router>
  );
}

export default App;
