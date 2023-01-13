import React, {ChangeEvent} from 'react';


type InputType = {
    title: string
    setTitle: (title: string) => void
}

export const Input: React.FC<InputType> = (props) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};
