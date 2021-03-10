import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import Chart from 'react-apexcharts';

const TrendData = props => {
  const {label,date,trend,days} = props;

  const labelType = label.split(' ')[0].toLowerCase();

  return (
    <Grid
      item
      xs={12}
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
                Past month trend
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
                    chart: {
                        toolbar: {
                            show: false,
                            tools: {
                                download:false
                            }
                        }
                    },
                    stroke: {
                        curve: 'smooth'
                      },
                    yaxis: {
                        labels: {
                          formatter: function (val) {
                            return val.toFixed(0);
                          },
                        }
                    },
                    xaxis: {
                        categories: days,
                      },
                      labels: {
                        formatter: function (value, days) {
                            return new Date(days) // The formatter function overrides format property
                          }, 
                      },
                }}
                series={[{
                    data: trend}]}
                type="line"
                height="300"
                width="800"
              />
            </Grid>
          </Grid>

        </Grid>
      </Link>
    </Grid>
  );
};

TrendData.propTypes = {
  label: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  trend: PropTypes.array.isRequired,
  days: PropTypes.string.isRequired
};

export default TrendData;
