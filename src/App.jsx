import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TableData from './components/TableData'
import { Box } from '@mui/material'
const App = () => {
  return (
    <Box sx={{
      bgcolor: 'background.default',
      color: 'text.secondary',
      minHeight: '98vh',
    }}>
      <Header />
      <Form />
      <TableData />
    </Box>
  )
}

export default App