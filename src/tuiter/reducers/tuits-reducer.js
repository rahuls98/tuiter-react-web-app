import { createSlice } from "@reduxjs/toolkit";
import {
    createTuitThunk,
    findTuitsThunk,
    updateTuitThunk,
    deleteTuitThunk,
} from "../services/tuits-thunks";
const initialState = {
    tuits: [],
    loading: false,
};

const currentUser = {
    userName: "NASA",
    handle: "@nasa",
    image: "nasa.png",
};

const templateTuit = {
    ...currentUser,
    topic: "Space",
    time: "2h",
    liked: false,
    replies: 0,
    retuits: 0,
    likes: 0,
};

const tuitsSlice = createSlice({
    name: "tuits",
    initialState,
    initialState,
    extraReducers: {
        [createTuitThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.tuits.push(payload);
        },
        [findTuitsThunk.pending]: (state) => {
            state.loading = true;
            state.tuits = [];
        },
        [findTuitsThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.tuits = payload;
        },
        [findTuitsThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [updateTuitThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
            state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload };
        },
        [deleteTuitThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.tuits = state.tuits.filter((t) => t._id !== payload);
        },
    },
    reducers: {
        createTuit(state, action) {
            state.tuits.unshift({
                ...action.payload,
                ...templateTuit,
                _id: new Date().getTime(),
            });
        },
        deleteTuit(state, action) {
            const index = state.tuits.findIndex(
                (tuit) => tuit._id === action.payload
            );
            state.tuits.splice(index, 1);
        },
    },
});

export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
