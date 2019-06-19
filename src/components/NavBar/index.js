import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">{props.children}</span>
            <div className="score">
                Score: {props.score} | High Score: {props.highScore}
            </div>
        </nav>
    );
}

export default Navbar;