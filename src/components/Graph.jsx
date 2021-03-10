import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HealthData from './HealthData';
import SpiderData from './SpiderData';
import TrendData from './TrendData';

const useStyles = makeStyles(() => ({
  form: {
    marginTop: 100,
  },
}));

const Graph = props => {
  const { type, date } = props;
  const healthScoreState = useSelector(state => state);
  const [selectedDate, setSelectedDate] = useState(date);
  const classes = useStyles();

  const selectedHealthScore = healthScoreState.list.find(hss => hss.date === selectedDate)[type];
  const overallHealthScores = healthScoreState.list.filter(hss => hss.date <= selectedDate);
  overallHealthScores.splice(0, overallHealthScores.length - 30);
  const trendScore = [];
  const trendDate = [];
  overallHealthScores.forEach(element => trendScore.push(element[type].overall_score));
  overallHealthScores.forEach(element => trendDate.push(new Date(element.date).toLocaleString('en-us', { month: 'short', day: '2-digit', timeZone: 'Pacific/Chatham' })));

  return (
    <Grid
      container
      alignItems='center'
      justify='center'
    >
      <Grid item xs={10}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container alignItems='flex-start' justify='flex-end' direction='row'>
              <FormControl variant='outlined' className={classes.form}>
                <InputLabel>Date</InputLabel>
                <Select
                  value={selectedDate}
                  onChange={e => {
                    setSelectedDate(e.target.value);
                  }}
                  label='Selected'
                  className={classes.dateBtn}
                >
                  {
          // eslint-disable-next-line react/no-array-index-key
          healthScoreState.list.map((hss, index) => <MenuItem key={`tax-mi-${index}`} value={hss.date}>{hss.date}</MenuItem>)
          }
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
      {selectedHealthScore && (
      <Grid item xs={10}>
        <Grid container>
          <HealthData
            label={selectedHealthScore.label}
            // eslint-disable-next-line no-nested-ternary
            color={selectedHealthScore.overall_score >= 70
              ? '#93c47d' : (selectedHealthScore.overall_score < 30 ? '#F44336' : '#DEFD42')}
            value={selectedHealthScore.overall_score}
            date={selectedHealthScore.date}
            xs={6}
          />
          <SpiderData
            label={selectedHealthScore.label}
            date={selectedHealthScore.date}
            factors={selectedHealthScore.contributing_factors}
          />

        </Grid>
      </Grid>
      )}
      {selectedHealthScore && (
      <Grid item xs={10}>
        <TrendData
          label={selectedHealthScore.label}
          date={selectedHealthScore.date}
          trend={trendScore}
          days={trendDate}
        />
      </Grid>
      )}
    </Grid>
  );
};

Graph.propTypes = {
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Graph;
