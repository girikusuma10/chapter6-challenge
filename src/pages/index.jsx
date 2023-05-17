import './../helpers/jquery';
import {Link} from 'react-router-dom';
import * as feather from 'react-feather';
import OwlCarousel from 'react-owl-carousel';
import Footer from '../components/footer';
import Banner from '../components/banner';

const HomePage= ()=> {
return (
  <>
    <Banner showNavigateBtn={true} />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
      integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
      integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />

    <div className="container service">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <img src="images/img_service.png" width="88%" alt="Our Service" />
        </div>
        <div className="ps-4 col-lg-5 service-content">
          <h2 className="mb-3 mt-md-0 mt-4">Best Car Rental for any kind of trip in Bali!</h2>
          <p className="pe-3">Sewa mobil di Bali bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang
            lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
            dll.</p>
          <ul className="list-group mx-auto">
            <div className="list-group-item icon-list border-0 ps-0">
              <div
                className="d-inline-flex icon-service align-items-center justify-content-center text-white rounded-circle mx-1 me-2">
                <feather.Check style={{color: '#0d28a6'}} ></feather.Check>
              </div>
              <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
            </div>
            <div className="list-group-item icon-list border-0 ps-0">
              <div
                className="d-inline-flex icon-service align-items-center justify-content-center text-white rounded-circle m-1 me-2">
                  <feather.Check style={{color: '#0d28a6'}} ></feather.Check>
              </div>
              <span>Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
            </div>
            <div className="list-group-item icon-list border-0 ps-0">
              <div
                className="d-inline-flex icon-service align-items-center justify-content-center text-white rounded-circle m-1 me-2">
                  <feather.Check style={{color: '#0d28a6'}} ></feather.Check>
              </div>
              <span>Sewa Mobil Jangka Panjang Bulanan</span>
            </div>
            <div className="list-group-item icon-list border-0 ps-0">
              <div
                className="d-inline-flex icon-service align-items-center justify-content-center text-white rounded-circle m-1 me-2">
                  <feather.Check style={{color: '#0d28a6'}} ></feather.Check>
              </div>
              <span>Gratis Antar - Jemput Mobil di Bandara</span>
            </div>
            <div className="list-group-item icon-list border-0 ps-0">
              <div
                className="d-inline-flex icon-service align-items-center justify-content-center text-white rounded-circle m-1 me-2">
                  <feather.Check style={{color: '#0d28a6'}} ></feather.Check>
              </div>
              <span>Layanan Airport Transfer / Drop In Out</span>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <div className="container fitur">
      <div className="fitur-content text-center text-md-start">
        <h2 className="mb-lg-1 mb-3">Why Us?</h2>
        <p>Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className="row mt-lg-5 mt-4 justify-content-between">
        <div className="col-lg-3">
          <div className="card ps-2 reason" style={{width: '17rem'}}>
            <div className="card-body">
              <div
                className="d-inline-flex icon-fitur align-items-center justify-content-center text-white rounded-circle mb-3 me-2"
                style={{backgroundColor: '#F9CC00'}}>
                <feather.ThumbsUp/>
              </div>
              <h3 className="card-title">Mobil Lengkap</h3>
              <p className="card-text pe-4 mt-3">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card ps-2 reason" style={{width: '17em'}}>
            <div className="card-body">
              <div
                className="d-inline-flex icon-fitur align-items-center justify-content-center text-white rounded-circle mb-3 me-2"
                style={{backgroundColor: '#FA2C5A'}}>
                <feather.Tag/>
              </div>
              <h3 className="card-title">Mobil Lengkap</h3>
              <p className="card-text pe-4 mt-3">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card ps-2 reason" style={{width: '17em'}}>
            <div className="card-body">
              <div
                className="d-inline-flex icon-fitur align-items-center justify-content-center text-white rounded-circle mb-3 me-2"
                style={{backgroundColor: '#0D28A6'}}>
                <feather.Clock/>
              </div>
              <h3 className="card-title">Mobil Lengkap</h3>
              <p className="card-text pe-4 mt-3">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card ps-2 reason" style={{width: '17em'}}>
            <div className="card-body">
              <div
                className="d-inline-flex icon-fitur align-items-center justify-content-center text-white rounded-circle mb-3 me-2"
                style={{backgroundColor: '#0D28A6'}}>
                <feather.Award/>
              </div>
              <h3 className="card-title">Mobil Lengkap</h3>
              <p className="card-text pe-4 mt-3">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid testimoni">
      <div className="testimoni-content text-center">
        <h2>Testimonial</h2>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <OwlCarousel loop margin={10} className="owl-carousel owl-theme mt-5">
        <div className="item me-lg-3">
          <div className="card">
            <div className="card-body py-5 m-3">
              <div className="row">
                <div className="col-lg-4 d-flex testimoni-thumb justify-content-center align-items-center mb-4 mb-lg-0">
                  <img src="images/testimoni3.png" className="rounded-circle img-fluid shadow-1" alt="woman avatar" />
                </div>
                <div className="col-lg-8 testi-text">
                  <img className="img-fluid" src="images/Rate.png" alt="" />
                  <p className="text-black fw-light mb-3 pe-lg-5">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod”
                  </p>
                  <p className="text-black mb-0 author">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item me-lg-3">
          <div className="card">
            <div className="card-body py-5 m-3">
              <div className="row">
                <div className="col-lg-4 d-flex testimoni-thumb justify-content-center align-items-center mb-4 mb-lg-0">
                  <img src="images/testimoni2.png" className="rounded-circle img-fluid shadow-1" alt="woman avatar" />
                </div>
                <div className="col-lg-8 testi-text">
                  <img className="img-fluid" src="images/Rate.png" alt="" />
                  <p className="text-black fw-light mb-3 pe-lg-5">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod”
                  </p>
                  <p className="text-black mb-0 author">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item me-lg-3">
          <div className="card">
            <div className="card-body py-5 m-3">
              <div className="row">
                <div className="col-lg-4 d-flex testimoni-thumb justify-content-center align-items-center mb-4 mb-lg-0">
                  <img src="images/testimoni3.png" className="rounded-circle img-fluid shadow-1" alt="woman avatar" />
                </div>
                <div className="col-lg-8 testi-text">
                  <img className="img-fluid" src="images/Rate.png" alt="" />
                  <p className="text-black fw-light mb-3 pe-lg-5">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod”
                  </p>
                  <p className="text-black mb-0 author">John Dee 32, Bromo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>

    <div className="container cta  text-white text-center">
      <h1>Sewa Mobil di Bali Sekarang</h1>
      <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt
        ut labore et dolore magna aliqua. </p>
      <Link to="/cars" className="btn mt-5 cta-button text-white">Mulai Sewa Mobil</Link>
    </div>

    <div className="container faq">
      <div className="faq-content row">
        <div className="col-lg-5 text-lg-start text-center">
          <h2>Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="col-lg-7">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item mb-3">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the first item&apos;s accordion body.</strong> It is shown by default, until the
                  collapse plugin adds the appropriate classes that we use to style each element. These classes control
                  the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of
                  this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about
                  any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item border-1 mb-3">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the second item&apos;s accordion body.</strong> It is hidden by default, until the
                  collapse plugin adds the appropriate classes that we use to style each element. These classes control
                  the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of
                  this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about
                  any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item mb-3">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Berapa hari sebelumnya sebaiknya booking sewa mobil?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item&apos;s accordion body.</strong> It is hidden by default, until the
                  collapse plugin adds the appropriate classes that we use to style each element. These classes control
                  the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of
                  this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about
                  any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item mb-3">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Apakah ada biaya antar-jemput?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item&apos;s accordion body.</strong> It is hidden by default, until the
                  collapse plugin adds the appropriate classes that we use to style each element. These classes control
                  the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of
                  this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about
                  any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item mb-3">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Bagaimana jika terjadi kecelakaan?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item&apos;s accordion body.</strong> It is hidden by default, until the
                  collapse plugin adds the appropriate classes that we use to style each element. These classes control
                  the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of
                  this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about
                  any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
);
};

export default HomePage;
