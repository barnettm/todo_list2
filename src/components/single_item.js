import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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

    convertTime(){
        let time = parseInt(this.props.single.created);
        let convert = new Date(time);
        let formated = convert.toLocaleString();
        return formated;
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
                <p>Created On: {this.convertTime()}</p>
                <p>Status: {single.complete ? 'Item Complete' : 'Incomplete'}</p>
                <button className={`btn ${single.complete ? 'amber darken-3' : 'green'}`} onClick={() => this.toggleComplete()}>{single.complete ? 'Restore' : 'Complete'}</button>
                <button className="btn red" onClick={() => this.deleteItem()} style={{margin: '8px'}}>Delete Item</button>
                <div>
                    <Link className="btn purple darken-2" to='/'>Go Back</Link>
                </div>
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