import React from 'react';
// import '../css/App.css';

const FooterTripPage = (props) => {

    return (
        <div>
                <footer class="bg-warning text-white text-center" style={{ color: "white",height:50}}>               
                        <h4>{props.footertext}</h4>                 
                </footer>
          
        </div>
    )

}
export default FooterTripPage;