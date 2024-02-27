import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import {Card, CardHeader, TextField, CardContent, Divider, Button, CardActions} from '@mui/material'

import { login } from '../../services/authService'

function LoginCard() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = async () => {
    const result = await login({email, password})
    console.log('coñoq')
  }
 
  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Login" />
      <CardContent>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          fullWidth={true}
        />

      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Link to='/signup'>
        <Button>Register</Button>
       </Link>
          <Button onClick={onLogin} color="success">
            Login
          </Button>
 
      </CardActions>
    </Card>
  )
}

export default LoginCard