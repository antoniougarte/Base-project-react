import { createSlice } from '@reduxjs/toolkit';

export const shoesSlice = createSlice({
    name: 'shoes',
    initialState: {
      page:0,
      shoes:[],
      isLoading: false,
    },
    reducers: {
        startLoadingShoes: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setShoes: ( state, actions ) => {
          state.isLoading = false;
          state.page = actions.payload.page;
          state.shoes = actions.payload.shoes;
        }
    }
    });


// Action creators are generated for each case reducer function
export const { startLoadingShoes, setShoes } = shoesSlice.actions;