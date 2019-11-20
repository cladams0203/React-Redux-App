import React from 'react'
import { ShowCard } from './ShowCard';

export function ShowList(props) {

    return (
        <div className='card-container'>
            {props.data && props.data.map((item, index) => {
                return (
                    <ShowCard data={item} key={index} />
                )
            })}
        </div>
    )
}