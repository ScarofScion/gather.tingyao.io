import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import {
  Grid,
  Row,
  Col,
  Clearfix,
  Alert,
  Badge,
  Button,
  Jumbotron,
  FormGroup,
  ButtonGroup,
  ButtonToolbar,
  DropdownButton,
  MenuItem,
  PageHeader
} from "react-bootstrap";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
let shoBtn;

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAxqRtkFndnlPNMy-XgYPj4dr0-t1jRP5U",
    authDomain: "gather-182d9.firebaseapp.com",
    databaseURL: "https://gather-182d9.firebaseio.com",
    projectId: "gather-182d9",
    storageBucket: "gather-182d9.appspot.com",
    messagingSenderId: "620153026922"
  });
}

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

class App extends Component {
  state = {
    guestcount: 0,
    isComing: false,
    isConfirmed: false,
    guestname: "biguncle-william"
  };

  handleClick() {
    console.log("click");
    this.setState({ isComing: true });
  }

  handleCancel() {
    this.setState({ isComing: false });
  }

  handleSave() {
    this.setState({ isComing: true });
    db.collection("guestlist")
      .doc("biguncle-william")
      .set({
        guestcount: this.state.guestcount,
        isComing: this.state.isComing
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }

  handleGuestCountChange = delta => {
    this.setState(prevState => ({
      guestcount: (prevState.guestcount += delta)
    }));
  };

  handleGoing() {
    this.setState(prevState => ({
      isComing: (prevState.isComing = true)
    }));
  }

  handleNotGoing() {
    this.setState(prevState => ({
      isComing: (prevState.isComing = false)
    }));
    console.log(this.state.isComing);
  }

  render() {
    if (!this.state.isConfirmed) {
      if (!this.state.isComing) {
        shoBtn = (
          <Button onClick={this.handleClick.bind(this)} bsStyle="primary">
            RSVP
          </Button>
        );
      }
      if (this.state.isComing) {
        shoBtn = (
          <div>
            <ButtonGroup justified>
              <Button href="#" onClick={this.handleGoing.bind(this)}>
                Going
              </Button>
              <Button href="#" onClick={this.handleNotGoing.bind(this)}>
                Not Going
              </Button>
            </ButtonGroup>
            <Counter
              guests={this.state.guestcount}
              handleGuest={this.handleGuestCountChange}
            />
            <Button bsStyle="primary" onClick={this.handleSave.bind(this)}>
              Save
            </Button>
            <Button bsStyle="primary" onClick={this.handleCancel.bind(this)}>
              Cancel
            </Button>
          </div>
        );
      }
    }

    return (
      <div className="App">
        <Header />
        {shoBtn}
        <Jumbotron>
          <Col sm={6} md={3}>
            DATE: Saturday, Febuarary 2nd, 2018 (ADD TO CALENDAR) <br />
          </Col>
          <Col sm={6} md={3}>
            ADDRESS: Caesars Hotel (GET DIRECTIONS) <br />
          </Col>
          <Col sm={6} md={3}>
            HOST: Jasmine and William (949)-829-1403 (SEND A MESSAGE) <br />
          </Col>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
