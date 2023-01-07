import React from 'react';


type NewComponentType = {
    students: Array<StudentsType>
}

type StudentsType = {
    id: number
    name: string
    age: number
}

export const NewComponent: React.FC<NewComponentType> = (props) => {

    // const topCars = [
    //     {manufacturer: 'BMW', model: 'm5cs'},
    //     {manufacturer: 'Mercedes', model: 'e63s'},
    //     {manufacturer: 'Audi', model: 'rs6'}
    // ]


    return (
        <ul>
            {props.students.map((el) => {
                return (
                    <li key={el.id}>
                        <span>{el.name}</span>
                        <span> age: {el.age}</span>
                    </li>
                )
            })}
        </ul>

    // return (
    //     <table>
    //         <tbody>
    //         {topCars.map((el, index) => {
    //             return (
    //                 <tr key={index}>
    //                     <th >{el.manufacturer}</th>
    //                     <td >{el.model}</td>
    //                 </tr>
    //             )
    //         })}
    //         </tbody>
    //     </table>
    )
};
