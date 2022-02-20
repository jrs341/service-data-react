//import logo from './logo.svg';
//import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { CustomerInfo, VesselInfoForm } from './pages/index.js';

export default function App() {
  return (
    <Router>
      <Routes>
          <Route exact path = "/" element={<VesselInfoForm/>}>
          </Route>
          <Route exact path="/vesselInfo" element={<VesselInfoForm/>}>
          </Route>
        </Routes>
    </Router>
  );
}