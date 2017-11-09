import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingle, toggleComplete, deleteItem} from '../actions';



class SingleItem extends Component {
    componentDidMount(){
        this.props.getSingle(this.props.match.params.id);
    }
    toggleComplete(){
        console.log('Toggle Complete:', this.props.single._id);
        this.props.toggleComplete(this.props.single._id);
    }

    deleteItem(){
        console.log('Delete Item: ', this.props.single._id)
        this.props.deleteItem(this.props.single._id)
        this.props.history.push('/')
    }

    render(){

        const {single} = this.props;

        if(!single){
            return (
                <div>Loading...</div>
            )
        }

        console.log(this.props)
        return(
            <div>
                <h3>{this.props.single.title}</h3>
                <p>Details: {single.details}</p>
                <p>Created By: {single.userId}</p>
                <p>Status: {single.complete ? 'Item Complete' : 'Incomplete'}</p>
                <button className={`btn ${single.complete ? 'red' : 'green'}`} onClick={() => this.toggleComplete()}>{single.complete ? 'Restore' : 'Complete'}</button>
                <button className="btn red" onClick={() => this.deleteItem()}>Delete Item</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        single: state.todo.single
    }
}

export default connect(mapStateToProps, {getSingle, toggleComplete, deleteItem})(SingleItem);