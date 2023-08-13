
import React from "react";


export function messageForm(name,text,time){
    return(
        <div className="d-flex justify-content-around border border-dark">
        <div >{name}</div>
        <div >{text}</div>
        <div >{time}</div>
      </div>
    )
}

export function tagWord(arr){return arr.split(' ').filter(i=>/^#/.exec(i)).toString();}