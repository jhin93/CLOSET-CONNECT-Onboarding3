import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
    name: 'items',
    initialState: { items: [] },
    reducers: {
        setItems: (state, action) => {
            return { ...state, items: action.payload }; // items 속성을 업데이트
        },
    }
});

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
