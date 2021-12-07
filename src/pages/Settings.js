import { Button, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useHistory } from 'react-router-dom';
import SelectFields from '../Components/SelectFields'
import TextFieldComp from '../Components/TextFieldComp';
import useAxios from '../hooks/useAxios';

function Settings(props) {
  const {response, err, loading} = useAxios({url:"/api_category.php"});
  const history = useHistory();
  /*console.log(response)*/

  if(loading){
    return(
     
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }
  if(err) {
    return (
      <Typography variany="h6" mt={20} color="red">
        some wrong
      </Typography>
    )
  }

 
  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  
  function submitHandler(e){
    e.preventDefault();
   history.push("/questions");
 }

  return (
    <form onSubmit={submitHandler}>
    <SelectFields options = {response.trivia_categories} label="Category" />
    <SelectFields options = {difficultyOptions} label="Difficulty" />
    <SelectFields options = {typeOptions} label="Type" />
    <TextFieldComp />
    <Button fullWidth variant="contained" type="submit">
      Get started
    </Button>
    </form>
  )
}

export default Settings

