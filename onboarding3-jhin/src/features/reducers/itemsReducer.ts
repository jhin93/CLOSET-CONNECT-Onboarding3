import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../../store/configureStore";


const itemsSlice = createSlice({
    name: 'items',
    initialState: { items: [] },
    reducers: {
        setItems: (state, action) => {
            console.log("itemReducer.ts action : ", action)
            return { ...state, items: action.payload }; // items 속성을 업데이트
        },
    }
});

export const selectItemsList = (state: RootState) => state.items.items

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
