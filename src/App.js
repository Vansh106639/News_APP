import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="General" pageSize={15} category={`General`} country={'in'} />} />
            <Route exact path="/Technology" element={<News key="Technology" pageSize={15} category={`Technology`} country={'in'} />} />
            <Route exact path="/Science" element={<News key="Science" pageSize={15} category={`Science`} country={'in'} />} />
            <Route exact path="/Health" element={<News key="Health" pageSize={15} category={`Health`} country={'in'} />} />
            <Route exact path="/Sports" element={<News key="Sports" pageSize={15} category={`Sports`} country={'in'} />} />
            <Route exact path="/Business" element={<News key="Business" pageSize={15} category={`Business`} country={'in'} />} />
            <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={15} category={`Entertainment`} country={'in'} />} />
            <Route exact path="/General" element={<News key="General" pageSize={15} category={`General`} country={'in'} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
