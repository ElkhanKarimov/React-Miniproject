
import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"
import axios from "axios";

const apiUrl='http://localhost:4040/blogs'

export const fetchBlog = createAsyncThunk('blog/fetchBlog', async () => {
    const response = await axios.get(apiUrl)
    return response.data
})

export const BlogCardSlice = createSlice({
    name: 'blog',
    initialState: {
        items: [],
        status: "nothing"
    },
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlog.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.status = 'succeed'
                state.items = action.payload
            })
            .addCase(fetchBlog.rejected, (state, action) => {
                state.status = 'failed'
            })
            

    }
})
export default BlogCardSlice.reducer