import React from "react";
import "./styles/style.css";

import CardList from "./components/CardList";
import Form from "./components/Form";

export default class App extends React.Component {
  state = {
    profiles: []
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}
