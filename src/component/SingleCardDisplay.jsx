import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'


class SingleCardDisplay extends Component {

    constructor(props){
        super(props)
        this.state = {
            card: {
                ID: 6983839,
                Effect: "Effect",
                Name: "Tornado Dragon",
                Type: "Monster Card",
                Attribute : "Wind",
                TrapRace: '',
                MonsterRace: 'Wyrm',
                SpellRace: '',
                Ability: '',
                SummonType: 'XYZ',
                CardEffect:'2 Level 4 monsters\nOnce per turn (Quick Effect): You can detach 1 material from this card, then target 1 Spell/Trap on the field; destroy it.',
                CardAtk:'2100',
                CardDef:'2000',
                Cardlvl: 4,
                CardAttribute: 'Wind',
                PicURL:"https://storage.googleapis.com/ygoprodeck.com/pics/6983839.jpg",
                PicSmallURL:"https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg",
            }
            
        }
    }
     renderCard(card){
        
        //Returns the JSX for a monster card without an ability or summon type.
        if(card.MonsterRace!=='' && card.Ability ==='' && card.SummonType===''){
            return(
               <React.Fragment>
               <Row>
                   <Card className="mb-2 bg-dark text-danger" style={{ width: '12rem' }}>
                       <Card.Body>{card.Name}</Card.Body>
                   </Card>
                   <Card className="mb-2 bg-dark text-danger"  style={{ width: '7rem' }}>
                       <Card.Body>{card.CardAttribute}</Card.Body>
                   </Card>
                   <Card className="mb-2 bg-dark text-danger" style={{ width: '5rem' }}>
                       <Card.Body>{card.CardLvl}</Card.Body>
                   </Card>
               </Row>
               <img src ={card.PicURL} alt="Card"/>
               <Row>
                   <Col>
                       <Card className="mb-2 bg-dark text-danger">

                           <Card.Body>{card.MonsterRace}</Card.Body>
                       </Card>
                   </Col>
                   <Col>
                       <Card className="mb-2 bg-dark text-danger">
                           <Card.Body>{card.Effect }</Card.Body>
                       </Card>
                   </Col>
               </Row>

               <Row>
                   <Card className="mb-2 bg-dark text-danger">
                       <Card.Body>{card.CardEffect !=='' ? card.CardEffect : "" }</Card.Body>
                   </Card>
               </Row>
                   <Row>
                       <Col> 
                           <Card className={"mb-2 bg-dark text-danger"}>
                               <Card.Body>{card.CardAtk}</Card.Body>
                           </Card>
                       </Col>
                       <Col>
                           <Card className={"mb-2 bg-dark text-danger"}>
                               <Card.Body>{card.CardDef}</Card.Body>
                           </Card>
                       </Col>    
                   </Row>
                   
           </React.Fragment>
            )
           
        }

        //Returns the JSX for a monster card with an ability but no summon type.
        if(card.MonsterRace!=='' && card.Ability !=='' && card.SummonType===''){
            return(
               <React.Fragment>
               <Row>
                   <Card className="mb-2 bg-dark text-danger" style={{ width: '12rem' }}>
                       <Card.Body>{card.Name}</Card.Body>
                   </Card>
                   <Card className="mb-2 bg-dark text-danger"  style={{ width: '7rem' }}>
                       <Card.Body>{card.CardAttribute}</Card.Body>
                   </Card>
                   <Card className="mb-2 bg-dark text-danger" style={{ width: '5rem' }}>
                       <Card.Body>{card.CardLvl}</Card.Body>
                   </Card>
               </Row>
               <img src ={card.PicURL} alt="Card"/>
               <Row>
                   <Col>
                       <Card className="mb-2 bg-dark text-danger">
                           <Card.Body>{card.MonsterRace}</Card.Body>
                       </Card>
                   </Col>
                   <Col>
                    <Card className={"mb-2 bg-dark text-danger"}>
                        <Card.Body>{card.Ability}</Card.Body>
                    </Card>
                   </Col>
                   <Col>
                       <Card className="mb-2 bg-dark text-danger">
                           <Card.Body>{card.Effect }</Card.Body>
                       </Card>
                   </Col>
               </Row>

               <Row>
                   <Card className="mb-2 bg-dark text-danger">
                       <Card.Body>{card.CardEffect !=='' ? card.CardEffect : "" }</Card.Body>
                   </Card>
               </Row>
                   <Row>
                       <Col> 
                           <Card className={"mb-2 bg-dark text-danger"}>
                               <Card.Body>{card.CardAtk}</Card.Body>
                           </Card>
                       </Col>
                       <Col>
                           <Card className={"mb-2 bg-dark text-danger"}>
                               <Card.Body>{card.CardDef}</Card.Body>
                           </Card>
                       </Col>    
                   </Row>
                   
           </React.Fragment>
            )
           
        }
                //Returns the JSX for a monster card with no ability but has a summon type.
                if(card.MonsterRace!=='' && card.Ability ==='' && card.SummonType!==''){
                    return(
                       <React.Fragment>
                       <Row>
                           <Card className="mb-2 bg-dark text-danger" style={{ width: '12rem' }}>
                               <Card.Body>{card.Name}</Card.Body>
                           </Card>
                           <Card className="mb-2 bg-dark text-danger"  style={{ width: '7rem' }}>
                               <Card.Body>{card.CardAttribute}</Card.Body>
                           </Card>
                           <Card className="mb-2 bg-dark text-danger" style={{ width: '5rem' }}>
                               <Card.Body>{card.CardLvl}</Card.Body>
                           </Card>
                       </Row>
                       <img src ={card.PicURL} alt="Card"/>
                       <Row>
                           <Col>
                               <Card className="mb-2 bg-dark text-danger">
                                   <Card.Body>{card.MonsterRace}</Card.Body>
                               </Card>
                           </Col>
                           <Col>
                            <Card className={"mb-2 bg-dark text-danger"}>
                                <Card.Body>{card.SummonType}</Card.Body>
                            </Card>
                           </Col>
                           <Col>
                               <Card className="mb-2 bg-dark text-danger">
                                   <Card.Body>{card.Effect}</Card.Body>
                               </Card>
                           </Col>
                       </Row>
        
                       <Row>
                           <Card className="mb-2 bg-dark text-danger">
                               <Card.Body>{card.CardEffect !=='' ? card.CardEffect : "" }</Card.Body>
                           </Card>
                       </Row>
                           <Row>
                               <Col> 
                                   <Card className={"mb-2 bg-dark text-danger"}>
                                       <Card.Body>{card.CardAtk}</Card.Body>
                                   </Card>
                               </Col>
                               <Col>
                                   <Card className={"mb-2 bg-dark text-danger"}>
                                       <Card.Body>{card.CardDef}</Card.Body>
                                   </Card>
                               </Col>    
                           </Row>
                           
                   </React.Fragment>
                    )
                   
                }

        //Returns the JSX for a monster card with an ability and a summon type.
        if(card.MonsterRace!=='' && card.Ability !=='' && card.SummonType!==''){
            return(
               <React.Fragment>
               <Row>
                   <Card className="mb-2 bg-dark text-danger" style={{ width: '12rem' }}>
                       <Card.Body>{card.Name}</Card.Body>
                   </Card>
                   <Card className="mb-2 bg-dark text-danger"  style={{ width: '7rem' }}>
                       <Card.Body>{card.CardAttribute}</Card.Body>
                   </Card>
                   <Card className="mb-2 bg-dark text-danger" style={{ width: '5rem' }}>
                       <Card.Body>{card.CardLvl}</Card.Body>
                   </Card>
               </Row>
               <img src ={card.PicURL} alt="Card"/>
               <Row>
                   <Col>
                       <Card className="mb-2 bg-dark text-danger">
                           <Card.Body>{card.MonsterRace}</Card.Body>
                       </Card>
                   </Col>
                   <Col>
                   <Card className={"mb-2 bg-dark text-danger"}>
                        <Card.Body>{card.SummonType}</Card.Body>
                    </Card>
                    <Card className={"mb-2 bg-dark text-danger"}>
                        <Card.Body>{card.Ability}</Card.Body>
                    </Card>
                   </Col>
                   <Col>
                       <Card className="mb-2 bg-dark text-danger">
                           <Card.Body>{card.Effect }</Card.Body>
                       </Card>
                   </Col>
               </Row>

               <Row>
                   <Card className="mb-2 bg-dark text-danger">
                       <Card.Body>{card.CardEffect !=='' ? card.CardEffect : "" }</Card.Body>
                   </Card>
               </Row>
                   <Row>
                       <Col> 
                           <Card className={"mb-2 bg-dark text-danger"}>
                               <Card.Body>{card.CardAtk}</Card.Body>
                           </Card>
                       </Col>
                       <Col>
                           <Card className={"mb-2 bg-dark text-danger"}>
                               <Card.Body>{card.CardDef}</Card.Body>
                           </Card>
                       </Col>    
                   </Row>
                   
           </React.Fragment>
            )
           
        }

         if(card.SpellRace!==''){
            return(
               <React.Fragment>
                   <Row>
                       <Card className="mb-2 bg-dark text-danger" style={{ width: '12rem' }}>
                           <Card.Body>{card.Name}</Card.Body>
                       </Card>
                       <Card className="mb-2 bg-dark text-danger" style={{ width: '8rem' }}>
                           <Card.Body>{card.Type}</Card.Body>
                       </Card>
                   </Row>
                   <img src ={card.PicURL} alt="Card"/>
                   <Row>
                       <Col>
                           <Card className="mb-2 bg-dark text-danger">
                               <Card.Body>{card.SpellRace }</Card.Body>
                           </Card>
                       </Col>
                   </Row>

                   <Row>
                       <Card className="mb-2 bg-dark text-danger">
                           <Card.Body>{card.CardEffect !=='' ? card.CardEffect : "" }</Card.Body>
                       </Card>
                   </Row>
               </React.Fragment>
            )
           
        }
        if(card.TrapRace!==''){
            return(
               <React.Fragment>
                   <Row>
                       <Card className="mb-2 bg-dark text-danger" style={{ width: '12rem' }}>
                           <Card.Body>{card.Name}</Card.Body>
                       </Card>
                       <Card className="mb-2 bg-dark text-danger" style={{ width: '8rem' }}>
                           <Card.Body>{card.Type}</Card.Body>
                       </Card>
                   </Row>
                   <img src ={card.PicURL} alt="Card"/>
                   <Row>
                       <Col>
                           <Card className="mb-2 bg-dark text-danger">
                               <Card.Body>{card.TrapRace }</Card.Body>
                           </Card>
                       </Col>
                   </Row>

                   <Row>
                       <Card className="mb-2 bg-dark text-danger">
                           <Card.Body>{card.CardEffect !=='' ? card.CardEffect : "" }</Card.Body>
                       </Card>
                   </Row>
               </React.Fragment>
            )
           
        }
        else return(<div></div>)
     }
    
    render() { 

        const card = this.props.card ? this.props.card : this.state.card;

        return (
            this.renderCard(card)
        );
    }
}
 
export default SingleCardDisplay;