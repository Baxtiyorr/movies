import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODU3MmIwZWU3OWE3ZWE1ZDdjNTYzZTVhNjhkMzljZiIsInN1YiI6IjY1NGI5YzY3NjdiNjEzMDEwMmUxYjFjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MI-1wzheKLHaaSIDKGu2LGyu7e8dtG31x9LdIwCuAfk'


export const fetchData = createAsyncThunk('fetchData', async (url)=>{


    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}` 
    }
  };

    try {
         const response = await fetch(url, options);
    return response.json()
    } catch (error) {
        console.error(error)
    }
   
})



const getDataSlice = createSlice({
    name: 'data',
    initialState:{
        loading: false,
        data: [],
        error: false
    },


    extraReducer: (builder) =>{
       builder
       .addCase(fetchData.pending, (state)=>{
            state.loading = true
    })
        .addCase(fetchData.fulfilled, (state, action)=>{
            state.loading = true;
            state.data = action.payload;
            state.error = false;
    })
        .addCase(fetchData.rejected, (state)=>{
            state.loading = false;
            state.error = true;
    })
    } 
})

export default getDataSlice.reducer