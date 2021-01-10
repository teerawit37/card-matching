import React from 'react';

import styles from './style.module.scss';

type Props = {
    text: string, 
    onClick: () => void, 
}
const Button = ({ text, onClick }: Props) => {
    return (
        <div className={styles.pixel} onClick={() => onClick()}><p>{text}</p></div>
    )
}

export default Button
