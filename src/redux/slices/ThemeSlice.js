import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    background:'#18171B',
    color:"white"
}

const themePicker =createSlice({
    name:'themePicker',
    initialState,
    reducers:{
        setLightTheme:(state,action)=>{
            state.background ='white'
            state.color = 'black'
        },
        setDarkTheme:(state,action)=>{
            state.background = '#18171B'
            state.color = 'white'
        }
    }
})

const {reducer:themeReducer,actions:{setLightTheme,setDarkTheme}} =themePicker

const themeActions={
    setLightTheme,setDarkTheme
}

export {themeActions,themeReducer,themePicker}