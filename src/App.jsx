import '@fortawesome/fontawesome-free/css/all.min.css';

import { useState } from "react";
import './index.css'

import { Route, Routes } from 'react-router-dom'

import Layout from "./Layout";
import Leads from "./assets/pages/Leads";
import Buying from "./assets/pages/Buying";
import Team from "./assets/pages/Team";
import Profile from "./assets/pages/Profile";
import Home from './assets/pages/Home';



export default function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
        <Route path="/Leads" element={<Leads />}/>
        <Route path="/Buying" element={<Buying />}/>
        <Route path="/Team" element={<Team />}/>
        <Route path="/Profile" element={<Profile />}/>
      </Route>
    </Routes>
  );
}


