import React, {useState} from 'react';
import './App.css';
import {NewComponent} from './components/NewComponent';


export type FilterType = "All" | "RUBLS" | "Dollars"


function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let currentMany = money
    let [filter, setFilter] = useState<FilterType>('All')


    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }


    if (filter === 'RUBLS') {
        currentMany = money.filter(el => el.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        currentMany = money.filter(el => el.banknots === 'Dollars')
    }


    return (
        <div>
            <NewComponent currentMany={currentMany} callBack={onClickFilterHandler}/>
        </div>
        // <div>
        //     <ul>
        //         {currentMany.map((el, index) => {
        //             return (
        //                 <li key={index}>
        //                     <span>{el.banknots}</span>
        //                     <span>{el.value}</span>
        //                     <span>{el.number}</span>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //     <div style={{marginLeft: '35px'}}>
        //         <button onClick={() => onClickFilterHandler('All')}>All</button>
        //         <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
        //         <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
        //     </div>
        //
        // </div>

    );
}

export default App;

