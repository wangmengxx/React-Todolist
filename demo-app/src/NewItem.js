import React, {Component} from 'react';

class NewItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputContent: ''
        }
    }
    onInputChange = (event) =>{
        this.setState({
            inputContent: event.target.value
        })
    }
    onAddBtnclick = () => {
        this.props.addItem(this.state.inputContent)
        this.setState({
            inputContent: ''
        })
    }
    render(){
        return(
            <div>
                <input value = {this.state.inputContent} onChange={this.onInputChange}/>
                <button onClick={this.onAddBtnclick}>Add</button>
            </div>
        )
    }
}
export default NewItem;