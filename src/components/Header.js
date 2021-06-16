import React from 'react'

import styles from './Header.module.css';

export default function Header({openMenuDetail, openMenuPreview, setIsCreateMode, print}) {
    return (
        <header>
            <div className={styles.tools}>
                <button onClick={() => setIsCreateMode(true)}>CREATE MODE</button>
                <button onClick={() => setIsCreateMode(false)}>VIEW MODE</button>
                <button onClick={openMenuDetail}>EDIT MENU DETAILS</button>
                <button onClick={openMenuPreview}>PREVIEW MENU</button>
                <button onClick={print}>PRINT</button>
            </div>
            <h1>CATERING MENU</h1>
        </header>
    )
}
