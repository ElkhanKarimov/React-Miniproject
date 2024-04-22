import {
    configureStore
} from '@reduxjs/toolkit'
import BlogCardSlice from './slice/BlogCardSlice'
import BlogSlice from './slice/BlogSlice'
import CreatorSlice  from './slice/CreatorSlice'


export const Store = configureStore({
    reducer: {
        blogcards: BlogSlice,
        blog: BlogCardSlice,
        creators: CreatorSlice
    }
})