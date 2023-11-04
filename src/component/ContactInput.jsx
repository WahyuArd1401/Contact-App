import React from "react";

class ContactInput extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      name: '',
      tag:''
    }

    this.onNameChangeHandler = this.onNameChangeHandler.bind(this)
    this.onTagChangeHandler = this.onTagChangeHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)

  }

  onNameChangeHandler(event){
    this.setState(()=>{
      return {
        name : event.target.value
      }
    })
  }
  
  onTagChangeHandler(event){
    this.setState(()=>{
      return {
        tag : event.target.value
      }
    })
  }

  onSubmitEventHandler(event){
    event.preventDefault()
    this.props.addContact(this.state)
  }

  render(){
    return(
      <form className="contact-input">
        <input type="text" placeholder="Masukkan Nama" onChange={this.onNameChangeHandler}/>
        <input type="text" placeholder="Masukkan Tag" onChange={this.onTagChangeHandler}/>
        <button type="submit" onClick={this.onSubmitEventHandler}>Submit</button>
      </form>
    )
  }
}

export default ContactInput