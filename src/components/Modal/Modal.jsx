import React, { Component } from "react";
import "./Modal.css"

class Modal extends Component{
    state = {
        visibility: false,
    }
    toggle = () =>{
        this.setState(prevState =>({
            visibility: !prevState.visibility,
        }))
    }

    
    render(){
        let {visibility} = this.state;
        return(
         
            <>
            <div className="parent">
            <button className="btn" onClick={this.toggle}>{visibility ? 'Скрити' : 'Відкрити'}</button>
           {visibility && <p className="modal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit id voluptatem obcaecati adipisci, vel delectus sequi blanditiis sit iure numquam ad alias neque labore quisquam? Sequi inventore rerum quos odit?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit id voluptatem obcaecati adipisci, vel delectus sequi blanditiis sit iure numquam ad alias neque labore quisquam? Sequi inventore rerum quos odit?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit id voluptatem obcaecati adipisci, vel delectus sequi blanditiis sit iure numquam ad alias neque labore quisquam? Sequi inventore rerum quos odit?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit id voluptatem obcaecati adipisci, vel delectus sequi blanditiis sit iure numquam ad alias neque labore quisquam? Sequi inventore rerum quos odit?</p>}
            </div>
            </>
        )
    }
}

export default Modal