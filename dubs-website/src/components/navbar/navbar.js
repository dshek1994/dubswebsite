import React from 'react';
import { Link } from "react-router-dom";
const navbar = () =>{
    return (
        <div>
            <li>
                <Link to="/">Store</Link>
            </li>
            <li>
                <Link to="/">Servers</Link>
            </li>
            <li>
                <Link to="/">Rules</Link>
            </li>
            <li>
                <Link to="/">Discord</Link>
            </li>
            <li>
                <Link to="/">Steam</Link>
            </li>
        </div>
    )
}

export default navbar;