import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import {Card, CardHeader, TextField, CardContent, Divider, Button, CardActions} from '@mui/material'
import './LoginForm.css'
import { login } from '../../services/authService'
import FormControlLabel from '@mui/material/FormControlLabel';

function LoginCard() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = async () => {
    const { result } = await login({email, password})
    localStorage.setItem('token', result)
    navigate('/app')
  }
 
  return (
    <Card id="login-card" sx={{ maxWidth: '500px' }}>
      <CardHeader id="text-login" title="Welcome to PetFriends!"/>
      <CardContent>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="standard"
          fullWidth={true}
          sx={{ marginBottom: '20px', bgcolor: 'whitesmoke', borderRadius: 6 }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="standard"
          fullWidth={true}
          sx={{ bgcolor: 'whitesmoke', borderRadius: 6 }}
        />
        

      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={onLogin} color="success">
            Log In
          </Button> 
          <br></br>
      <Link to='/signup'>
        <Button>Don't have an account? Sign Up </Button>
      </Link>
          
 
      </CardActions>
    </Card>
  )
}

export default LoginCard