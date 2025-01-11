import { Container, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { Edit, Delete } from '@mui/icons-material'

const TableData = ({ tasks, handleEdit, handleDeleteTask }) => {
      return (
            <Container component={Paper} elevation={3} maxWidth='md' sx={{ p: 4, mt: 5 }}>
                  <Typography textAlign={'center'} variant='h5' gutterBottom>Table Data Show</Typography>
                  <Paper elevation={5}>
                        <Table sx={{ maxHeight: '400px' }}>
                              <TableHead>
                                    <TableRow>
                                          <TableCell>Todo Name</TableCell>
                                          <TableCell>Date</TableCell>
                                          <TableCell align='center'>Actions</TableCell>
                                    </TableRow>
                              </TableHead>
                              <TableBody>
                                    {
                                          tasks.length > 0 ? tasks?.map((item, i) => (
                                                <TableRow key={item.id}>
                                                      <TableCell>{item.text}</TableCell>
                                                      <TableCell>{item.date}</TableCell>
                                                      <TableCell align='center'>
                                                            <IconButton color='primary' onClick={() => handleEdit(item.id)}>
                                                                  <Edit />
                                                            </IconButton>
                                                            <IconButton color='error' onClick={() => handleDeleteTask(item.id)}>
                                                                  <Delete color='error' />
                                                            </IconButton>

                                                      </TableCell>
                                                </TableRow>
                                          )) : <TableRow>
                                                <TableCell colSpan={3} align='center'>Row Not Found</TableCell>
                                          </TableRow>
                                    }

                              </TableBody>
                        </Table>
                  </Paper>
            </Container>
      )
}

export default TableData
