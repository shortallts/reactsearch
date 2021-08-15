import React, { Component } from 'react'
import { Button, Badge, Form, Row, Col, FormControl, InputGroup } from 'react-bootstrap';

class SearchForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            Desc: '',
            typeSelect: '',
            ID: '',
            Effect: '',
            Name: '',
            Type: '',
            Attribute : '',
            TrapRace: '',
            MonsterRace: '',
            SpellRace: '',
            Ability: '',
            SummonType: '',
            CardEffect: '',
            CardAtk:'',
            CardDef:'',
            Cardlvl: '',
            CardAttribute: '',
            PicURL:'',
            PicSmallURL:'',
            MinAtk: '',
            MaxAtk: '',
            MinDef: '',
            MaxDef: '',
            MinLvl: '',
            MaxLvl: '',

        }
    }


    handleTrapRaceChange(value){
       this.setState((prevState) =>({
       TrapRace: value
       }))
    }
    handleSpellRaceChange(value){
        this.setState((prevState) =>({
        SpellRace: value
        }))
     }

     handleMinAtkChange(value){
        this.setState((prevState) =>({
        MinAtk: value
        }))
     }
     handleMaxAtkChange(value){
        this.setState((prevState) =>({
        MaxAtk: value
        }))
     }
     handleMinDefChange(value){
        this.setState((prevState) =>({
        MinDef: value
        }))
     }
     handleMaxDefChange(value){
        this.setState((prevState) =>({
        MaxDef: value
        }))
     }
     handleMinLvlChange(value){
        this.setState((prevState) =>({
        MinLvl: value
        }))
     }
     handleMaxLvlChange(value){
        this.setState((prevState) =>({
        MaxLvl: value
        }))
     }
     handleTypeChange(value) { 
        this.setState((prevState) =>({
        typeSelect: value
        }))
     }
     handleError(){
         if((this.state.MinAtk!=='' && this.state.MaxAtk!=='') || (this.state.MinDef!=='' && this.state.MaxDef!=='') || (this.state.MinLvl!=='' && this.state.MaxLvl!=='') )
         {
             alert("Due to the API this website is built off of, you cannot search for both less then and greater than for the level, attack or defense values. Please choose either less then or greater then for attack, defense, and level")
             console.log(this.state)
             return false
         }
         return true
     }
     handleNameChange(value){
        this.setState((prevState) =>({
        Name: value
        }))
     }
     handleDescChange(value){
        this.setState((prevState) =>({
        Desc: value
        }))
     }
    handleEffectChange(value) {
        this.setState((prevState) =>({
        Effect: value
        }))
    }
    handleSummonTypeChange(value) {
        
        this.setState((prevState) =>({
        SummonType: value
    }))
    }
    handleMonsterRaceChange(value) {
            
        this.setState((prevState) =>({
        MonsterRace: value
    }))
    }
    handleAbilityChange(value) {
        
        this.setState((prevState) =>({
        Ability: value
    }))
    }
    handleAttributeChange(value) {
        
        this.setState((prevState) =>({
        Attribute: value
    }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        if(this.handleError()){
            this.props.setURL(this.generateURL())
            console.log(this.generateURL())
        }  
    }
    generateURL(){
        var baseURL='https://db.ygoprodeck.com/api/v7/cardinfo.php?';
        if(this.state.Name!==''){
            baseURL+='name='+this.state.Name+'&'
        }
        if(this.state.Desc!==''){
            baseURL+='desc='+this.state.Desc+'&'
        }
        if(this.state.typeSelect==='Monster' & this.state.Ability===''){
            baseURL+='type=Normal Monster,Normal Tuner Monster,Effect Monster,Tuner Monster,Flip Monster,'; 
            baseURL+='Flip Effect Monster,Flip Tuner Effect Monster,Spirit Monster,Union Effect Monster,Gemini Monster,';
            baseURL+='Pendulum Effect Monster,Pendulum Normal Monster,Pendulum Tuner Effect Monster,Ritual Monster,';
            baseURL+='Ritual Effect Monster,Toon Monster,Fusion Monster,Synchro Monster,Synchro Tuner Monster,';
            baseURL+='Synchro Pendulum Effect Monster,XYZ Monster,XYZ Pendulum Effect Monster,Link Monster,';
            baseURL+='Pendulum Flip Effect Monster,Pendulum Effect Fusion Monster&';
        }
        if(this.state.typeSelect==='Monster' & this.state.Ability!==''){
            baseURL+='type=Normal Monster,Effect Monster,'; 
            baseURL+='Pendulum Effect Monster,Pendulum Normal Monster,Ritual Monster,';
            baseURL+='Ritual Effect Monster,Fusion Monster,Synchro Monster,';
            baseURL+='Synchro Pendulum Effect Monster,XYZ Monster,XYZ Pendulum Effect Monster,Link Monster,';
            baseURL+='Pendulum Effect Fusion Monster&';
        }
        if(this.state.Effect==='Effect'){
            baseURL+="has_effect=true&"
        }
        if(this.state.Effect==='Normal'){
            baseURL+="has_effect=false&"
        }
        if(this.state.SummonType==='Fusion'){
            baseURL+="type=Fusion Monster,Pendulum Effect Fusion Monster&"
        }
        if(this.state.SummonType==='Link'){
            baseURL+="type=Link Monster&"
        }
        if(this.state.SummonType==='Ritual'){
            baseURL+="type=Ritual Effect Monster,Ritual Monster&"
        }
        if(this.state.SummonType==='Pendulum'){
            baseURL+='type=Pendulum Effect Monster,Pendulum Normal Monster,Pendulum Tuner Effect Monster,'
            baseURL+='XYZ Pendulum Effect Monster,Pendulum Flip Effect Monster,Pendulum Effect Fusion Monster&'
        }
        if(this.state.SummonType==='Synchro'){
            baseURL+='type=Synchro Monster,Synchro Tuner Monster,Synchro Pendulum Effect Monster&'
        }
        if(this.state.SummonType==='XYZ'){
            baseURL+='type=XYZ Monster,XYZ Pendulum Effect Monster&'
        }
        if(this.state.MonsterRace!==''){
            baseURL+='race='+this.state.MonsterRace+'&'
        }
        if(this.state.Ability==='Gemini'){
            baseURL+='type=Gemini Monster&'
        }
        if(this.state.Ability==='Toon'){
            baseURL+='type=Toon Monster&'
        }
        if(this.state.Ability==='Tuner'){
            baseURL+='type=Normal Tuner Monster,Tuner Monster,Flip Tuner Effect Monster",Pendulum Tuner Effect Monster,Synchro Tuner Monster&'
        }
        if(this.state.Ability==='Spirit'){
            baseURL+='type=Spirit Monster&'
        }
        if(this.state.Ability==='Flip'){
            baseURL+='type=Flip Monster,Flip Effect Monster,Flip Tuner Effect Monster,Pendulum Flip Effect Monster&'
        }
        if(this.state.Ability==='Union'){
            baseURL+='type=Union Effect Monster&'
        }
        if(this.state.Attribute!==''){
            baseURL+='attribute='+this.state.Attribute+'&'
        }
        if(this.state.MinLvl!==''){
            baseURL+='level=gte'+this.state.MinLvl+'&'
        }
        if(this.state.MaxLvl!==''){
            baseURL+='level=lte'+this.state.MaxLvl+'&'
        }
        if(this.state.MinAtk!==''){
            baseURL+='atk=gte'+this.state.MinAtk+'&'
        }
        if(this.state.MaxAtk!==''){
            baseURL+='atk=lte'+this.state.MaxAtk+'&'
        }
        if(this.state.MinDef!==''){
            baseURL+='def=gte'+this.state.MinDef+'&'
        }
        if(this.state.MaxDef!==''){
            baseURL+='def=lte'+this.state.MaxDef+'&'
        }
        if(this.state.TrapRace!==''){
            baseURL+='race='+this.state.TrapRace+'&'
        }
        if(this.state.SpellRace!==''){
            baseURL+='race='+this.state.SpellRace+'&'
        }
        if(this.state.typeSelect==='Spell'){
            baseURL+='type=Spell Card&'
        }
        if(this.state.typeSelect==='Trap'){
            baseURL+='type=Trap Card&'
        }
        return encodeURI(baseURL)
    }

    renderParam(type){
        if(this.state.typeSelect==='Monster'){
            return(
                <Form onSubmit={this.handleSubmit}>
                <Badge pill bg="dark">Search Parameters</Badge>
                <Row className="mb-3">
                    <Form.Group  as={Col} controlId="formName">
                        <Form.Label style={{color: 'whitesmoke'}}>Card Name</Form.Label>
                        <Form.Control onChange={(e) => {this.handleNameChange(e.target.value)}} type="text" placeholder="Enter Card Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formDesc">
                        <Form.Label style={{color: 'whitesmoke'}}>Card Desc</Form.Label>
                        <Form.Control onChange={(e) => {this.handleDescChange(e.target.value)}} type="text" placeholder="Enter Card Desc" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formType">
                        <Form.Label style={{color: 'whitesmoke'}}>Card Type</Form.Label>
                        <Form.Select onChange={(e) => {this.handleTypeChange(e.target.value)}}>
                            <option value=""></option>
                            <option value="Monster">Monster</option>
                            <option value="Spell">Spell</option>
                            <option value="Trap">Trap</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formEffect">
                        <Form.Label style={{color: 'whitesmoke'}}>Effect</Form.Label>
                        <Form.Select onChange={(e) => {this.handleEffectChange(e.target.value)}}>
                            <option value=""></option>
                            <option value="Normal">Normal</option>
                            <option value="Effect">Effect</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formSummon">
                        <Form.Label style={{color: 'whitesmoke'}}>Summon Type</Form.Label>
                        <Form.Select onChange={(e) => {this.handleSummonTypeChange(e.target.value)}}>   
                            <option value=""></option>
                            <option value="Ritual">Ritual</option>
                            <option value="Fusion">Fusion</option>
                            <option value="Synchro">Synchro</option>
                            <option value="XYZ">XYZ</option>
                            <option value="Link">Link</option>
                            <option value="Pendulum">Pendulum</option>
                        </Form.Select> 
                    </Form.Group>
                </Row>


                <Row>
                <Form.Group as={Col} controlId="formMonsterRace">
                    <Form.Label style={{color: 'whitesmoke'}}>Monster Race</Form.Label>
                    <Form.Select onChange={(e) => {this.handleMonsterRaceChange(e.target.value)}}>
                        <option value=""></option>
                        <option value="Aqua">Aqua</option>
                        <option value="Beast">Beast</option>
                        <option value="Beast-Warrior">Beast-Warrior</option>
                        <option value="Cyberse">Cyberse</option>
                        <option value="Dinosaur">Dinosaur</option>
                        <option value="Divine-Beast">Divine-Beast</option>
                        <option value="Dragon">Dragon</option>
                        <option value="Fairy">Fairy</option>
                        <option value="Fiend">Fiend</option>
                        <option value="Fish">Fish</option>
                        <option value="Machine">Machine</option>
                        <option value="Plant">Plant</option>
                        <option value="Psychic">Psychic</option>
                        <option value="Pyro">Pyro</option>
                        <option value="Reptile">Reptile</option>
                        <option value="Rock">Rock</option>
                        <option value="Sea Monster">Sea Monster</option>
                        <option value="Spellcaster">Spellcaster</option>
                        <option value="Thunder">Thunder</option>
                        <option value="Warrior">Warrior</option>
                        <option value="Winged Beast">Spellcaster</option>
                        <option value="Wyrm">Wyrm</option>
                        <option value="Zombie">Zombie</option>
                    </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group as={Col} controlId="formAbility">
               <Form.Label style={{color: 'whitesmoke'}}>Ability</Form.Label>
                    <Form.Select onChange={(e) => {this.handleAbilityChange(e.target.value)}}>
                        <option value=""></option>    
                        <option value="Gemini">Gemini</option>
                        <option value="Spirit">Spirit</option>
                        <option value="Toon">Toon</option>
                        <option value="Tuner">Tuner</option>
                        <option value="Union">Union</option>
                        <option value="Flip">Flip</option>
                    </Form.Select>
                </Form.Group>
            <Row>
                <Form.Group as={Col} controlId="formAttribute">
                <Form.Label style={{color: 'whitesmoke'}}>Attribute</Form.Label>
                        <Form.Select onChange={(e) => {this.handleAttributeChange(e.target.value)}}>
                            <option value=""></option>
                            <option value="Dark">Dark</option>
                            <option value="Divine">Divine</option>
                            <option value="Earth">Earth</option>
                            <option value="Fire">Fire</option>
                            <option value="Light">Light</option>
                            <option value="Water">Water</option>
                            <option value="Wind">Wind</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label style={{color: 'whitesmoke'}}>
                                Level
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <FormControl onChange={(e) => {this.handleMinLvlChange(e.target.value)}} id="minLvl" placeholder="Min" />
                                <InputGroup.Text>{"<="}</InputGroup.Text>
                                <FormControl onChange={(e) => {this.handleMinLvlChange(e.target.value)}} id="maxLvl" placeholder="Max" />
                            </InputGroup>
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Label style={{color: 'whitesmoke'}}>
                            Attack Value
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <FormControl onChange={(e) => {this.handleMinAtkChange(e.target.value)}} id="minAtk" placeholder="Min" />
                            <InputGroup.Text>{"<="}</InputGroup.Text>
                            <FormControl onChange={(e) => {this.handleMaxAtkChange(e.target.value)}} id="maxAtk" placeholder="Max" />
                        </InputGroup>
                    </Col>
                    <Col>
                        <Form.Label style={{color: 'whitesmoke'}}>
                            Defense Value
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <FormControl onChange={(e) => {this.handleMinDefChange(e.target.value)}} id="minDef" placeholder="Min" />
                            <InputGroup.Text>{"<="}</InputGroup.Text>
                            <FormControl onChange={(e) => {this.handleMinDefChange(e.target.value)}} id="maxDef" placeholder="Max" />
                        </InputGroup>
                    </Col>
                    
                </Row>

                <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
                    Submit
                </Button>
            </Form>
            )
            }
            if(this.state.typeSelect==='Spell'){
                return(
                        <Form onSubmit={this.handleSubmit}>
                        <Badge pill bg="dark">Search Parameters</Badge>
                        <Row className="mb-3">
                            <Form.Group  as={Col} controlId="formName">
                                <Form.Label style={{color: 'whitesmoke'}}>Card Name</Form.Label>
                                <Form.Control onChange={(e) => {this.handleNameChange(e.target.value)}} type="text" placeholder="Enter Card Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formDesc">
                                <Form.Label style={{color: 'whitesmoke'}}>Card Desc</Form.Label>
                                <Form.Control onChange={(e) => {this.handleDescChange(e.target.value)}} type="text" placeholder="Enter Card Desc" />
                            </Form.Group>
                        </Row>
        
                        <Row>
                            <Form.Group as={Col} controlId="formType">
                                <Form.Label style={{color: 'whitesmoke'}}>Card Type</Form.Label>
                                <Form.Select onChange={(e) => {this.handleTypeChange(e.target.value)}}>
                                    <option value=""></option>
                                    <option value="Monster">Monster</option>
                                    <option value="Spell">Spell</option>
                                    <option value="Trap">Trap</option>
                                </Form.Select>
                                </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formSpellRace">
                    <Form.Label style={{color: 'whitesmoke'}}>Spell Type</Form.Label>
                        <Form.Select onChange={(e) => {this.handleSpellRaceChange(e.target.value)}}>
                            <option value=""></option>
                            <option value="Normal">Normal</option>
                            <option value="Continuous">Continuous</option>
                            <option value="Equip">Equip</option>
                            <option value="Field">Field</option>
                            <option value="Quick-Play">Link</option>
                            <option value="Ritual">Ritual</option>
                        </Form.Select>
                       
                    </Form.Group>
                    <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
                            Submit
                    </Button>
                   
                </Form>
                )
            }
                if(this.state.typeSelect==='Trap'){
                    return(
                            <Form onSubmit={this.handleSubmit}>
                            <Badge pill bg="dark">Search Parameters</Badge>
                            <Row className="mb-3">
                                <Form.Group  as={Col} controlId="formName">
                                    <Form.Label style={{color: 'whitesmoke'}}>Card Name</Form.Label>
                                    <Form.Control onChange={(e) => {this.handleNameChange(e.target.value)}} type="text" placeholder="Enter Card Name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formDesc">
                                    <Form.Label style={{color: 'whitesmoke'}}>Card Desc</Form.Label>
                                    <Form.Control onChange={(e) => {this.handleDescChange(e.target.value)}} type="text" placeholder="Enter Card Desc" />
                                </Form.Group>
                            </Row>
            
                            <Row>
                                <Form.Group as={Col} controlId="formType">
                                    <Form.Label style={{color: 'whitesmoke'}}>Card Type</Form.Label>
                                    <Form.Select onChange={(e) => {this.handleTypeChange(e.target.value)}}>
                                        <option value=""></option>
                                        <option value="Monster">Monster</option>
                                        <option value="Spell">Spell</option>
                                        <option value="Trap">Trap</option>
                                    </Form.Select>
                                    </Form.Group>
                            </Row>
                            <Form.Group as={Col} controlId="formTrapRace">
               <Form.Label style={{color: 'whitesmoke'}}>Trap Type</Form.Label>
                    <Form.Select onChange={(e) => {this.handleTrapRaceChange(e.target.value)}}>
                        <option value=""></option>
                        <option value="Normal">Normal</option>
                        <option value="Continuous">Continuous</option>
                        <option value="Counter">Counter</option>
                    </Form.Select>
                    <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
                        Submit
                    </Button>
                </Form.Group>

                    </Form>
                    )}
                    //Render this if card type isn't chosen
                    if(this.state.typeSelect===''){
                        return(
                            <Form onSubmit={this.handleSubmit}>
                            <Badge pill bg="dark">Search Parameters</Badge>
                            <Row className="mb-3">
                                <Form.Group  as={Col} controlId="formName">
                                    <Form.Label style={{color: 'whitesmoke'}}>Card Name</Form.Label>
                                    <Form.Control onChange={(e) => {this.handleNameChange(e.target.value)}} type="text" placeholder="Enter Card Name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formDesc">
                                    <Form.Label style={{color: 'whitesmoke'}}>Card Desc</Form.Label>
                                    <Form.Control onChange={(e) => {this.handleDescChange(e.target.value)}} type="text" placeholder="Enter Card Name" />
                                </Form.Group>
                            </Row>
            
                            <Row>
                                <Form.Group as={Col} controlId="formType">
                                    <Form.Label style={{color: 'whitesmoke'}}>Card Type</Form.Label>
                                    <Form.Select onChange={(e) => {this.handleTypeChange(e.target.value)}}>
                                        <option value=""></option>
                                        <option value="Monster">Monster</option>
                                        <option value="Spell">Spell</option>
                                        <option value="Trap">Trap</option>
                                    </Form.Select>
                                    </Form.Group>
                        </Row>
                    <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
                        Submit
                    </Button>
                    </Form>
                        )}
    }

    render() { 
        return (
            this.renderParam(this.state.typeSelect)
        );
    }
}
 
export default SearchForm;