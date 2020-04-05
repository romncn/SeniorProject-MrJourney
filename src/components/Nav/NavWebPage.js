import React from 'react';
import Logo from '../../static/img/logojourney.png';


const NavWebPage = () => {

    return (
        <div className="navbar navbar-light bg-danger text-white" style={{ color: "white", height: 60 }}>
            <div className="m-0">
                <img src={Logo} height="55px" className=" pr-5 pb-2" />
                    Mr.Journey
            </div>
            <div>
                <button type="button" class="btn btn-warning mb-2" >
                    Login
                </button>
            </div>
        </div>
    )
}
export default NavWebPage;
