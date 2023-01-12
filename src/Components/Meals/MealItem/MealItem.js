import React from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem=props=>{
    const price=`$${props.price.toFixed()}`;
    return(
        <li className={classes.meal}>
            <div >
                <h3> {props.name}</h3>
                <div className={classes.description}> {props.description}</div>
                <div className={classes.price}> {price}</div>
            </div>
            <div>
                <MealItemForm></MealItemForm>
            </div>
        </li>
    );
};
export default MealItem;