import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    '& > *': {
      margin: theme.spacing(1),
    },
    backgroundColor: '#90caf9',
    color: '#FFF',
    '&:hover': {
      transition: '0.5s',
      backgroundColor: '#648dae',
      color: '#FFF'
    },
  },
  textCenter: {
    textAlign: 'center',
    color: 'red'
  }
}));

export const SearchButton = props => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      className={classes.buttonStyle}
      startIcon={<SearchIcon/>}
      onClick={props.onClick}
    >
    Search
    </Button>
  )
}
