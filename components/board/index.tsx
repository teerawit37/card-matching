import React, { Component } from 'react'
import Card from '~/components/card'

import styles from './style.module.scss'


interface cards{
    id: number;
    type: string;
  }
  
type Props = {
    dimension: number, 
    cards: cards[], 
    flipped: number[], 
    handleClick: (id: number) => void, 
    disabled: boolean, 
    solved: number[]
}

const Board = ({ dimension, cards, flipped, handleClick, disabled, solved }: Props) => {
    return (
        <div className={styles.board}>
            {
                cards.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        type={card.type}
                        width={ dimension / 5}
                        height={dimension / 5}
                        flipped={flipped.includes(card.id)}
                        handleClick={handleClick}
                        disabled={disabled || solved.includes(card.id)}
                        solved={solved.includes(card.id)}
                    />
                ))
            }
        </div>
    )
}
export default Board;