import { Button, Container, Grid2, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const Form = ({ handleAddTask, task, handleInputChange, isEdit }) => {
      return (
            <Container maxWidth='sm' component={Paper} elevation={3} sx={{ p: 3, mt: 5 }}>
                  <Typography variant='h5' textAlign='center' gutterBottom>{isEdit ? 'Update Form' : 'Add Form'}</Typography>
                  <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, }}>
                              <TextField type='text' name="text" value={task.text || ""} onChange={(e) => handleInputChange(e)} fullWidth size='small' color='primary' />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                              <TextField type='date' fullWidth size='small' name="date" value={task.date || ""} onChange={(e) => handleInputChange(e)} />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                              <Button variant='outlined' size='small' onClick={handleAddTask}>{isEdit ? 'Update' : 'Add'}</Button>
                        </Grid2>
                  </Grid2>
            </Container>
      )
}

export default Form
