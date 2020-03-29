import React, {Component} from 'react';
import ListItem from "./ListItem";
import NewItem from "./NewItem"
import './App.css'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoList:[
                {id:'0', content:'React practice', done:true},
                {id:'1', content:'game time', done:false},
            ]
        }
    }
    addNewItem = (newItemContent) =>{
        const newList = [...this.state.todoList, {content:newItemContent, done:false}];
        this.setState({
            todoList: newList
        })
    }
    updateFinished (todoItem) {
		this.state.todoList.forEach( item => {
			if (item.id === todoItem.id) {
				item.done = todoItem.done;
			}
			
		});
		this.setState({
		});
    }
    updateTotal (todoItem) {
        var obj = [];
        
		this.state.todoList.forEach((item) => {
			if (item.id !== todoItem.id) {
				obj.push(item);
			}
		});
		this.setState({
			todoList: obj,
			
		});
	}
    render() {
        
        return (
            <div className="container">
                <ul>{ 
                   this.state.todoList.map((item, index) =>
                     <ListItem item = {item} finishedChange={this.updateFinished.bind(this)} 
                     totalChange={this.updateTotal.bind(this)} key={index}
                   	/>) 
                }
                </ul>
                  
                 <NewItem addItem={this.addNewItem}></NewItem> 
            </div>
        );
    }
}
export default TodoList;
    