import React, { useContext, useState } from 'react'
import MenuContext from '../contexts/Menu'
import Modal from './Modal';
import styles from './MenuDetail.module.css';

export default function MenuDetail({open, onClose}) {

    const {setMenu, menu} = useContext(MenuContext);

    const [startDate, setStartDate] = useState(menu.dates.start);
    const [endDate, setEndDate] = useState(menu.dates.end);
    const [menuThumbnail, setMenuThumbnail] = useState('');
    return (
        <Modal open={open} onClose={onClose}>
            <h2>Menu Detail</h2>
            <div className={styles.form}>
                <div className={styles.form__item}>
                    <label>
                        <span>Start Date: </span>
                        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)}/>
                    </label>
                </div>
                <div className={styles.form__item}>
                    <label>
                        <span>End Date: </span>
                        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)}/>
                    </label>
                </div>
                <div className={styles.form__item}>
                    <label>
                        <span>Menu Thumbnail: </span>
                        <input type="text" value={menuThumbnail} onChange={e => setMenuThumbnail(e.target.value)}/>
                    </label>
                </div>
                <button
                    onClick={() => {
                        const newState = {...menu};
                        newState.dates.start = startDate;
                        newState.dates.end = endDate;
                        newState.menuThumbnail = menuThumbnail;
                        setMenu(newState);
                        onClose();
                    }}
                >SAVE</button>
            </div>
        </Modal>
    )
}
