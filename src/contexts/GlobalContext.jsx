import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
    screenWidth: window.innerWidth,
    showMore: { teaching: false, awards: false},
}

function reducer (state, action) {
    switch (action.type) {
        case "setScreenWidth": {
            return {
                ...state, 
                screenWidth: window.innerWidth,
            }
        }
        case "toggleShowTeachingInfo": {
            return {
                ...state, 
                showMore: {
                    ...state.showMore, 
                    teaching: !state.showMore.teaching,
                } 
            }
        }
        case "toggleShowAwardsInfo": {
            return {
                ...state, 
                showMore: {
                    ...state.showMore,
                    awards: !state.showMore.awards,
                }
            }
        }
    }
}

function GlobalContextProvider ({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;
