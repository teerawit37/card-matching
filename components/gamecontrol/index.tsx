import React from 'react';
import Button from '~/components/button'
import styles from './style.module.scss';

type Props = {
    click: number,
    bestScore: number,
    globalScore: number,
    handleClickReset: () => void,
    isWin: boolean
}

const GameControl = ({ click, bestScore, globalScore, handleClickReset, isWin }: Props) => {
    return (
        <div className={styles.gameControl}>
            <div className={styles.scoreBoard}>
                <div>win: {isWin ? 'yes' : 'no'}</div>
                <div>Click : {click}</div>
                <div>My Best : {bestScore}</div>
                <div>Glocbal Best : {globalScore}</div>
            </div>
            <Button
                text={'new game'}
                onClick={handleClickReset}
            />
        </div>

    )
}
export default GameControl

