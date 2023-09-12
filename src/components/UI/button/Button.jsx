import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';



const Button = ({children, appearance = 'btn', ...props}) => {
    return (
        <button  
        className={cn(styles.myBtn, {
            [styles.myBtn]: appearance === 'btn',
            [styles.FilterBtn]: appearance === 'FilterBtn',
            [styles.FormBtn]: appearance === 'FormBtn',
            [styles.ExitBtn]: appearance === 'ExitBtn'
           })}
         
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;