
import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"
import axios from "axios";

const apiUrl='http://localhost:4040/blogcards'

export const fetchDetail = createAsyncThunk('detailcards/fetchDetail', async () => {
    const response = await axios.get(apiUrl)
    return response.data
})

export const DetailSlice = createSlice({
    name: 'detailcards',
    initialState: {
        items: [],
        status: "nothing"
    },
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetail.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchDetail.fulfilled, (state, action) => {
                state.status = 'succeed'
                state.items = action.payload
            })
            .addCase(fetchDetail.rejected, (state, action) => {
                state.status = 'failed'
            })
            

    }
})
export default DetailSlice.reducer