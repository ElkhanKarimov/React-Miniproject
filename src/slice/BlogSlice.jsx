
import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"
import axios from "axios";

const apiUrl='http://localhost:4040/blogcards'

export const fetchBlogCards = createAsyncThunk('blogcards/fetchBlogCards', async () => {
    const response = await axios.get(apiUrl)
    return response.data
})

export const BlogSlice = createSlice({
    name: 'blogcards',
    initialState: {
        items: [],
        status: "nothing"
    },
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogCards.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchBlogCards.fulfilled, (state, action) => {
                state.status = 'succeed'
                state.items = action.payload
            })
            .addCase(fetchBlogCards.rejected, (state, action) => {
                state.status = 'failed'
            })
            

    }
})
export default BlogSlice.reducer