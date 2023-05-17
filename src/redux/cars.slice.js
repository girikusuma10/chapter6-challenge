import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import moment from 'moment';

export const getCars= createAsyncThunk(
  'cars/getCars',
  async ()=> {
    const res= await fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');
    const data= await res.json();

    return data;
  },
);

export const filterCars= createAsyncThunk(
  'cars/filterCars',
  async ({driverType, year, passanger= 0}, {getState})=> {
    const state= getState();

    return state.cars.cars
    .filter((car)=> car.available==(driverType=='withDriver'))
    .filter((car)=> car.year==moment(year).format('YYYY'))
    .filter((car)=> car.capacity >= passanger);
  },
);

const carsSlice= createSlice({
  name: 'cars',
  initialState: {
    filteredCars: [],
    cars: [],
    isLoading: false,
    isFiltered: false,
    isError: false,
  },
  extraReducers: (builder)=> {
    builder.addCase(getCars.pending, (state)=> {
      state.isLoading= true;
      state.isFiltered= false;
      state.isError= false;
      state.filteredCars= [];
    });

    builder.addCase(getCars.fulfilled, (state, action)=> {
      state.isLoading= false;
      state.cars= action.payload;
    });

    builder.addCase(getCars.rejected, (state, action)=> {
      console.log(action.error);
      state.isLoading= false;
      state.isError= true;
    });

    builder.addCase(filterCars.fulfilled, (state, action)=> {
      state.filteredCars= action.payload;
      state.isFiltered= true;
    });

    builder.addCase(filterCars.rejected, (state, action)=> {
      console.log(action.error);
      state.isError= true;
    });
  },
});


export default carsSlice.reducer;
