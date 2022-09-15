import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Store from "./pages/store";
import Navbar from './components/navbar'
const App = () => {
  return (
    <Container className="mb-4">
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
