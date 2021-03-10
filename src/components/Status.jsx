import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, CircularProgress } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  text: {
    marginTop: 40,
    color: theme.palette.primary.dark,
  },
  icon: {
    color: theme.palette.primary.dark,
    fontSize: 100,
  },
  cp: {
    color: theme.palette.primary.dark,
  },
}));

const Status = props => {
  const { message, loading, error } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      direction='column'
      style={{ minHeight: '100vh' }}
    >
      <Grid
        item
        xs={12}
      >
        <Grid
          container
          alignItems='center'
          justify='center'
        >
          {loading && (
          <Grid
            item
            xs={12}
          >
            <Grid
              container
              alignItems='center'
              justify='center'
            >
              <CircularProgress size={100} className={classes.cp} />
            </Grid>
          </Grid>
          )}
          {error && (
          <Grid
            item
            xs={12}
          >
            <Grid
              container
              alignItems='center'
              justify='center'
            >
              <ErrorOutlineIcon className={classes.icon} />
            </Grid>
          </Grid>
          )}
          <Grid
            item
            xs={12}
          >
            <Grid
              container
              alignItems='center'
              justify='center'
            >
              <Typography variant='h5' className={classes.text}>
                {message}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
};

Status.propTypes = {
  message: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  loading: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  error: PropTypes.bool,
};

export default Status;
