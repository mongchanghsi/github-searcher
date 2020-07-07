import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Typography, Card, CardActions, Button, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 20px 0px 20px',
    [theme.breakpoints.up('xs')]: {
      width: "90%",
    }
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Repos = props => {
  const classes = useStyles();
  return (
    <ListItem>
      <Card className={classes.root}>
        <Typography variant='h5'>
          {props.repo.name}
        </Typography>
        <Typography variant="body2" component="p">
          {props.repo.description}
        </Typography>
        <CardActions>
          <Button
            size="small"
            className={classes.buttonStyle}
            startIcon={<GitHubIcon/>}>
            <Link
              underline='none'
              color='inherit'
              href={props.repo.html_url}
              target='_blank'>
              Go to {props.repo.name}'s repo
            </Link>
          </Button>
        </CardActions>
      </Card>
    </ListItem>
  )
}

export default Repos;
