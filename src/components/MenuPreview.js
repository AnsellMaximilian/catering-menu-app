import React from 'react'
import Modal from './Modal';
import Menu from './Menu';

export default function MenuPreview({open, onClose}) {

    return (
        <Modal open={open} onClose={onClose}>
            <Menu/>
        </Modal>
    )
}
