import React from 'react';
import PropTypes from 'prop-types';
import Button from '~/components/button'
import styles from './style.module.scss';

export default function GameControl({ click, bestScore, globalScore, handleClickReset, isWin }) {
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


GameControl.propTypes = {
    click: PropTypes.number.isRequired,
    bestScore: PropTypes.number.isRequired,
    globalScore: PropTypes.number.isRequired,
    handleClickReset: PropTypes.func.isRequired,
    isWin: PropTypes.bool.isRequired
}
