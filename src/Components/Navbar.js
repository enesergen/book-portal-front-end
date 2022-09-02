import React from "react"
import Button from "./Button"
import Searchbar from "./SearchBar"
import "../Css/navbar.css"
import Cookies from "universal-cookie";

export default function Navbar(props) {
    const cookie = new Cookies();
    const role = cookie.get("role")
    return (
        <>
            <nav>
                <div id="navbar">

                    {role === "ROLE_USER" && <Button handleClick={props} name="Anasayfa" id="home"/>}

                    {role === "ROLE_USER" && <Button handleClick={props} name="Kitap Listem" id="mybooks"/>}


                    {role === "ROLE_USER" && <Button handleClick={props} name="Favori Listem" id="favoritebooks"/>}

                    {role === "ROLE_USER" && <Searchbar handleClick={props} name="searchbooks" id="searchbooks"/>}

                    {role === "ROLE_USER" && <Button handleClick={props} name="Profil" id="profile"/>}

                    {role === "ROLE_ADMIN" && <Button handleClick={props} name="ALL_BOOKS" id="ALL_BOOKS"/>}

                    {role === "ROLE_ADMIN" && <Button handleClick={props} name="ALL_AUTHORS" id="ALL_AUTHORS"/>}

                    {role === "ROLE_ADMIN" && <Button handleClick={props} name="ALL_USERS" id="ALL_USERS"/>}


                </div>
            </nav>
        </>
    )
}