import React, { Component } from 'react'


export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Cricket TV</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/"><strong>Home</strong></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Entertainment</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">General</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Science</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Sports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Technology</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Health</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/"><strong>About</strong></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
