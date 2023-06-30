const createSlice=require('@reduxjs/toolkit').createSlice;
const cakeActions=require('.././cake/cakeSlice').cakeActions;
const initialState={numOfIceCreams:10};
const iceCreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIceCreams--;
        },
        restocked:(state,action)=>{
            state.numOfIceCreams+=action.payload
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(cakeActions.ordered,state=>{
            state.numOfIceCreams--
        })
    }
    // extraReducers:{
    //     ['cake/ordered']:(state)=>{
    //         state.numOfIceCreams--;
    //     }
    // }
});
module.exports=iceCreamSlice.reducer;
module.exports.iceCreamActions=iceCreamSlice.actions;