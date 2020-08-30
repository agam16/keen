import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { Container, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import ParticleComponent from './components/ParticleComponent';
import GoogleMapContainer from './components/GoogleMapContainer';
import InputFormComponent from './components/InputFormComponent';
import NavbarComponent from './components/NavbarComponent';


function App() {
    onstructor(props) {
        super(props);
        this.state = {
            location: ''
        }
    }

    const submitBackendFinalRequest = () => {

    }


    return (
        <React.Fragment>
            <div className="container-fluid">
                <NavbarComponent />
                <Row style={{ minHeight: '92vh' }}>
                    <div className="col-md-7" style={{padding: '0px'}}>
                        <GoogleMapContainer />
                    </div>
                    <div className="col-md-5">
                        <InputFormComponent location={this.state.location} />
                    </div>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default App;
