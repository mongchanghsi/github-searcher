import React, { useState } from 'react';
import { Typography, Grid, List } from '@material-ui/core';

import Repos from './Repos';
import Orgs from './Orgs';

import Scroll from './Scroll';
import Searcher from './Searcher'

// clementmihailescu
// main component of this file
function Main(props){
  const [repo, setRepo] = useState([])
  const [orgs, setOrgs] = useState([])
  const [repoNotFound, setRepoNotFound] = useState(false)
  const [orgsNotFound, setOrgsNotFound] = useState(false)

  return (
    <div>
      <Scroll showParams={250}/>
      <Searcher setRepo={setRepo} setOrgs={setOrgs} setRepoNotFound={setRepoNotFound} setOrgsNotFound={setOrgsNotFound}/>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Grid container direction='column' alignItems="center">
            <Typography variant='h5'> Repository </Typography>
              { repoNotFound ? <Typography variant='h6'> User has no repo </Typography> : null }
            <List component="nav" aria-label="secondary mailbox folders">
              { repo.map((repo, index)=><Repos key={index} repo={repo}/>)}
            </List>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container direction='column' alignItems="center">
            <Typography variant='h5'> Organisation </Typography>
            <List component="nav" aria-label="secondary mailbox folders">
              { orgsNotFound ? <Typography variant='h6'> User has no organisations </Typography> : null }
              { orgs.map((orgs, index)=><Orgs key={index} orgs={orgs}/>)}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Main;
