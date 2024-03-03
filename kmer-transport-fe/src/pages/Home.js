import React, {useState} from "react";
import SearchComponent from "../components/SearchComponent";

function Home (){

    const [name, setName]= useState("alain");

    return (
        <>
            <SearchComponent name={name}/>
        </>
    );
}

export default Home;