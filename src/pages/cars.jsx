import {useSelector, useDispatch} from 'react-redux';
import {filterCars, getCars} from '../redux/cars.slice';
import Banner from '../components/banner';
import Footer from '../components/footer';
import {useEffect, useMemo, useState} from 'react';

const CarsPage= ()=> {
  const carsData= useSelector((state)=> state.cars);
  const dispatch= useDispatch();

  const [driverType, setDriverType]= useState('alone');
  const [year, setYear]= useState(2023);
  const [passanger, setPassanger]= useState(0);

  const memoedCars= useMemo(
    ()=> carsData.filteredCars.length?carsData.filteredCars:carsData.cars,
    [carsData.filteredCars, carsData.cars],
  );

  const formatCurrency= (currency)=> new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(currency);

  const findCars= (e)=> {
    e.preventDefault();
    dispatch(filterCars({
      driverType,
      year,
      passanger,
    }));
  };

  useEffect(()=> {
    dispatch(getCars());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

return (
<>
  <Banner />

  <div className="container search-car">
    <div className="row mx-auto">
      <div className="col">
        <form id="form" onSubmit={(e)=> findCars(e)}>
          <div className="card w-80 cari-mobil">
            <div className="card-body">
              <div className="row align-items-lg-start">
                <div className="col col-tipe-driver">
                  <h6 className="card-title">Tipe Driver</h6>
                  <select defaultValue="withDriver" className="form-select" id="driverType" name="typeDriver" onChange={(e)=> setDriverType(e.target.value)}>
                    <option value="">Pilih Tipe Driver</option>
                    <option value="withDriver">Dengan Sopir</option>
                    <option value="alone">Tanpa Sopir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col col-tanggal">
                  <h6 className="card-title">Tanggal</h6>
                  <div className="input-group">
                    <input type="date" className="form-control" name="date" placeholder="Pilih Tanggal" onChange={(e)=> setYear(e.target.value)} />
                  </div>
                </div>
                <div className="col col-waktu-jemput">
                  <h6 className="card-title">Waktu Jemput/Ambil</h6>
                  <select className="form-select" name="waktu" id="timeInput" defaultValue="">
                    <option>Pilih Waktu</option>
                    <option value="1">08.00 WIB</option>
                    <option value="2">09.00 WIB</option>
                    <option value="3">10.00 WIB</option>
                    <option value="4">11.00 WIB</option>
                    <option value="5">12.00 WIB</option>
                  </select>
                </div>
                <div className="col col-jumlah-penumpang">
                  <h6 className="card-title">Jumlah Penumpang</h6>
                  <div className="input-group">
                    <input type="number" className="form-control" name="passenger" placeholder="Jumlah Penumpang"
                      id="passengerInput" onChange={(e)=> setPassanger(e.target.value)} />
                    <i className="bi bi-people icon-jumlah-penumpang"></i>
                  </div>
                </div>
                <div className="col mt-4 col-btn">
                  <button className="btn btn-success">Cari Mobil</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="row mt-5 mx-1">
      {
      carsData.isLoading?
      <p>Loading</p>:
      memoedCars.map((car, k)=> (
        <div className="col-4 px-3" key={k}>
          <div className="card mb-5">
            <img src={car.image.replace('./', '')} className="card-img-top" style={{height: '300px', objectFit: 'cover'}} alt={`${car.manufacture}/${car.model} image`} />
            <div className="card-body">
              <p className="font-card" style={{fontWeight: '600', fontSize: '15px'}}>{car.manufacture}/{car.model}</p>
              <p className="card-text" style={{fontSize: '16px', fontWeight: '700'}}>{formatCurrency(car.rentPerDay)} / hari</p>
              <p className="font-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
                tempor incididunt ut labore et dolore magna aliqua. </p>
              <ul className="list-unstyled ">
                <li className="font-card"> <img src="images/fi_users.png" alt="" className=" pe-3" />
                  {car.capacity} Orang</li>
                <li className="mt-3 font-card">
                  <img src="images/fi_settings.png" alt="" className=" pe-3" />{car.transmission}
                </li>
                <li className="mt-3 font-card">
                  <img src="images/fi_calendar.png" alt="" className=" pe-3" />Tahun {car.year}
                </li>
                <button className="btn btn-primary border-0 mt-3"
                  style={{backgroundColor: '#5CB85F', width: '100%'}}>Pilih
                  Mobil</button>
              </ul>
            </div>
          </div>
        </div>
      ))
      }

    </div>
  </div>

  <Footer />
</>
);
};

export default CarsPage;
