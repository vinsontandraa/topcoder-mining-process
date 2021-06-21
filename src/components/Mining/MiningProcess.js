import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    getResults,
    getCurrentPlan,
    AddMiningEntry,
    AddMiningPlan
} from './miningSlice';
import styles from './Mining.module.css';

export function MiningProcess() {
    const currentPlan = useSelector(getCurrentPlan);
    const results = useSelector(getResults);

    return (
        <div>
            <div className={styles.row}>
                <h1 className={styles.value}>{results.toString()}</h1>
            </div>


        </div>
    );
}
