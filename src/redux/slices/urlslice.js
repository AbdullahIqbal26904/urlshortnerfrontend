import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    openSlider: false,
    sliderData: "",
    openleftbar: true,
};

const urlslice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        setopenSlider: (state, action) => {
            state.openSlider = action.payload;
            console.log("openSlider value: ", state.openSlider);
        },
        setshowloader: (state, action) => {
            state.loading = action.payload;
            console.log("loading value: ", state.loading);
        },
        setsliderData: (state, action) => {
            state.sliderData = action.payload;
            console.log("sliderData value: ", state.sliderData);
        },
        setopenleftbar: (state, action) => {
            state.openleftbar = action.payload;
            console.log("openSlider value: ", state.openleftbar);
        },
    }
})

export const { setopenSlider, setshowloader, setsliderData, setopenleftbar } = urlslice.actions;
export default urlslice.reducer;