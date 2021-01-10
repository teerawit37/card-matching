import {combineReducers} from 'redux'
import { scoreReducer } from './scoreReducers'
export default combineReducers({
    score: scoreReducer
})