import { configureStore } from "@reduxjs/toolkit";

// import counterReducer from "../features/counter/counterSlice"

// export const store = configureStore({
//     reducer : {
//         counter : counterReducer,
//     },
// });

import todoReducer from "../features/counter/todo/todoSlice";

export const store = configureStore({
    reducer : {
        todos : todoReducer,
    },
})