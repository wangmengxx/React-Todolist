import React, {Component} from 'react';
import './ListItem.css';

class ListItem extends Component {
    
	constructor (props) {
		super(props);
        
		this.handleFinished = this.handleFinished.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	} 

	handleFinished () {
		var done = this.props.item.done;
        done = (done === false ? true : false);
		var obj = {
            id: this.props.item.id,
			content: this.props.item.content,
			done: done
		}
		
		this.props.finishedChange(obj);	
	}

	handleDelete () {
		this.props.totalChange(this.props.item);
	}

	render () {
		const item = this.props.item;

		const unfinish = {
			color: 'black',
		};

		const finish = {
			color: 'gray',
			textDecoration: 'line-through'
		}

		var itemStyle = item.done === false ? unfinish : finish;
		
		return (
			<li  key={item.id} style={itemStyle}>
				<span 
                    onClick={this.handleFinished} 
                    id={item.id}
					className="check-btn"
				></span>
				<span>{ item.content }</span>
				<span onClick={this.handleDelete} className="delete-btn">删除</span>
			</li>
		);
	}
}



export default ListItem;