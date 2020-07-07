import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
  scrollButton: {
    zIndex: 2,
    position: 'fixed',
    bottom: '5vh',
    backgroundColor: '#90caf9',
    color: '#FFF',
    '&:hover': {
      transition: '0.5s',
      backgroundColor: '#648dae',
    },
    right: '5%'
  }
}))

export const ScrollButton = props => {
    const classes = useStyles();
    return (
      <IconButton onClick={props.onClick} className={classes.scrollButton} aria-label="to top" component="span">
        <ExpandLessIcon/>
      </IconButton>
    )
}
