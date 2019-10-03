import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Dashboard from '../Dashboard/Dashboard';
import Workouts from '../workouts/Workouts';
import appHistory from '../../../router/history';

function App() {
    return (
        <div className="App">
            <Router history={appHistory}>
                <Layout>
                    <Switch>
                        <Route path={'/dashboard'} render={() => <Dashboard />} />
                        <Route path={'/workouts'} render={() => <Workouts />} />
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
