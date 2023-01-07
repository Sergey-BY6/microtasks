import React from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {NewComponent} from './NewComponent/NewComponent';

function App() {

    const students = [
    {id: 1, name: "Ann", age: 25},
    {id: 2, name: "Djon", age: 28},
    {id: 3, name: "Maria", age: 30},
    ]

    return (
        <div>
            <Header title={'New Header'}/>
            <Body titleForBody={'New Body'}/>
            <Footer titleForFooter={'New Footer'}/>
            <NewComponent students={students}/>
        </div>

    );
}

export default App;

