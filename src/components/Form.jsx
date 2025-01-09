import { Button, Container, Grid2, Paper, TextField, Typography } from '@mui/material'
import EditIcon from "@mui/icons-material/Edit";
import { MdAdd } from "react-icons/md";
import { useEffect } from 'react';
import { useThemeContext } from '../theme/Store';

const Form = () => {

    const {inputText, setInputText,inputDate,setInputDate,editIndex,editLogo,data,setData,setEditIndex,setEditLogo} = useThemeContext()

  useEffect(() => {
      if (data.length > 0) {
        localStorage.setItem("data", JSON.stringify(data));
      }
    }, [data]);

    
  const handleAddData = () => {

    if (inputText && inputDate) {
      if (editLogo) {
        setData([...data, { text: inputText, date: inputDate }]);
      } else {
        setData(
          data.map((value, index) =>
            index === editIndex ? { text: inputText, date: inputDate } : value
          )
        );
        setEditLogo(true);
      }
      setInputText("");
      setInputDate("");
      setEditIndex(null);
    } else {
      alert("Fill All Inputs!!");
    }
    console.log(data,'---data')
  };

    return (
        <Container maxWidth='sm' component={Paper} elevation={8} sx={{ p: 3, mt: 5 }}>
            <Typography
                variant='h4'
                textAlign={'center'}
                sx={{marginBottom:"20px"}}
            >
                {editLogo ? "Form" : "Edit Form"} 
            </Typography>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12 }}>
                    <TextField
                        type='text'
                        fullWidth
                        color='success'
                        label="Filled success"
                        variant='filled'
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                    <TextField
                        type='date'
                        fullWidth
                        color='warning'
                        variant='filled'
                        value={inputDate}
                        onChange={(e) => setInputDate(e.target.value)}
                    />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                    <Button  onClick={handleAddData}
                        variant='contained'
                        color='success'
                    > {editLogo ? <MdAdd size={30} /> : <EditIcon size={30} />}</Button>
                </Grid2>
            </Grid2>
        </Container>

    )
}

export default Form