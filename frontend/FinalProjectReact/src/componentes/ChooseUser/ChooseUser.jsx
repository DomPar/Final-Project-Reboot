import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import {Card, CardHeader, TextField, CardContent, Divider, Button, CardActions} from '@mui/material'
import './ChooseUser.css'
import { login } from '../../services/authService'
import FormControlLabel from '@mui/material/FormControlLabel';

function ChooseUser() {
  
  const onLogin = async () => {
    const { result } = await login({email, password})
    localStorage.setItem('token', result.token)
    navigate('/app')
  }
 
  return (
    <Card id="chooseuser-card" sx={{ maxWidth: '500px' }}>
      <CardHeader
       id="text-login"
       sx={{
        display: 'flex!important',
        justifyContent: 'center!important',
        alignItems: 'center!important',
       }}
       avatar={<img
                src=".././Images/LogoPetFriends.png" 
                alt="Logo" 
                style={{ 
                  width: '100px', 
                  height: '100px',
                  marginLeft: '136px',               
                }} />}
      />
      <CardContent>
         <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to= '/signup'>
        <Button onClick={onLogin} color="success">User</Button> 
        </Link>
        <span id="or">or</span>
        <Link to= '/signups'>
        <Button onClick={onLogin} color="success">Shelter</Button> 
        </Link>
      </CardActions>
      </CardContent>
     
    </Card>
  )
}

export default ChooseUser