const redux=require('redux');
const createStore=redux.createStore;
const combineReducers=redux.combineReducers;
const reduxLogger=require('redux-logger');
const applyMiddleware=redux.applyMiddleware;
const logger=reduxLogger.createLogger();
const CAKE_ORDERED='CAKE_ORDERED'
const CAKE_RESTOCKED='CAKE_RESTOCKED'
const ICECREAM_ORDERED='ICECREAM_ORDERED'
const ICECREAM_RESTOCKED='ICECREAM_RESTOCKED'
function orderCake()
{
    return{
        type:CAKE_ORDERED,
        payload:1
    }
}
function restockCake(qty=1)
{
    return{
        type:CAKE_RESTOCKED,
        payload:qty
    }
}
function orderIceCream(qty=1)
{
    return{
        type:ICECREAM_ORDERED,
        payload:qty
    }
}
function restockIceCream(qty=1)
{
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty
    }
}
// const BUY_CAKE='BUY_CAKE';
// const BUY_ICECREAM='BUY_ICECREAM';
// function buyCake()
// {
//     return{
//         type:BUY_CAKE,
//         info:'First redux action'
//     }
// }
// function buyIceCream()
// {
//     return{
//         type:BUY_ICECREAM
//     }
// }
const initialCakeState={numOfCakes:10};
const initialIceCreamState={numOfIceCreams:20};
const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type)
    {
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes:state.numOfCakes-1
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes:state.numOfCakes+action.payload
            }
        default:
            return state
    }
}
const iceCreamReducer=(state=initialIceCreamState,action)=>{
    switch(action.type)
    {
        case ICECREAM_ORDERED:
            return{
                ...state,
                numOfIceCreams:state.numOfIceCreams-1
            }
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numOfCakes:state.numOfIceCreams+action.payload
            }
        case CAKE_ORDERED:
            return{
                ...state,
                numOfIceCreams:state.numOfIceCreams-1
            }
        default:
            return state
    }
}
const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
});
// const store=createStore(rootReducer,applyMiddleware(logger));
const store=createStore(rootReducer);
console.log('Initial State: ',store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log('Updated State: ',store.getState())
});
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
unsubscribe();