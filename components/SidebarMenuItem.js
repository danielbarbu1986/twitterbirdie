import React from 'react'
import styles from './Sidebar.module.css'

export default function SidebarMenuItem({text, Icon, active}) {
    return (
        <div className={styles.hoverEffect}>
            <Icon style={{height: '32px', width: '32px'}} />
            <span className={`${active && "font-bold"} hidden xl:inline`}>{text}</span>
        </div>
    )
}