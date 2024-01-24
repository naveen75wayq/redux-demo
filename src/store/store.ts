import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../state/counterSlice'
import voteReducer from '../state/voteSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        vote: voteReducer,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;