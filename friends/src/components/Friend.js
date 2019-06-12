import React from 'react'

const Friend = (props) => {
    const {name, age, email} = props.info
    return (
        <div>
            <h3>{name} is {age} years old</h3>
            <p>To contact them please email: {email}</p> 
        </div>
    )
}

export default Friend;