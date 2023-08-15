
import React from "react";
import '../style.css';


export function messageForm(name,text,time){
  debugger;
    return(
        <div className="form">
        <div >{name}</div>
        <div >{text}</div>
        <div >{time}</div>
      </div>
    )
}

export function tagWord(arr){return arr.split(' ').filter(i=>/^#/.exec(i)).toString();}