import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import { AlertTitle, Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import HealthData from './HealthData';

const useStyles = makeStyles(() => ({
  form: {
    marginTop: 100,
  },
  dateBtn: {
    paddingLeft: 10,
    paddingRight: 10,
  },
}));

const Scores = () => {
  const healthScoreState = useSelector(state => state);
  const [selectedDate, setSelectedDate] = useState('');
  const classes = useStyles();

  const selectedHealthScore = healthScoreState.list.find(hss => hss.date === selectedDate);

  return (
    <Grid
      container
      alignItems='center'
      justify='center'
    >
      <Grid item xs={10}>
        <Grid container>
          <Grid item xs={12}>
            <FormControl variant='outlined' className={classes.form}>
              <InputLabel>Date</InputLabel>
              <Select
                value={selectedDate}
                onChange={e => {
                  setSelectedDate(e.target.value);
                }}
                label='Selected Taxonomy'
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

      {selectedHealthScore && (
      <Grid item xs={10}>
        <Grid container>
          <HealthData
            label={selectedHealthScore.food.label}
            // eslint-disable-next-line no-nested-ternary
            color={selectedHealthScore.food.overall_score >= 70
              ? '#40E586' : (selectedHealthScore.food.overall_score < 30 ? '#E54D40' : '#D4E540')}
            value={selectedHealthScore.food.overall_score}
            date={selectedHealthScore.date}
            xs={4}
          />

          <HealthData
            label={selectedHealthScore.sleep.label}
            // eslint-disable-next-line no-nested-ternary
            color={selectedHealthScore.sleep.overall_score >= 70
              ? '#40E586' : (selectedHealthScore.sleep.overall_score < 30 ? '#E54D40' : '#D4E540')}
            value={selectedHealthScore.sleep.overall_score}
            date={selectedHealthScore.date}
            xs={4}
          />

          <HealthData
            label={selectedHealthScore.movement.label}
            // color='#F44336'
            // eslint-disable-next-line no-nested-ternary
            color={selectedHealthScore.movement.overall_score >= 70
              ? '#40E586' : (selectedHealthScore.movement.overall_score < 30 ? '#E54D40' : '#D4E540')}
            value={selectedHealthScore.movement.overall_score}
            date={selectedHealthScore.date}
            xs={4}
          />

        </Grid>
      </Grid>
      )}
      {selectedHealthScore && (
      <Grid item xs={10}>
        <Alert variant='filled' severity='warning'>
          <AlertTitle>Recommendation Section: </AlertTitle>
          {
        // eslint-disable-next-line no-nested-ternary
        selectedHealthScore.movement.overall_score < selectedHealthScore.sleep.overall_score
          // eslint-disable-next-line no-nested-ternary
          ? selectedHealthScore.movement.overall_score < selectedHealthScore.food.overall_score
            ? 'Pleaser remember to move more throughout your day, your movement score is the lowest' : selectedHealthScore.food.overall_score < selectedHealthScore.sleep.overall_score
              ? 'Please remember to eat more during the day, your food score is the lowest' : 'Please remember to sleep for longer, your sleep score is the lowest'
          : selectedHealthScore.sleep.overall_score < selectedHealthScore.food.overall_score
            ? 'Please remember to sleep for longer, your sleep score is the lowest' : 'Please remember to eat more during the day, your food score is the lowest'
}
        </Alert>
      </Grid>
      )}
    </Grid>
  );
};

export default Scores;
