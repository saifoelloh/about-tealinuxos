import React, { Component } from 'react'
import LogoTea from '../assets/img/stevia gradient.png'
import {Link} from 'react-router-dom'
import '../assets/css/custom.css'

export default class Home extends Component {
    render() {
        return (
    <div className="container1">
        {/* <!--Kanan--> */}
        <div className="about-TL">
            <div className="logo">
                <img src={LogoTea} alt=""/>
            </div>
            <div className="teaLinux">
               <span>TeaLinuxOS XI Stevia</span><sup>  (64bit)</sup><br/>
                Built on Xubuntu 18.04<br/>
                <a href="#">Website</a>
            </div>
        </div>
        {/* <!--Kiri--> */}
        <div className="spec">
            <h2><b>Hardware</b></h2>
            <div className="list-spec">
                <table width="400px">
                    <tr>
                        <td>Asu-Sila X-pad aka PC NAME</td>
                    </tr>
                    <tr>
                        <td>intel(r) core(tm) i3-2120 cpu @ 3.30ghz </td>
                    </tr>
                    <tr>
                        <td>69 Gb RAM</td>
                    </tr>
                    <tr>
                        <td>69,69 GB storage</td>
                    </tr>
                    <tr>
                        <td> graphic intel corporation 2nd generation core processor family integrated graphics controller (rev 09)</td>
                    </tr>
                </table>
            </div>
        </div>
        {/* <!--footer--> */}
        <div className="footer">
            <Link type="button" id="button" to="/credit">Credit</Link>
            <button type="button" id="button1"><a href="#">Help</a></button>
            <button type="button" id="button2"><a href="#">Report Bug</a></button>
        </div>
    </div>
        )
    }
}
