import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.scss';

export default function Card({ handleClick, id, flipped, type, height, width, disabled, solved }) {
    return (
        <div className={styles.cardcontainer}
            style={{
                width, height
            }}
            onClick={() => disabled ? null : handleClick(id)}
        >
            <div
                style={{
                    height, width
                }}
                className={styles.card}>

                {flipped || solved ? type : '?'}
            </div>
        </div>
    )
}

Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
}