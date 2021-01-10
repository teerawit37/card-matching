import React from 'react';
import styles from './style.module.scss';

  
type Props = {
    handleClick: (id: number) => void,
    id: number,
    flipped: boolean,
    type: string,
    height: number,
    width: number,
    disabled: boolean,
    solved: boolean,
}

const Card = ({ handleClick, id, flipped, type, height, width, disabled, solved }: Props) => {
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

export default Card