import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {NewComponent} from './components/NewComponent';
import {FullInput} from './components/FullInput';
import {Input} from './components/Input';
import {BottonForInput} from './components/BottonForInput';


export type FilterType = "All" | "RUBLS" | "Dollars"


function App() {

    let [message, setMessage] = useState ([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    let [title, setTitle] = useState('')




const addMessage = (title: string) => {
    let newMessage = {message: title}
    setMessage([newMessage, ...message])
    setTitle("")
}

const callBackButtonHandler = () => {
    addMessage(title)
    setTitle("")
}

    return (

        <div className={"App"}>
            {/*<FullInput addMessage={addMessage}/>*/}

            <Input title={title} setTitle={setTitle}/>
            <BottonForInput name={"+"} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>

    );
}

export default App;

