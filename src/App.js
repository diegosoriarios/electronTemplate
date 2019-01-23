import React, { Component } from 'react';
import { 
  Form, 
  FormGroup, 
  Col, 
  ControlLabel, 
  FormControl, 
  Radio, 
  Button 
} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <Form horizontal>
          <FormGroup >
            <Col componentClass={ControlLabel} sm={2}>
              Nome
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Nome" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Telefone
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Telefone" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Radio name="radioGroup" inline>
              M
            </Radio>{' '}
            <Radio name="radioGroup" inline>
              F
            </Radio>{' '}
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button bsStyle="primary" type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </form>
    );
  }
}

export default App;
