import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TableData from './components/TableData'
import { Box } from '@mui/material'
import { useLocalStorageReducer } from './hooks/useLocalStorageReducer'
import { reducer } from './reducer/todoReducer'
const App = () => {
  const [tasks, dispatch] = useLocalStorageReducer('tasks', reducer, []);
  const [task, setTask] = useState({ task: '', date: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  }


  // add task or update task
  const handleAddTask = (e) => {
    e.preventDefault();

    // check condition 
    if (!task.text || !task.date) return alert('Dono filled bhare');

    if (isEdit) {
      dispatch({ type: 'EDIT_ITEM', payload: { id: editId, ...task } });
      setIsEdit(false);
      setEditId(null);
    } else {
      dispatch({ type: 'ADD_ITEM', payload: task });
    }
    setTask({ task: '', date: '' });
  }

  // edit functionality
  const handleEdit = (id) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    setTask({ text: taskToEdit.text, date: taskToEdit.date })
    setIsEdit(true);
    setEditId(id);
  }

  // delete task
  const handleDeleteTask = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
    alert('deleted task');
  }

  return (
    <Box sx={{
      bgcolor: 'background.default',
      color: 'text.secondary',
      minHeight: '98vh',
    }}>
      <Header />
      <Form handleAddTask={handleAddTask} task={task} handleInputChange={handleInputChange} />
      <TableData tasks={tasks} handleEdit={handleEdit} handleDeleteTask={handleDeleteTask} />
    </Box>
  )
}

export default App