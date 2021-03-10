import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Status from './components/Status';
import { getHealthData } from './redux/healthDataActions';
import Scores from './components/Scores';
import Graph from './components/Graph';

const App = () => {
  const dispatch = useDispatch();
  const healthScoreState = useSelector(state => state);

  if (healthScoreState.didInvalidate) {
    return <Status message='Error: failed loading data' error />;
  }

  if (healthScoreState.isFetching) {
    return <Status message='Please wait, loading data...' loading />;
  }

  if (healthScoreState.list.length === 0) {
    getHealthData(dispatch);
    return <Status message='Please wait, loading data...' loading />;
  }

  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <Scores />
        </Route>

        <Route
          exact
          path='/graph/:type/:date'
          component={({ match }) => (
            <Graph
              type={match.params.type}
              date={match.params.date}
            />
          )}
        />

      </Switch>
    </Router>
  );
};

export default App;
