import React from 'react';
import Logo from '../../static/img/logojourney.png';


const NavWebPage = () => {

    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger" style={{ color: "white" }}>
                <a href="/Home" class="navbar-brand">
                    <img src={Logo} height="45" alt="MrJourney" />
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ml-auto">
                        <li className="nav-item mr-2">
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li>
                        <li className="nav-item">
                            <button type="button" class="btn btn-warning mb-2 mr-2 text-white">Create Room
                                <i className="fas fa-plus pl-1" style={{ color: "white" }}></i>
                            </button>
                        </li>

                        <li class="nav-item dropdown ">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-user-circle fa-lg text-white"></i> <span className="text-white">Guest</span> </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                                <a class="dropdown-item " href="#">My account</a>
                                <a class="dropdown-item " href="#">Joined Room</a>
                                <a class="dropdown-item " href="#">My Owner Room</a>
                                <a class="dropdown-item " href="#">Log out</a>
                            </div>
                        </li>


                    </ul>
                </div>
            </nav>
        </div>






    )
}
export default NavWebPage;
