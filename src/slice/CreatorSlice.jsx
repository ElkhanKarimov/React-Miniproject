
import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"
import axios from "axios";

const apiUrl='http://localhost:4040/creators'

export const fetchCreator = createAsyncThunk('creators/fetchCreator', async () => {
    const response = await axios.get(apiUrl)
    return response.data
})

export const CreatorSlice = createSlice({
    name: 'creators',
    initialState: {
        items: [],
        status: "nothing"
    },
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCreator.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCreator.fulfilled, (state, action) => {
                state.status = 'succeed'
                state.items = action.payload
            })
            .addCase(fetchCreator.rejected, (state, action) => {
                state.status = 'failed'
            })
            

    }
})
export default CreatorSlice.reducer