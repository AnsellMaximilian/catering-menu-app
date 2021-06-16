import React from 'react'
import styles from './Modal.module.css';

export default function Modal({children, open, onClose}) {
    return (
        <div 
            className={`${styles.background} ${open && styles.open}`}
            onClick={onClose}
        >
            <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>&times;</button>
                <div className={styles.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}
