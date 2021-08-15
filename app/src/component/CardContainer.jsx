import React, { Component }  from 'react'
import { Col, Row, Container, Button} from 'react-bootstrap';
import axios from 'axios';
import cardBack from '../cardBack.jpg'

export default class CardContainer extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
            apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
            cardID: '',
            cardImg: '',
            cardImgSmall: '',
            page: 0,
            cardListLength: 0,
            cardList: [],
            rowIndexes: [0, 4, 8, 12],
        }
    }
    componentDidUpdate(props, prevState){
        if(this.props.apiURL!==this.state.apiURL){
            axios.get(this.props.apiURL).then(res =>{
                this.setState({
                    cardList: res.data.data,
                    cardListLength: res.data.data.length
                });
            });
        }
    }
    
    componentDidMount(){
        axios.get(this.state.apiURL).then(res =>{
            this.setState({
                cardList: res.data.data,
                cardListLength: res.data.data.length
            });
        });
    }

    tidyUpCardInfo(card){
        if(card.type!=="Skill Card" || card.type!=="Spell Card" || card.type==="Trap Card")
        {
            var Effect = "Effect";
            var Ability = '';
            var SummonType = '';
            var tempCard={};

            //Assigns all the types of normal monsters
            if(card.type==="Normal Monster" || card.type==="Normal Tuner Monster" || card.type==="Normal Monster" || 
            card.type==="Normal Monster" || card.type==="Normal Monster")
            {
                Effect = "Normal"
            }
            
            //Finds all of the tuners
            if(card.type==="Normal Tuner Monster" || card.type==="Tuner Monster" || card.type==="Flip Tuner Effect Monster" || 
            card.type==="Pendulum Tuner Effect Monster" || card.type==="Synchro Tuner Monster")
            {
                Ability = "Tuner"
            }
            //Find all of the Gemini
            if(card.type==="Gemini Monster"){
                Ability= "Gemini"
            }

            //Find all of the spirit monsters
            if(card.type==="Spirit Monster"){
                Ability= "Spirit"
            }
            //Find all of the Flip monsters
            if(card.type==="Flip Monster" || card.type==="Flip Effect Monster" || card.type==="Flip Tuner Effect Monster" || card.type==="Pendulum Flip Effect Monster"){
                Ability= "Flip"
            }
            //Find all of the toon monsters
            if(card.type==="Toon Monster"){
                Ability="Toon"
            }
            //Find all union monsters
            if(card.type==="Union Effect Monster"){
                Ability="Union"
            }
            if(card.type==="Fusion Monster" || card.Type==="Pendulum Effect Fusion Monster"){
                SummonType = "Fusion"
            }
            if(card.type==="Link Monster"){
                SummonType = "Link"
            }
            if(card.type==="Ritual Monster" || card.type==="Ritual Effect Monster"){
                SummonType = "Ritual"
            }
            if(card.type==="Pendulum Effect Monster" || card.type==="Pendulum Normal Monster" || card.type==="Pendulum Tuner Effect Monster" || card.type==="" || 
            card.type==="XYZ Pendulum Effect Monster" || card.type==="Pendulum Flip Effect Monster" || card.type==="Pendulum Effect Fusion Monster"){
                SummonType= "Pendulum"
            }
            if(card.type==="XYZ Monster" || card.type==="XYZ Pendulum Effect Monster"){
                SummonType= "XYZ"
            }
            if(card.type==="Synchro Monster" || card.type==="Synchro Tuner Monster" || card.type==="Synchro Pendulum Effect Monster"){
                SummonType="Synchro"
            }
             tempCard={
                SummonType: SummonType,
                Id: card.id,
                Name: card.name,
                Type: card.type,
                MonsterRace: card.race,
                CardEffect: card.desc,
                CardAtk: card.atk,
                CardDef: card.def,
                CardLvl: card.level,
                SpellRace: '',
                TrapRace: '',
                CardAttribute: card.attribute,
                PicURL: card.card_images[0].image_url,
                PicSmallURL: card.card_images[0].image_url_small,
                Ability: Ability,
                Effect: Effect,
                
            }
        }
        if(card.type==="Spell Card"){
                 tempCard={
                SummonType: '',
                Id: card.id,
                Name: card.name,
                Type: card.type,
                MonsterRace: '',
                CardEffect: card.desc,
                CardAtk: '',
                CardDef: '',
                CardLvl: '',
                SpellRace: card.race,
                TrapRace: '',
                CardAttribute: '',
                PicURL: card.card_images[0].image_url,
                PicSmallURL: card.card_images[0].image_url_small,
                Ability: '',
                Effect: ''
            }
        }
        if(card.type==="Trap Card"){
              tempCard={
                SummonType: '',
                Id: card.id,
                Name: card.name,
                Type: card.type,
                MonsterRace: '',
                CardEffect: card.desc,
                CardAtk: '',
                CardDef: '',
                CardLvl: '',
                SpellRace: '',
                TrapRace: card.race,
                CardAttribute: '',
                PicURL: card.card_images[0].image_url,
                PicSmallURL: card.card_images[0].image_url_small,
                Ability: '',
                Effect: ''
            }
        }
        if(card===undefined){
            tempCard=null;
        }
        return tempCard
    }
    handleMouseEnter(card){
        if(card!==undefined){
            var temp = this.tidyUpCardInfo(card)
            console.log(temp)
            this.props.setSelected(temp)
        }
        
    }
    handlePageButton(buttonNumber){
        if(true){
            this.setState((prevState) =>({
                page: buttonNumber
            }))
        }
    }
    handleFront(){
        this.setState((prevState) =>({
            page: 0
        }))
    }
    handleLast(){
        let last=Math.ceil(this.state.cardListLength/16)-1
        this.setState((prevState) =>({
             page: last
         }))
    }
    handleBackButton(){
      this.setState((prevState) => ({
          page: prevState.page - 1
      }))
    }

    handleForwardButton(){
        this.setState((prevState) => ({
            page: prevState.page + 1
        })) 
    }
    getRow(loaded, index) {
        const exists1 = this.state.cardList[index+0+this.state.page*16]
        const exists2 = this.state.cardList[index+1+this.state.page*16]
        const exists3 = this.state.cardList[index+2+this.state.page*16]
        const exists4 = this.state.cardList[index+3+this.state.page*16]
        const className = "m-4 mx-auto gridPic"

        return(
            <Row className="myRow">
                <Col>
                    <img 
                        src = {loaded && exists1 ? this.state.cardList[index+0+this.state.page*16].card_images[0].image_url_small : cardBack} 
                        className={className} 
                        id={index+0+this.state.page*16} 
                        onMouseEnter={(e) =>{ this.handleMouseEnter(this.state.cardList[index+0+this.state.page*16])}} 
                        //onMouseLeave={this.handleMouseLeave} 
                        alt="Card"
                    />
                </Col>
                <Col>
                    <img 
                        src = {loaded && exists2 ? this.state.cardList[index+1+this.state.page*16].card_images[0].image_url_small : cardBack} 
                        className={className} 
                        id={index+1+this.state.page*16} 
                        onMouseEnter={(e) =>{ this.handleMouseEnter(this.state.cardList[index+1+this.state.page*16])}}
                        //onMouseLeave={this.handleMouseLeave} 
                        alt="Card"
                    />
                </Col>
                <Col>
                    <img src = {loaded && exists3 ? this.state.cardList[index+2+this.state.page*16].card_images[0].image_url_small : cardBack} 
                        className={className} 
                        id={index+2+this.state.page*16} 
                        onMouseEnter={(e) =>{ this.handleMouseEnter(this.state.cardList[index+2+this.state.page*16])}} 
                        //onMouseLeave={this.handleMouseLeave} 
                        alt="Card"
                    />
                </Col>
                <Col>
                    <img 
                        src = {loaded && exists4 ? this.state.cardList[index+3+this.state.page*16].card_images[0].image_url_small : cardBack} 
                        className={className} 
                        id={index+3+this.state.page*16} 
                        onMouseEnter={(e) =>{ this.handleMouseEnter(this.state.cardList[index+3+this.state.page*16])}} 
                        //onMouseLeave={this.handleMouseLeave} 
                        alt="Card"
                    />
                </Col>
            </Row>
        )
    }

    render(){
        const loaded = this.state.cardList.length > 0

        return (
            
            <Container>
                <Col>
                  {
                        this.state.rowIndexes.map(x => {
                            return this.getRow(loaded, x)
                        })                
                    }
                </Col>
                <Button variant= "secondary"  onClick={() => this.handleFront()}>Front</Button>
                <Button variant= "secondary"  onClick={() => this.handleBackButton()}>Back</Button>{' '}
                <Button variant= "secondary"  onClick={() => this.handlePageButton(this.state.page-2)}> {this.state.page>2 ? this.state.page -2 : ".."}</Button>
                <Button variant= "secondary"  onClick={() => this.handlePageButton(this.state.page-1)}> {this.state.page>1 ? this.state.page -1 : '.'}</Button>
                <Button >{this.state.page}</Button>
                <Button variant= "secondary"  onClick={() => this.handlePageButton(this.state.page+1)}> {this.state.page>0 ? this.state.page +1 : '.'}</Button>
                <Button variant= "secondary"  onClick={() => this.handlePageButton(this.state.page+2)}> {this.state.page>1 ? this.state.page +2 : ".."}</Button>
                <Button variant= "secondary"  onClick={() => this.handleForwardButton()}>Forward</Button>{' '}
                <Button variant= "secondary"  onClick={() => this.handleLast()}>Last</Button>
            </Container>
            
         );
    }
        
}
 