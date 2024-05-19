import {
    configureStore
} from '@reduxjs/toolkit'
import BlogCardSlice from './slice/BlogCardSlice'
import BlogSlice from './slice/BlogSlice'
import CreatorSlice  from './slice/CreatorSlice'
import DetailSlice  from './slice/DetailSlice'


export const Store = configureStore({
    reducer: {
        blogcards: BlogSlice,
        blog: BlogCardSlice,
        creators: CreatorSlice,
        detailcards: DetailSlice
    }
})