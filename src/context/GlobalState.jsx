import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";
//inital state

const initalState={
    transaction: []
}

//create context

export const GlobalContext=createContext(initalState);

//Provider component

export  const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initalState);

    //Action 
    function deleteTransaction(transaction){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:transaction
        })
    }

    function addTransaction(id){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:id
        })
    }

    return (<GlobalContext.Provider value={{
        transaction:state.transaction,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)

}
