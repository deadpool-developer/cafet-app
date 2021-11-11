import React, {createContext,useContext,useReducer} from "react";

//Prepare the DataLayer
export const StateContext = createContext();


//Wrap our app and provide the Data Layer
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value= {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//PULL information from the data layer
export const useStateValue = () => useContext(StateContext);