import { Box, Paper, Container, TextField, IconButton, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { MdAdd } from "react-icons/md";
import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const User = () => {
  const [inputText, setInputText] = useState(""); 
  const [inputDate, setInputDate] = useState("");
  const [editLogo, setEditLogo] = useState(true);
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 

  useEffect(() => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      setData(JSON.parse(savedData)); 
    }
  }, []);
    
  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem('data', JSON.stringify(data)); 
    }
  }, [data]);
    
  const handleAddData = () => {
    if (inputText && inputDate) {
      if (editLogo) {
        setData([...data, { text: inputText, date: inputDate }]);
      } else {
        const updatedData = data.map((item, index) => 
          index === editIndex ? { text: inputText, date: inputDate } : item
        );
        setData(updatedData);
        setEditLogo(true);
      }
      setInputText("");
      setInputDate("");
      setEditIndex(null);
    } else {
      alert("Fill All Inputs!!");
    }
  };

  const editData = (index) => {
    setEditLogo(false);
    setEditIndex(index);
    setInputText(data[index].text); 
    setInputDate(data[index].date); 
  };
     
  const deleteData = (index) => {
    const updatedData = data.filter((val, i) => i !== index); 
    setData(updatedData);
  };

  return (
    <Box m={5} fullWidth>
      <Container 
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
          paddingTop: 2,
        }}
      >
        <Box>
          <Typography variant="h5">{editLogo ? "Form" : "Edit Form"}</Typography>
          <Paper elevation={2} p={5}>
            <TextField
              label="Enter Text"
              variant="outlined"
              fullWidth
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <TextField
              type="date"
              variant="outlined"
              fullWidth
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
            />
          </Paper>
          <IconButton
            color="primary"
            aria-label="add"
            onClick={handleAddData}
          >
            {editLogo ? <MdAdd size={30} /> : <EditIcon size={30}/>}
          </IconButton>
        </Box>
      </Container>
        
      <TableContainer component={Paper} fullWidth>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}><strong>Text</strong></TableCell>
              <TableCell sx={{ textAlign: "center" }}><strong>Date</strong></TableCell>
              <TableCell sx={{ textAlign: "center" }}><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ textAlign: "center" }}>{row.text}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{row.date}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <IconButton onClick={() => editData(index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteData(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box> 
  );
};

export default User;
