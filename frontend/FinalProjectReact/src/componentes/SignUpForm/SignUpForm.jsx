import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {Card, CardHeader, TextField, CardContent, Divider, Button, CardActions} from '@mui/material'
import { signup } from '../../services/authService'

function SignUpCard() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [passwpordR, setPasswordR] = useState('')
  const [userName, setUsername] = useState('')
  const [terms, setTerms] = useState('false')
  const [age, setAge] = useState('false')

  const onSignUp = async () => {
    if (password !== passwpordR) {
      navigate('/signup')
      return window.alert('Password must be the same.')
    } else if (!terms) {
      navigate('/signup')
      return window.alert('You have to accept Terms and Conditions.')
    } else if (!age) {
      navigate('/signup')
      return window.alert('You have to be over 18 years old.')  
    } else {
      const { result } = await signup({name, userName, email, password})
      localStorage.setItem('token', result)
      navigate('/app')
    }
  }

  const handleTerms = (e) => {
    setTerms(e.target.checked)
  }

  const handleAge = (e) => {
    console.log(e.target.checked)
    setAge(e.target.checked)
  }
 
  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Sign Up" />
      <CardContent>
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
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
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPasswordR(e.target.value)}
          label="Repeat Password"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />

      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end'}}>
      <div> <input id="checkbox" onChange={(e) => handleTerms(e)} type="checkbox"/> <label htmlFor="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label></div>
      <div> <input id="checkbox" onChange={(e) => handleAge(e)} type="checkbox"/> <label htmlFor="checkbox"> I am over 18 years old</label></div>
        <Button onClick={onSignUp}>Register</Button>
      </CardActions>
    </Card>
  )
}

export default SignUpCard