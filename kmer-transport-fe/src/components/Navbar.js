import React from "react";

function Navbar() {
    localStorage.setItem("Login", false);
    const login = localStorage.getItem("Login");
    console.log(login);


    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container-fluid ">
                <a class="navbar-brand" href="#">
                    <i class="bi bi-bus-front-fill"></i>
                    KMer
                </a>
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse align-center justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" aria-current="page" href="#contacts">Contacts</a>
                        </li>
                       {
                        login=='true' &&
                        <li class="nav-item ">
                        <a class="nav-link active" aria-current="page" href="#">Login</a>
                        </li>
                       } 
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-person-circle"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><a class="dropdown-item" href="#">My tickets</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#"><i class="bi bi-box-arrow-right"></i>&nbsp; Logout</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;