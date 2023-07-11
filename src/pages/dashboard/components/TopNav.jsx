import React from "react";
import '../styles/TopNav.css';
import login from '../../../assets/image/login.svg';
class TopNav extends React.Component{
    constructor() {
    super();
}
render() {
    return(

                <div className="topNav">


                        <p className="logo">Regnosite</p>


                    <nav>
                        <li>
                            <a href="https://google.com" className="name1">Feature</a>
                        </li>
                        <li>

                            <a href="https://semicolon.com" className="name2">Integration</a>
                        </li>
                        <li>
                            <a href="https://github.com" className="name3">Pricing</a>
                        </li>
                        <li>
                            <a href="https://google.com" className="name4">Comapny</a>
                        </li>
                        <li>
                            <a href="https://semicolon.com" className="name5">Blog</a>
                        </li>

                        <div className="getDemo">
                            <p className="demo">Get a demo</p>
                </div>

                <div className="login">
                    <img src={login} alt ="Login"/>
                    <p className="ptag_login">Login</p>
            </div>

        </nav>

</div>


    )
}
}
export default TopNav