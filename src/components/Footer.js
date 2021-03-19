import React from "react"



const Footer = ({
    copyright,
    year,
}) => (
    <nav className="navbar navbar-dark bg-dark footer">
        <p className="navbar-brand" href="#">{copyright} {year}</p>
    </nav>
)

export default Footer;
