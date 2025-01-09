import React from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import TableData from './Components/TableData'
import { Box } from '@mui/material'

const App = () => {
  return (
    <Box
    sx={{
   width:"100%",
   height:"100vh",
   bgcolor:"background.default",
   color:"text.secondary"
    }}
    >
      <Header />
      <Form/>
      <TableData/>
    </Box>
  )
}

export default App