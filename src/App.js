import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
function App() {
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="General" pageSize={15} category={`General`} country={'in'} />} />
          <Route exact path="/Business" element={<News setProgress={setProgress} key="Business" pageSize={15} category={`Business`} country={'in'} />} />
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} key="Entertainment" pageSize={15} category={`Entertainment`} country={'in'} />} />
          <Route exact path="/Health" element={<News setProgress={setProgress} key="Health" pageSize={15} category={`Health`} country={'in'} />} />
          <Route exact path="/Science" element={<News setProgress={setProgress} key="Science" pageSize={15} category={`Science`} country={'in'} />} />
          <Route exact path="/Sports" element={<News setProgress={setProgress} key="Sports" pageSize={15} category={`Sports`} country={'in'} />} />
          <Route exact path="/Technology" element={<News setProgress={setProgress} key="Technology" pageSize={15} category={`Technology`} country={'in'} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;