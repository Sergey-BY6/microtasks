import React from 'react';
import './App.css';
import {Button} from './components/Button';


function App() {

    const Buttton1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Buttton2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Buttton3Foo = () => {
        console.log("Im stupid Buttton")
    }

    return (
        <div className="App">
            <Button name={"MyYouTubeChannel-1"} callBack={()=> Buttton1Foo("Im Vasia", 21)}/>
            <Button name={"MyYouTubeChannel-2"} callBack={()=> Buttton2Foo("Im Ivan")}/>
            <Button name={"Im stupid Buttton"} callBack={Buttton3Foo}/>

        </div>
    );
}

export default App;

