import React from 'react'
import styles from './Feed.module.css';
import { SparklesIcon } from '@heroicons/react/outline';

export default function Feed() {
    return (
        <div className={styles.feedContainer}>
        <div className={styles.feedHeader}>
        <h2 className={styles.home}>Home</h2>
        <div>
        <SparklesIcon className={styles.sparklesIcon} />
        </div>
        </div>
        </div>
    )
}