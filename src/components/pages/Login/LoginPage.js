import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      <form onSubmit={() => navigate('/')}>
        <input></input><br />
        <input></input><br />
        <input type="submit"></input><br />
      </form>
    </div>
  )
}

export default LoginPage