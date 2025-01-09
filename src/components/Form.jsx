import { Button, Container, Grid2, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const Form = () => {
      return (
            <Container maxWidth='sm' component={Paper} elevation={3} sx={{ p: 3, mt: 5 }}>
                  <Typography variant='h5' textAlign='center' gutterBottom>Form</Typography>
                  <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, }}>
                              <TextField type='text' fullWidth size='small' />

                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                              <TextField type='date' fullWidth size='small' />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                              <Button variant='outlined' size='small'>Add</Button>
                        </Grid2>
                  </Grid2>
            </Container>
      )
}

export default Form
