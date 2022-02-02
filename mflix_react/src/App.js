import './App.css';
import "./assets/css/Header-Dark.css";
import "./assets/css/Footer-Dark.css";
import "./assets/css/Login-Form-Dark.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/fonts/ionicons.min.css";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./Components/Login";
import Register from "./Components/Register";
import ViewMultimedia from "./Components/ViewMultimedia";
import ViewMultimediaList from "./Components/ViewMultimediaList";
import AddMultimedia from "./Components/AddMultimedia";
import EditMultimedia from "./Components/EditMultimedia";
function App() {
  return (
      <>
        <BrowserRouter>
          <header className="header-dark">
            <nav className="navbar navbar-dark navbar-expand-lg navigation-clean-search">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <div className="container"><a className="navbar-brand" href="#">Mflix</a>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span
                    className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                  <ul className="navbar-nav">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li className="nav-item"><a className="nav-link" href="#">View Multimedia</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li className="nav-item"><a className="nav-link" href="#">Add Multimedia&nbsp;</a></li>
                  </ul>
                  <form className="me-auto" target="_self">
                    <div className="d-flex align-items-center"><label className="form-label d-flex mb-0"
    htmlFor="search-field"/></div>
                  </form>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <span className="navbar-text"><a className="login" href="http://localhost:3001/Login">Log In</a></span><a
                    className="btn btn-light action-button" role="button" href="http://localhost:3001/Register">Sign Up</a>
                </div>
              </div>
            </nav>
          </header>
          <Routes>
            <Route path='/Login' element={<Login/>} />
            <Route path='/Register' element={<Register/>} />
            <Route path='/AddMultimedia' element={<AddMultimedia/>} />
            <Route path='/Multimedia' element={<ViewMultimediaList/>} />
            <Route path='/Multimedia/:multimediaId' element={<ViewMultimedia/>} />
            <Route path='/EditMultimedia/:multimediaId' element={<EditMultimedia/>} />

          </Routes>
          <footer className="footer-dark">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3 item">
                  <h3>Services</h3>
                  <ul>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Web design</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Development</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Hosting</a></li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                  <h3>About</h3>
                  <ul>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Company</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Team</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Careers</a></li>
                  </ul>
                </div>
                <div className="col-md-6 item text">
                  <h3>Company Name</h3>
                  <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                </div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <div className="col item social"><a href="#"><i className="icon ion-social-facebook"/></a><a href="#"><i className="icon ion-social-twitter"/></a><a href="#"><i className="icon ion-social-snapchat"/></a><a href="#"><i className="icon ion-social-instagram"/></a></div>
              </div>
              <p className="copyright">Company Name © 2021</p>
            </div>
          </footer>
          <script src="assets/bootstrap/js/bootstrap.min.js"/>
        </BrowserRouter>
      </>
  );
}

export default App;
