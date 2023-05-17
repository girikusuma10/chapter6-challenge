import * as feather from 'react-feather';

const Footer= ()=> {
  return (
    <footer className="container py-4">
      <div className="footer-content row">
        <div className="col-lg-3 mb-lg-0 mb-2">
          <p className="pe-lg-0 pe-5">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="footer-menu mb-lg-0 mb-2 col-lg-2">
            <a href="#our-services">Our Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#faq">FAQ</a>
        </div>
        <div className="col-lg-4 mb-lg-0 mb-4 social">
          <p>Connect with us</p>
          <div className="social-item d-inline-flex icon-fitur align-items-center justify-content-center rounded-circle me-3 ">
            <a href="">
              <feather.Facebook/>
            </a>
          </div>
          <div className="social-item d-inline-flex icon-fitur align-items-center justify-content-center rounded-circle me-3 ">
            <a href="">
              <feather.Instagram/>
            </a>
          </div>
          <div className="social-item d-inline-flex icon-fitur align-items-center justify-content-center rounded-circle me-3 ">
            <a href="">
              <feather.Twitter/>
            </a>
          </div>
          <div className="social-item d-inline-flex icon-fitur align-items-center justify-content-center rounded-circle me-3 ">
            <a href="">
              <feather.Mail/>
            </a>
          </div>
          <div className="social-item d-inline-flex icon-fitur align-items-center justify-content-center rounded-circle me-3 ">
            <a href="">
              <feather.Twitch/>
            </a>
          </div>

        </div>
        <div className="col-lg-3 mb-lg-0 mb-5">
          <p>Copyright Binar 2022</p>
          <img src="images/logo.png" alt=""/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
