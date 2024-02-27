import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {Card, CardHeader, TextField, CardContent, Divider, Button, CardActions} from '@mui/material'

function SignUpCard() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 
  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Sign Up" />
      <CardContent>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Name"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Username"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
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
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Repeat Password"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />

      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end'}}>
      <div> <input id="checkbox" type="checkbox"/> <label htmlFor="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label></div>
      <div> <input id="checkbox" type="checkbox"/> <label htmlFor="checkbox"> I am over 18 years old</label></div>
        <Button>Register</Button>
      </CardActions>
    </Card>
  )
}

export default SignUpCard