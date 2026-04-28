import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../../api/api';


export const fetchtodos = createAsyncThunk("todos/fetchtodos", async() =>{
    const response = await api.get('/todos/');
    return response.data;
})

export const createtodos = createAsyncThunk("todos/createtodos", async(title) =>{
    const response = await api.post('/todos/',{
        title,
        completed : false,
    });
    return response.data;
})

export const updatetodos = createAsyncThunk("todos/updatetodos", async({id,title,completed}) =>{
    const response = await api.put(`/todos/${id}/`, {
        title,
        completed,
    });
    return response.data;
})

export const deletetodos = createAsyncThunk("todos/deletetodos", async(id) =>{
    await api.delete(`/todos/${id}/`);
    return id;
})

const todoslicer = createSlice({
    name : "todos",
    initialState : {
        item : [],
        loading : false,
        error : null,
    },
    reducers : {},
    extraReducers : (builder) =>{
        builder

        .addCase(fetchtodos.pending, (state) =>{
            state.loading = true;
        })

        .addCase(fetchtodos.fulfilled, (state,action) =>{
            state.loading = false;
            state.item = action.payload;
        })

        .addCase(fetchtodos.rejected ,(state,action) =>{
            state.error = action.error;
        })

        .addCase(createtodos.fulfilled ,(state,action) => {
            state.item.unshift(action.payload);
        })  

        .addCase(updatetodos.fulfilled ,(state,action) => {
            const findindex = state.item.findIndex(
                (todo) => todo.id === action.id
            );
            if(findindex !== -1){
                state.item[findindex] = action.payload;
            }
        })

        .addCase(deletetodos.fulfilled , (state,action) =>{
            state.item = state.item.filter((todo) => todo.id !== action.payload);
        })
    }
})

export default todoslicer.reducer;