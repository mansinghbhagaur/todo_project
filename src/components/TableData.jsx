import { Container, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { Edit, Delete } from '@mui/icons-material'

const TableData = () => {
      return (
            <Container component={Paper} elevation={3} maxWidth='md' sx={{ p: 4, mt: 5 }}>
                  <Typography textAlign={'center'} variant='h5' gutterBottom>Table Data Show</Typography>
                  <Paper sx={{ width: '100%' }} elevation={5}>
                        <Table>
                              <TableHead>
                                    <TableRow>
                                          <TableCell>Todo Name</TableCell>
                                          <TableCell>Date</TableCell>
                                          <TableCell align='center'>Actions</TableCell>
                                    </TableRow>
                              </TableHead>
                              <TableBody>
                                    <TableRow>
                                          <TableCell>Todo 1</TableCell>
                                          <TableCell>02/09/2025</TableCell>
                                          <TableCell align='center'>
                                                <IconButton color='primary'>
                                                      <Edit />
                                                </IconButton>
                                                <IconButton color='error'>
                                                      <Delete color='error' />
                                                </IconButton>

                                          </TableCell>
                                    </TableRow>
                              </TableBody>
                        </Table>
                  </Paper>
            </Container>
      )
}

export default TableData
