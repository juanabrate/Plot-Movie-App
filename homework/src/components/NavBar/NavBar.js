import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../kisspng-imdb-film-director-computer-icons-television-u-5ac6f594137fd3.2912686215229884360799.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img id="logoHenry" src={Logo} width="60" height="60" className="d-inline-block align-top" alt="" />
                
            </div>
            <h2 style={{marginLeft: '-61%', marginBottom: 23, fontFamily: "Oxygen", fontWeight: "lighter", color: "#808080", fontSize: 20}}>Remember what you want to see</h2>
            <nav style={{marginRight: -20}}>
                <ul className="list">
                    <li className="list-item">
                        <NavLink style={{margin: 5,fontWeight: "bold",  textDecoration: "none", fontFamily: "Oxygen", marginTop: 40, paddingLeft: 0, paddingRight: 0}} exact to="/" >Home</NavLink>
                    </li>
                    <li className="list-itemb">
                        <NavLink style={{margin: 5, fontWeight: "bold", textDecoration: "none", fontFamily: "Oxygen", color: "white", marginBottom: 10}} to="/favs" >Favourites</NavLink>
                    </li>        
                </ul>
            </nav>
        </header>
    )
}