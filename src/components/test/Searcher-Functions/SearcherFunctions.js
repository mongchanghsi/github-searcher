// Validate input before processing the input for fetch
export function validate(username){
  if (username.length <= 0){
    console.log('FROM validate(): Input is not recognized')
    return false
  }
  else {
    console.log('FROM validate(): Input is recognized')
    return true
  }
}

// API fetch to Github API ensure that the user exist
export async function checkUserExist(username){
  let userExist = false
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
      }
    )
    .catch((error) => {
      console.log('FROM checkUserExist(): User Not Found')
      userExist = false
    })
    return userExist
}
