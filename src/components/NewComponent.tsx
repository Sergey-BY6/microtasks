import React from 'react';
import {FilterType} from '../App';

type NewComponentType = {
    currentMany: Array<CurrentMoneyType>
    callBack: (nameButton: FilterType)=> void
}

type CurrentMoneyType = {
    banknots: string
    value: number
    number: string
}

export const NewComponent: React.FC<NewComponentType> = (props) => {
    return (
        <div>
            <ul>
                {props.currentMany.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknots}</span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.callBack('All')}>All</button>
                <button onClick={() => props.callBack('RUBLS')}>RUBLS</button>
                <button onClick={() => props.callBack('Dollars')}>Dollars</button>
            </div>

        </div>
    );
};

