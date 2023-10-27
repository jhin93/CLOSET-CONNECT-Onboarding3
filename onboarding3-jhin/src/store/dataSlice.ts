import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios"
import itemList from "../types/itemMetadata"
let itemMetadataArr: itemList[] = [];
let itemDataList;

// 데이터를 가져오기 위한 비동기 thunk 정의
export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const localURL = "http://localhost:3000";
    try {
        const rawData = await axios.get(localURL + '/api/items');
        itemDataList = rawData.data.listings
        itemDataList.map((item) => (itemMetadataArr.push(item.metadata)))
        return itemMetadataArr;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

// 데이터 슬라이스 생성
const dataSlice = createSlice({
    name: 'data',
    initialState: { data: null },
    reducers: {
        // 아무 동작을 하지 않는 빈 리듀서를 정의할 수 있습니다.
        emptyReducer: (state, action) => {
            // 여기에는 특별한 동작을 할 필요가 없습니다.
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
});

export default dataSlice.reducer;
