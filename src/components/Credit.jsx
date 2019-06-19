import React, { Component } from 'react'
import '../assets/css/credit.css'
import { Link } from 'react-router-dom'
import {ListGroup, ListGroupItem} from 'reactstrap'
import ListDevelopers from '../assets/json/developers.json'


export default class Credit extends Component {
  state = {
    listDeveloper: [
      ListDevelopers[0].packaging,
      ListDevelopers[0].riset,
      ListDevelopers[0].artwork,
      ListDevelopers[0].documentation,
    ],
    daftar: [...ListDevelopers[0].packaging]
  }
  clickHandler = id => {
    console.log({
      id: id,
      isi: this.state.daftar,
    })
    this.setState({
      daftar: this.state.listDeveloper[id]
    })
  }
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <div style={{ background: '#233e44' }} className="w-100 h-100">
          <div className="pm">
            <Link className="btn text-left btn-primary" id="button" to="/">Home</Link>
            <span className="text-center text-white">
              <h4>Developer TeaLinuxOS</h4>
              <h5>Project Manager</h5>
              <h6 onClick={()=>{
                window.open('https://github.com/saifoelloh')
              }}>Moh. Saifoelloh Noor</h6>
            </span>
          </div>
          <div className="devList justify-content-center">
            <div className="row ">
              <div className="col-4" id="warperList">
                <div className="list-group" id="list-tab" role="tablist">
                  <p className="list-group-item list-group-item-action" onClick={()=>{this.clickHandler(0)}} id="list-packaging-list" data-toggle="list" role="tab" aria-controls="home">Packaging</p>
                  <p className="list-group-item list-group-item-action" onClick={()=>{this.clickHandler(1)}} id="list-software-research-list" data-toggle="list" role="tab" aria-controls="profile">Software Reserach</p>
                  <p className="list-group-item list-group-item-action" onClick={()=>{this.clickHandler(2)}} id="list-artwork-list" data-toggle="list" role="tab" aria-controls="messages">Artwork</p>
                  <p className="list-group-item list-group-item-action" onClick={()=>{this.clickHandler(3)}} id="list-documentation-list" data-toggle="list" role="tab" aria-controls="settings">Documentation</p>
                </div>
              </div>
              <div className="col-8">
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active text-center" id="list-home" role="tabpanel">
                    <ListGroup className="overflow-auto">
                      {this.state.daftar.map((datum, key) => {
                        return (<ListGroupItem key={key}
                          className="text-dark"
                          onClick={()=>{
                          window.open(datum.link)
                        }}>{datum.name}</ListGroupItem>);
                      })}
                    </ListGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}