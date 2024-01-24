import { createSlice } from "@reduxjs/toolkit";

interface VoteState {
    vote:boolean;
}
 const voteState: VoteState = {
    vote: false,
};
 const voteSlice = createSlice({
    name: "vote",
    initialState: voteState,
    reducers: {
        voteFunction: (state) =>
        {
            state.vote =!state.vote;
        }
    },
}
)
export const { voteFunction} = voteSlice.actions
export default voteSlice.reducer;