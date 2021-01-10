import * as types from '../types'

export const setNewScore = (score) => ({
    type: types.SET_SCORE,
    score
  })
export const setNewGlobalScore = (score) => ({
    type: types.SET_GLOBAL_SCORE,
    score
})
  

