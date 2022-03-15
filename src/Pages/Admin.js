import React from "react";
import AddProduct from "../Components/AddProduct";
import ContactList from "../Components/ContactForm/ContactList";
import NavBar from "../Components/NavBar/NavBar";
import Profil from "../Components/ProfilAdmin/Profil";

function Admin() {
    return (
        <div>
            <NavBar />
            <Profil />
        </div>
    );
}

export default Admin;
