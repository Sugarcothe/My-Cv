import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar bg-dark navbar-expand-lg">
          <nav className="nav nav-masthead justify-content-center">
              <a className="nav-link active" href="https://github.com/Sugarcothe">Github</a>
              <a className="nav-link" href="https://wakatime.com/@Ifeanyichukwu">Wakatime</a>
              <a className="nav-link" href="https://twitter.com/sweetestshuga">Twitter</a>
              <a className="nav-link" href="https://www.facebook.com/eze.valentine.14811">Contact</a>
              <a className="nav-link" href="https://www.facebook.com/eze.valentine">Bio</a>
            </nav>
      </div>
    )
  }
}

export default Navbar
