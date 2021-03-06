import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getALL} from '../actions';
import {Link} from 'react-router-dom';


class TodoList extends Component {
    componentDidMount(){
        this.props.getALL();
    }

    renderList(){
        return this.props.todos.map( (item,index)  => {
            return (
            <li className="collection-item" key={index} style={item.complete ? {textDecoration:'line-through', fontSize: '16px'} : {textDecoration:'none', fontSize: '18px'}}> 
                <Link to={`/item/${item._id}`}>{item.title}</Link>
            </li>
            )
        })
    }

    render(){
        return(
            <div>
                <h1 className="center-align">To Do List 2.0</h1>
                <Link className='btn btn-floating pulse' to='/add-item'>+</Link> 
                <ul className="collection">
                    {this.renderList()}
                </ul>
            </div>

        )
    }
}

function mapStateToProps(state){
    return{
        todos: state.todo.all
    }
}

export default connect(mapStateToProps, {getALL}) (TodoList) ;
