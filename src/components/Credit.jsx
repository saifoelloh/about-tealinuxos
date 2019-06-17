import React, { Component } from 'react'
import '../assets/css/credit.css'
import {Link} from 'react-router-dom'


export default class Credit extends Component {
    render() {
        return (
            <div>
<div className="container">
        <div className="pm text-center">
            <h3>Developer TeaLinuxOS</h3>
            <h4>Project Manager</h4>
            <h5><a href="">Saipul</a></h5>
        </div>
        <div className="devList justify-content-center">
            <div className="row ">
                <div className="col-4" id="warperList">
                  <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action" id="list-packaging-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Packaging</a>
                    <a className="list-group-item list-group-item-action" id="list-software-research-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Software Reserach</a>
                    <a className="list-group-item list-group-item-action" id="list-artwork-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Artwork</a>
                    <a className="list-group-item list-group-item-action" id="list-documentation-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Documentation</a>
                  </div>
                </div>
                <div className="col-8">
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active text-center" id="list-home" role="tabpanel" aria-labelledby="">
                            <ul>
                                <li><a href="">Koor</a></li>
                                <li><a href="">Koor</a></li>
                                <li><a href="">Koor</a></li>
                                <li><a href="">Koor</a></li>
                                <li><a href="">Koor</a></li>
                                <li><a href="">Koor</a></li>
                            </ul>
                    </div>
                    <div className="tab-pane fade text-center" id="list-profile" role="tabpanel" aria-labelledby="">
                            <ul>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                </ul>
                    </div>
                    <div className="tab-pane fade text-center" id="list-messages" role="tabpanel" aria-labelledby="">
                            <ul>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                </ul>
                    </div>
                    <div className="tab-pane fade text-center" id="list-settings" role="tabpanel" aria-labelledby="">
                            <ul>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                    <li><a href="">Koor</a></li>
                                </ul>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <Link type="button" id="button" to="/home">Home</Link>
    </div>
            </div>
        )
    }
}