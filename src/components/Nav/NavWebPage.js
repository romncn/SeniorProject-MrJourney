import React from 'react';
import Logo from '../../static/img/navlogo.png';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import '../../static/css/Nav.css'


// const NavWebPage = () => {
class NavWebPage extends React.Component {

    Alert = () => {
        if (this.state.myacc === 'guest') {
            Swal.fire({
                title: 'อยากสร้างห้องงั้นหรอ?',
                text: 'Login ก่อนสิ!',
                showCancelButton: false,
                confirmButtonColor: '#F37945',
                confirmButtonText: 'Login'
            })
        }else{
            Swal.fire({
                icon:"success",
                title: 'สร้างห้องสำเร็จ',
                text: 'ขอให้คุณสนุกกับการท่องเที่ยวนะ',
                showCancelButton: true,
                confirmButtonColor: '#31CC71',
                confirmButtonText: 'เข้าสู่ห้อง',
                cancelButtonText: 'กลับสู่หน้าหลัก',
            })
        }
    }


    constructor() {
        super();
        this.state = {
            showSearch: false,
            myacc: 'guest'
        }
    }
    OpenSearch() {
        this.setState({
            showSearch: !this.state.showSearch
        })
    }
    AuthLine = async () => {
        if (this.state.myacc === 'guest') {
            await this.setState({ myacc: 'LineAcc' })
        } else {
            await this.setState({ myacc: 'guest' })
        }

    }
    ShowLoginButton = () => {
        if (this.state.myacc === 'guest') {
            return <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                <a className="dropdown-item" onClick={this.AuthLine}>Sign In</a></div>
        } else {
            return <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                <a class="dropdown-item " href="#">My account</a>
                <a class="dropdown-item " href="#">Joined Room</a>
                <a class="dropdown-item " href="#">My Owner Room</a>
                <a className="dropdown-item" onClick={this.AuthLine}>Sign Out</a>
            </div>
        }
    }

    render() {

        return (

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark nav-color" style={{ color: "white" }}>
                    <a href="/Home" class="navbar-brand">
                        <img src={Logo} height="45" alt="MrJourney" />
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ml-auto">
                            <li className="nav-item mr-1">
                                <button class="btn btn-outline-light my-2 my-sm-0" onClick={() => this.OpenSearch()}>Search</button>
                            </li>
                            <li className="nav-item mr-1">
                                {
                                    this.state.showSearch ? // state ? true : false
                                        <form class="form-inline">
                                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                        </form>
                                        : null
                                }
                            </li>
                            <li className="nav-item mr-1">
                                <Link to="/CreateTrip">
                                    <button type="button" class="btn btn-light ml-2 mr-2 text-dark round">Create Trip
                                <i className="fas fa-plus fa-sm ml-1" style={{ color: "dark" }}></i>
                                    </button>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <button type="button" class="btn btn-light ml-2 mr-2 text-dark round" onClick={this.Alert}>Create Room
                                <i className="fas fa-plus fa-sm ml-1" style={{ color: "dark" }}></i>
                                </button>
                            </li>

                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-user-circle fa-lg text-white"></i> <span className="text-white">Guest</span> </a>
                                {/* <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4"> */}
                                <this.ShowLoginButton></this.ShowLoginButton>
                                {/* <a className="dropdown-item" href="#">Sign In</a> */}
                                {/* <a class="dropdown-item " href="#">My account</a>
                                    <a class="dropdown-item " href="#">Joined Room</a>
                                    <a class="dropdown-item " href="#">My Owner Room</a>
                                    <a class="dropdown-item " href="#">Log out</a> */}
                                {/* </div> */}
                            </li>


                        </ul>
                    </div>
                </nav>
            </div>






        )
    }
}
export default NavWebPage;
