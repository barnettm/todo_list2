import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import {Link, Route} from 'react-router-dom';

import AddItem from './add_item';
import TodoList from './todo_list';
import SingleItem from './single_item';

const App = () => (
    <div className="container">
       <Route exact path="/" component={TodoList} />
       <Route path='/add-item' component={AddItem} />
       <Route path='/item/:id' component={SingleItem} />
    </div>
);

export default App;