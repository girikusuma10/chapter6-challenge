/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom';

const Banner= ({showNavigateBtn= false})=> {
  return (
    <div className="container-fluid main">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid container  ">
        <Link to="/" className="navbar-brand"><img src="images/logo.png" alt=""/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
          <span className="border" data-feather="menu"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
          <ul className="navbar-nav ms-3 d-lg-flex justify-content-lg-end gap-3">
            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#our-services">Our Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#why-us">Why Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#testimonial">Testimonial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3 text-dark" href="#faq">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-success  border-0" style={{backgroundColor: '#5CB85F'}}>Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="jumbotron container">
      <div className="row main-content">
        <div className="col-lg-6 content">
          <h1 className="mb-3">Sewa & Rental Mobil Terbaik di Kawasan Denpasar</h1>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          {
            showNavigateBtn&&
            <Link to="/cars">
              <button className="btn text-white">Mulai Sewa Mobil</button>
            </Link>
          }
        </div>
        <div className="main-img col-lg-6">
          <img src="images/bg.png" alt="" />
          <img src="images/car.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;
