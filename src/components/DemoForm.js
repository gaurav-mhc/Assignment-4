import React, { Component } from 'react'
import './DemoForm.css'
class DemoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '',
             beverage: '',
             option: '',
             checked: false
        }
    }
    handleUserChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    handleSelectChange = (event) => {
        this.setState({
            beverage: event.target.value
        })
    }
    handleOptionChange = (event) => {
        this.setState({
            option: event.target.value
        })
    }
    handleCheckboxChange = () => {
        this.setState({
            checked: !this.state.checked
        })
    }
    handleSubmit = (event) => {
        alert("Data Recorded")
        event.preventDefault()
        
    }
    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="element">
                    <label htmlFor = "username" style={{marginRight: 5}}>Username</label>
                    <input type ="text" id="username" value = {this.state.username} 
                    onChange = {this.handleUserChange}/>
                </div>
                <div className="element">
                    <label htmlFor = "comment" style = {{marginRight: 5}}>Comment</label>
                    <textarea id = "comment" value = {this.state.comment} 
                    onChange = {this.handleCommentChange}></textarea>
                </div>
                <div  className="element">
                    <label htmlFor = "beverage">Select a Beverage</label>
                    <select id="beverage" value = {this.state.beverage} onChange = {this.handleSelectChange}>
                        <option value = "Coke">Coke</option>
                        <option value = "Pepse">Pepsi</option>
                        <option value = "Coffee">Coffee</option>
                        <option value = "Tea">Tea</option>
                    </select>
                </div>
                <div  className="element">Select One Option: </div>
                <div  className="element">
                    <div>
                        <label><input type="radio"
                        value = "option1"
                        checked={this.state.option === "option1"}
                        onChange={this.handleOptionChange}
                        />
                        C++
                        </label>
                    </div>
                    <div>
                        <label><input type="radio"
                        value = "option2"
                        checked={this.state.option === "option2"}
                        onChange={this.handleOptionChange}
                        />
                        Python
                        </label>
                    </div>
                    <div>    
                        <label><input type="radio"
                        value = "option3"
                        checked={this.state.option === "option3"}
                        onChange={this.handleOptionChange}
                        />
                        Java
                        </label>
                    </div>
                    <div>    
                        <label><input type="radio"
                        value = "option4"
                        checked={this.state.option === "option4"}
                        onChange={this.handleOptionChange}
                        />
                        Javascript
                        </label>
                    </div>
                </div>
                <div  className="element">
                    <label>Want to recieve promotional email notifications?</label>
                    <input name ="email"
                    type = "checkbox"
                    checked = {this.state.checked}
                    onChange = {this.handleCheckboxChange} />
                </div>
                <button className = "element" type = "submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm