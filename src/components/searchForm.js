import React from "react"

import {Form, FormControl, Button} from "react-bootstrap"

import { FaSearch } from 'react-icons/fa';

export class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {collapsed: this.props.collapsed, query: ''};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    if(this.state.collapsed === false){
      //this.submit();
    }
    this.setState({collapsed: !this.state.collapsed});
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({query: e.target.value});
  }

  render() {
    return <Form inline onSubmit={e => e.preventDefault()}>
      <Form.Group>
        <FormControl
          type="text"
          placeholder="Поиск"
          className="mr-2"
          hidden={this.state.collapsed}
          value={this.state.query}
          onChange={this.handleChange} 
        />
      </Form.Group>
      <Button onClick={this.handleClick}><FaSearch /></Button>
    </Form>
  }
}