import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key="General" pageSize={15} category={`General`} country={'in'} />} />
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} key="Technology" pageSize={15} category={`Technology`} country={'in'} />} />
            <Route exact path="/Science" element={<News setProgress={this.setProgress} key="Science" pageSize={15} category={`Science`} country={'in'} />} />
            <Route exact path="/Health" element={<News setProgress={this.setProgress} key="Health" pageSize={15} category={`Health`} country={'in'} />} />
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} key="Sports" pageSize={15} category={`Sports`} country={'in'} />} />
            <Route exact path="/Business" element={<News setProgress={this.setProgress} key="Business" pageSize={15} category={`Business`} country={'in'} />} />
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} key="Entertainment" pageSize={15} category={`Entertainment`} country={'in'} />} />
            <Route exact path="/General" element={<News setProgress={this.setProgress} key="General" pageSize={15} category={`General`} country={'in'} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
