import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ChooseUser.css'

import {Card, CardHeader, TextField, CardContent, Divider, Button, CardActions} from '@mui/material'

function ChooseUser() {
  /* const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') */

 
  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Which kind of user are you?" />
      <CardContent>
      <button class="user-button" type="button">User</button> <p class="or">or</p>
      <button class="shelter-button" type="button">Shelter</button>
      </CardContent>
      <Divider />
    </Card>
  )
}

export default ChooseUser