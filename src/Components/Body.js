import React, {useState} from "react";
import Books from "./Books";
import MyBooks from "./MyBooks";
import FavoriteBooks from "./FavoriteBooks";
import SearchBooks from "./SearchBooks";
import Profile from "./Profile";
import AllBooks from"./AllBooks"
import AllAuthors from "./AllAuthors"
import AllUsers from "./AllUsers"
import Cookies from "universal-cookie";


export default function Body(props) {
    const cookie = new Cookies();
    const role=cookie.get("role")
    return (
        <>
            {role==="ROLE_USER" && props.bodystate === "home" && <Books/>}
            {role==="ROLE_USER" && props.bodystate === "mybooks" && <MyBooks/>}
            {role==="ROLE_USER" && props.bodystate === "favoritebooks" && <FavoriteBooks/>}
            {role==="ROLE_USER" && props.bodystate === "searchbooks" && <SearchBooks searchFunction={props}/>}
            {role==="ROLE_USER" && props.bodystate === "profile" && <Profile/>}

            {role==="ROLE_ADMIN" && props.bodystate === "ALL_BOOKS" && <AllBooks/>}
            {role==="ROLE_ADMIN" && props.bodystate === "ALL_AUTHORS" && <AllAuthors/>}
            {role==="ROLE_ADMIN" && props.bodystate === "ALL_USERS" && <AllUsers/>}
        </>
    );
}