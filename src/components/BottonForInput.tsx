import React from 'react';

type BottonForInputType = {
    name: string
    callBack: () => void
}

export const BottonForInput: React.FC<BottonForInputType> = (props) => {
    const OnClickButtonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={OnClickButtonHandler}>{props.name}</button>
    );
};

