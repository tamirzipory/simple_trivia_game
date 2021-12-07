import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAmountChange, handleScoreChange } from '../actions/QuestionsActions';

function FinalScreen(props) {
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(handleScoreChange(0));
        dispatch(handleAmountChange(50));
        props.history.push("/")
    }
    const {score} = useSelector((state) => state);
    return (
        <Box mt={30}>
            <Typography variant="h3" fontWeight="bold" mb={3}>Final Score: {score}</Typography>
            <Button variant="outlined" onClick={handleClick}>back to start</Button>
        </Box>
    )
}

export default FinalScreen
