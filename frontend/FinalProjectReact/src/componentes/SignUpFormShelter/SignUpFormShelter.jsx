import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUpFormShelter.css'
import {Card, CardHeader, TextField, CardContent, Divider, Button, CardActions} from '@mui/material'
import { signupShelter } from '../../services/authService'

function SignUpSCard() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwpordR, setPasswordR] = useState('')
  const [shelterName, setShelterName] = useState('')
  const [cif, setCif] = useState('')
  const [tlf, setTlf] = useState('')

  const [terms, setTerms] = useState('false')
  const [age, setAge] = useState('false')

  const onSignUp = async () => {
    if (password !== passwpordR) {
      navigate('/signups')
      return window.alert('Password must be the same.')
    } else if (!terms) {
      navigate('/signups')
      return window.alert('You have to accept Terms and Conditions.')
    } else if (!age) {
      navigate('/signups')
      return window.alert('You have to be over 18 years old.')  
    } else {
      const {result}  = await signupShelter({shelterName, email, password, cif, tlf})
      console.log(result)
      localStorage.setItem('token', result.token)
      navigate(`/app/shelterownprofile/${result.id}`)
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
    <Card id='signup-card' sx={{ maxWidth: '500px' }}>
      <CardHeader title="Sign Up" />
      <CardContent>
        <TextField
          onChange={(e) => setShelterName(e.target.value)}
          label="Shelter Name"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px', bgcolor: 'whitesmoke', borderRadius: 1 }}
        />
        
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px', bgcolor: 'whitesmoke', borderRadius: 1 }}
        />
          <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px', bgcolor: 'whitesmoke', borderRadius: 1 }}
        />
        <TextField
          onChange={(e) => setPasswordR(e.target.value)}
          label="Repeat Password"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px', bgcolor: 'whitesmoke', borderRadius: 1 }}
        />
       
        <TextField
          onChange={(e) => setCif(e.target.value)}
          label="CIF"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px', bgcolor: 'whitesmoke', borderRadius: 1 }}
        />
        <TextField
          onChange={(e) => setTlf(e.target.value)}
          label="Phone number"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px', bgcolor: 'whitesmoke', borderRadius: 1 }}
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

export default SignUpSCard