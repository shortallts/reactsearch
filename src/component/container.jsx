import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import SingleCardDisplay from './SingleCardDisplay';
import CardContainer from './CardContainer';
import SearchForm from './SearchForm';
import { Component } from 'react';

export default class MyContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCard : null,
      apiURL: null,
    }
  }
  setURL = (apiURL) => {
    this.setState({
      apiURL: apiURL
    })
  }
  setSelected = (card) => {
    this.setState({
      selectedCard: card
    })
  }

  render(){
    return(
      <Container>
          <Row>
            <Col className="InfoCol">
              <Row>
                <SingleCardDisplay 
                  card={this.state.selectedCard}
                />
              </Row>
            </Col>
            <Col className="CardImages">
              <CardContainer
                apiURL={this.state.apiURL}
                setSelected={this.setSelected} 
              />
            </Col>
            <Col className="SearchForm">
              <SearchForm
                 setURL={this.setURL}
              />
            </Col>
          </Row>
      </Container>
    );
  
  }    
}
