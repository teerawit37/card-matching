import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.scss';

export default function Button({ text, onClick }) {
    return (
        <div className={styles.pixel} onClick={(e) => onClick(e)}><p>{text}</p></div>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}