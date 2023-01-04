import React from "react";

const Cta = ({label, style, link}) => {

    return (
        <a  href={link}>
            <button style={style}>{label}</button>
        </a>
    )
}

export default Cta;