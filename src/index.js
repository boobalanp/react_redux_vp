import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import Courses from './components/course/CoursesPage';
import Griddle,{RowDefinition,ColumnDefinition} from 'griddle-react';
import configureStore from './store/configureStore';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDom.render(
	  <Provider store={store}>
	      <Router history={browserHistory} routes={routes} />
	  </Provider>,
	  document.getElementById("app")
);
