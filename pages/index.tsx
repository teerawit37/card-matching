import React, { useState, useEffect } from 'react'

import Header from '~/components/header'
import { connect } from 'react-redux'
import { setNewScore, setNewGlobalScore } from "~/store/actions/scoreAction";
import Board from '~/components/board'
import GameControl from '~/components/gamecontrol'
import initializeDeck from '~/components/deck'

import styles from './style.module.scss'

function App({ dispatch, bestScore, globalScore }) {
  const [cards, setCards] = useState<any>([])
  const [flipped, setFlipped] = useState<any>([])
  const [dimension, setDimension] = useState<number>(400)
  const [solved, setSolved] = useState<any>([])
  const [disabled, setDisabled] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
  }, [])

  useEffect(() => {
    if (solved.length === 12) {
       isWin()
    }
  }, [solved])

  useEffect(() => {
    const resizeListener: any = window.addEventListener('resize', resizeBoard)
    return () => window.removeEventListener('resize', resizeListener)
  })

  const handleClick = (id) => {
    setScore(score + 1)
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    } else {
      if (sameCardCliked(id)) return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved(solve => [...solve, flipped[0], id])
        resetCard()
      } else {
        setTimeout(resetCard, 2000)
      }
    }

  }


  const resetCard = () => {
    setFlipped([])
    setDisabled(false)
  }

  const isWin = () => {
    if (score < bestScore || bestScore === 0) {
      dispatch(setNewScore(score))
    }
    if (score < globalScore) {
      dispatch(setNewGlobalScore(score))
    }
  }


  const handleClickReset = () => {
    setFlipped([])
    setSolved([])
    setCards(initializeDeck())
    setScore(0)
  }
  const isMatch: any = (id) => {
    const clickedCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }
  const sameCardCliked: any = (id) => {
    flipped.includes(id)
  }

  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ))
  }

  return (
    <div className={styles.HomePage}>
      <Header>Card Matching challenge</Header>
      <div className={styles.container}>
        <GameControl
          click={score}
          bestScore={bestScore}
          globalScore={globalScore}
          handleClickReset={handleClickReset}
          isWin={solved.length === 12}
        />
        <Board
          dimension={dimension}
          cards={cards}
          flipped={flipped}
          handleClick={handleClick}
          disabled={disabled}
          solved={solved}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state, dispatch) => ({
  bestScore: state.score.myBestScore,
  globalScore: state.score.globalBestScore,
  dispatch
});
export default connect(mapStateToProps)(App);
