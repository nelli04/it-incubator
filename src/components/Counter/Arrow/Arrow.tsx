import React from 'react';
import s from './Arrow.module.css'

export const Arrow = () => {
    return (
        <div className={s.arrow}>
            <div className={s.left}>
                <button className={s.btn}>
                    <svg width="40px"
                         height="60px"
                         viewBox="0 0 50 80">
                        <polyline fill="none"
                                  stroke="#FFFFFF"
                                  stroke-width="1"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
                    </svg>
                </button>
            </div>
            </div>
    );
};

