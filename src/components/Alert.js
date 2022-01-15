import React from 'react'

export default function Alert(props) {
    const capitalize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.lert && <div className={`alert alert-${props.lert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.lert.type)}</strong>: {props.lert.msg}
        </div>
    )
}
