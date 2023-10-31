
import { createSlice } from '@reduxjs/toolkit';

// "slice"는 Redux 스토어에서 특정 부분의 상태(state)와 그 상태를 관리하기 위한 리듀서와 액션 생성자를 함께 그룹화하는 방법
const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        setItems: (state, action) => {
            return action.payload;
        },
    },
});

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
