const configureStore=require('@reduxjs/toolkit').configureStore;
const cakeReducer=require('../features/cake/cakeSlice');
// const reduxLogger=require('redux-logger');
const iceCreamReducer=require('../features/icecream/iceCreamSlice');
const userReducer=require('../features/user/userSlice');
// const logger=reduxLogger.createLogger();
const store=configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:iceCreamReducer,
        user:userReducer
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});
module.exports=store;