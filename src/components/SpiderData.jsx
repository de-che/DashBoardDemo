import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import Chart from 'react-apexcharts';

const SpiderData = props => {
  const { label, date, factors } = props;

  const labelType = label.split(' ')[0].toLowerCase();

  return (
    <Grid
      item
      xs={6}
    >
      <Link to={`/graph/${labelType}/${date}`} style={{ textDecoration: 'none' }}>
        <Grid
          container
          alignItems='center'
          justify='center'
        >
          <Grid item xs={12}>
            <Grid
              container
              alignItems='center'
              justify='center'
            >
              <Typography variant='h5'>
                Score Breakdown
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Grid
              container
              alignItems='center'
              justify='center'
            >
              <Chart
                options={{
                  fill: {
                    opacity: 0.5,
                    colors: ['#f64000'],
                  },
                  chart: {
                    toolbar: {
                      show: false,
                      tools: {
                        download: false,
                      },
                    },
                  },
                  labels: Object.keys(factors),
                }}
                series={[{
                  name: 'Radar Series 1',
                  data: Object.values(factors) }]}
                type='radar'
                height='300'
              />
            </Grid>
          </Grid>

        </Grid>
      </Link>
    </Grid>
  );
};

SpiderData.propTypes = {
  label: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  factors: PropTypes.array.isRequired,
};

export default SpiderData;
