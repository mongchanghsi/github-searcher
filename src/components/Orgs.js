import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Typography, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 20px 20px 20px',
    width: 600,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Orgs = props => {
  const classes = useStyles();
  return (
    <ListItem>
      <Card className={classes.root}>
        <Typography variant='h5'>
          {props.orgs.name}
        </Typography>
        <Typography variant="body2" component="p">
          {props.orgs.description}
        </Typography>
      </Card>
    </ListItem>
  )
}

export default Orgs;
