import React from "react"

export default function Container(props) {
    return (
        <div className={props.bgColor}>
            <div className="container">{props.children}</div>
        </div>
    )
}