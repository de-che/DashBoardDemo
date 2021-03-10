import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import Chart from 'react-apexcharts';

const HealthData = props => {
  const { label, color, value, date, xs } = props;

  const labelType = label.split(' ')[0].toLowerCase();

  return (
    <Grid
      item
      xs={xs}
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
                {label}
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
                    colors: [color],
                  },
                  plotOptions: {
                    radialBar: {
                      dataLabels: {
                        name: {
                          show: false,
                        },
                        value: {
                          show: true,
                          fontSize: '34px',
                          formatter(val) {
                            return `${val}`;
                          },
                        },
                      },
                    },
                  },
                }}
                series={[value.toFixed(1)]}
                type='radialBar'
                width='380'
              />
            </Grid>
          </Grid>

        </Grid>
      </Link>
    </Grid>
  );
};

HealthData.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  xs: PropTypes.number.isRequired,
};

export default HealthData;
