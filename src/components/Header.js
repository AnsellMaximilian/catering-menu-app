import React from 'react'

import styles from './Header.module.css';

export default function Header({openMenuDetail, setIsCreateMode, print, isCreateMode}) {
    return (
        <header>
            <div className={styles.tools}>
                <button onClick={() => setIsCreateMode(true)} disabled={isCreateMode}>CREATE MODE</button>
                <button onClick={() => setIsCreateMode(false)} disabled={!isCreateMode}>VIEW MODE</button>
                <button onClick={openMenuDetail}>EDIT MENU DETAILS</button>
                <button onClick={print}>PRINT</button>
            </div>
            <h1>CATERING MENU</h1>
        </header>
    )
}
