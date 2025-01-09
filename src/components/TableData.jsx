import { Container, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import EditIcon from "@mui/icons-material/Edit";
import { useThemeContext } from '../theme/Store';


const TableData = () => {

    const {setData,data,setEditIndex,setEditLogo,setInputDate,setInputText} = useThemeContext();
    useEffect(() => {
        const savedData = localStorage.getItem("data");
        if (savedData) {
          setData(JSON.parse(savedData));
        }
      }, [data]);

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

      
    console.log(data)
    return (
        <Container maxWidth='lg'>
            <Table component={Paper} elevation={3} sx={{ marginTop: "50px" }}>
            <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>
                <strong>Text</strong>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <strong>Date</strong>
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                <strong>Action</strong>
              </TableCell>
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
        </Container>
    )
}

export default TableData