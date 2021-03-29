import React, { FormEvent } from "react";
import api from "../api/api";

export default class Form extends React.Component {
  state = { userName: "" };

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.get(this.state.userName);

      this.props.onSubmit(response.data);

      this.setState({ userName: "" });
    } catch {
      alert("Invalid Github username");
    }
  };

  handleNameChange = (event: FormEvent<HTMLInputElement>) => {
    this.setState({ userName: event.currentTarget.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          onChange={this.handleNameChange}
          value={this.state.userName}
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}
