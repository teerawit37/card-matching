import * as types from "../types"
const initialState={
    myBestScore:0,
    globalBestScore:20,
    loading:false,
    error:null
}

export const scoreReducer = (state=initialState, action)=> {
    switch(action.type){
        case types.SET_SCORE:
            return{
                ...state,
                myBestScore: action.score,
                loading:false,
                error:null
            }
        case types.SET_GLOBAL_SCORE:
                return{
                    ...state,
                    globalBestScore:action.score,
                    loading:false,
                    error:null
                }
        default:
            return state
    }
}