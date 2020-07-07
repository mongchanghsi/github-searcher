import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography } from '@material-ui/core';
import { SearchButton } from './buttons/SearchButton';

const useStyles = makeStyles((theme) => ({
  searchRoot: {
    padding: '20px 0px 20px 0px',
  },
  formStyle: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textCenter: {
    color: 'red'
  }
}));

function Searcher(props){
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [validateError, setValidateError] = useState(false);
  const [noUserExist, setNoUserExist] = useState(false);
  let userExist = true;

  // validate the input function
  function validate(username){
    if (username.length <= 0){
      console.log('FROM validate(): Input is not recognized')
      setValidateError(true)
      props.setRepo([])
      props.setOrgs([])
      return false
    }
    else {
      console.log('FROM validate(): Input is recognized')
      setValidateError(false)
      return true
    }
  }

  // Check whether is the User exist in github
  async function checkUserExist(){
    console.log('FROM checkUserExist(): started function')
    await fetch(`https://api.github.com/users/${username}`)
      .then(res => {
        if (!res.ok){
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then(json => {
          console.log('FROM checkUserExist(): User Exist')
          userExist = true
          setNoUserExist(false)
        }
      )
      .catch((error) => {
        console.log('FROM checkUserExist(): User Not Found')
        userExist = false
        setNoUserExist(true)
        props.setRepo([])
        props.setOrgs([])
        props.setOrgsNotFound(false)
        props.setRepoNotFound(false)
      })
  }

  // Fetch Repo
  async function fetchRepo(){
    console.log('FROM fetchRepo(): Starting Fetch for Repos')
    await fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => {
        if (!res.ok){
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then(json => {
        if (json.length !== 0){
          console.log('FROM fetchRepo(): Repo found')
          props.setRepoNotFound(false)
        } else {
          console.log('FROM fetchRepo(): No Repo found')
          props.setRepoNotFound(true)
        }
        props.setRepo(json)
      })
      .catch((error)=>{
        console.log('FROM fetchRepo(): Error in fetching Repo')
      })
  }

  // Fetch Orgs
  async function fetchOrgs(){
    console.log('FROM fetchOrgs(): Starting Fetch for Orgs')
    await fetch(`https://api.github.com/users/${username}/orgs`)
      .then(res => {
        if (!res.ok){
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then(json => {
        if (json.length !== 0){
          console.log('FROM fetchOrgs(): Orgs found')
          props.setOrgsNotFound(false)
        } else {
          console.log('FROM fetchOrgs(): No Orgs found')
          props.setOrgsNotFound(true)
        }
        props.setOrgs(json)
      })
      .catch((error)=>{
        console.log('FROM fetchOrgs(): Error in fetching Orgs')
      })
  }

  async function processFetch(){
    let checkingUserExist = await checkUserExist()
    console.log(`Finished checkingUserExist: ${userExist}`)
    if (userExist){
      console.log('User Exist: Fetching Repo and Orgs')
      let fetchingRepo = await fetchRepo();
      let fetchingOrgs = await fetchOrgs();
    } else {
      console.log('User not found, exiting searching function')
      return;
    }
    console.log('FROM processFetch(): Process Exited')
  }

  async function handleSubmit(e){
    console.log('Search Button has been clicked')
    e.preventDefault();

    // Validate does input valid
    if (!validate(username)) return;
    console.log('Input has been validated, using username to fetch repo & orgs')

    let processingFetch = await processFetch();
    console.log('End of Search')
  }

  return (
    <div className={classes.searchRoot}>
      <form className={classes.formStyle} noValidate autoComplete="off">
        <TextField data-testid='inputfield' label="Username" onChange={e => setUsername(e.target.value)} value={username}/>
        <SearchButton onClick={handleSubmit} />
        <br/>
        { noUserExist ? <Typography className={classes.textCenter} variant='caption'> User does not exist </Typography> : null }
        { validateError ? <Typography className={classes.textCenter} variant='caption'> Missing Username </Typography> : null }
      </form>
    </div>
  )
}

export default Searcher;
