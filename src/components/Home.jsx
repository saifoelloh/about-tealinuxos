import React, { Component } from 'react'
import LogoTea from '../assets/img/stevia gradient.png'
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHdd,
    faHospitalSymbol,
    faDesktop,
    faMemory
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { os } from 'os'
import '../assets/css/custom.css'

export default class Home extends Component {
    state = {
        hostname: 'unknown',
        cpu: 'unknown',
        ram: 'unknown',
        storage: 'unknown',
    }
    render() {
        return (
            <div className="container1 text-white h-100">
                {/* <!--Kanan--> */}
                <div className="about-TL">
                    <div className="logo">
                        <img src={LogoTea} alt="" />
                    </div>
                    <div className="teaLinux">
                        <span>TeaLinuxOS XI Stevia</span><sup>  (64bit)</sup><br />
                        Built on Xubuntu 18.04<br />
                        <a href="#">Website</a>
                    </div>
                </div>
                {/* <!--Kiri--> */}
                <div className="spec d-flex flex-column align-items-center">
                    <span className="my-auto">
                        <h2><b>Hardware</b></h2>
                        <p className="text-left m-0"><FontAwesomeIcon icon={faHospitalSymbol} /> : {this.state.hostname} </p>
                        <p className="text-left m-0"><FontAwesomeIcon icon={faDesktop} /> : {this.state.cpu} </p>
                        <p className="text-left m-0"><FontAwesomeIcon icon={faMemory} /> : {this.state.ram} Gb </p>
                        <p className="text-left m-0"><FontAwesomeIcon icon={faHdd} /> : {this.state.storage} Gb Storage </p>
                    </span>
                </div>
                {/* <!--footer--> */}
                <div className="footer w-100">
                    <div className="row w-100">
                        <div className="col-6 text-center">
                            <Link className="btn btn-success" to="/credit">Credit</Link>
                        </div>
                        <div className="col-6 text-center">
                            <a className="btn btn-success mx-2" onClick={()=>{
                                window.open('https://tealinuxos.org/dokumentasi/')
                            }} >Help</a>
                            <a className="btn btn-success mx-2" >Report Bug</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        Axios
        .get('http://localhost:3333/api/about')
        .then(res => {
            if (res.data.code===200) {
                this.setState({
                    hostname: res.data.hostname,
                    cpu: res.data.processor,
                    ram: res.data.ram,
                    storage: res.data.storage,
                })
            }
        })
        .catch(err => {
            console.log(err, "sss")
            console.log(os, "hhh")
        })
    }
        
}
