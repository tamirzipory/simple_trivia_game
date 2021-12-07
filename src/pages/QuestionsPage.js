import { Button, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { decode } from "html-entities";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleScoreChange } from '../actions/QuestionsActions'
import useAxios from '../hooks/useAxios'

const getRandomInt = (max) =>{
    return Math.floor(Math.random() * Math.floor(max)); 
}

function QuestionsPage(props) {
    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
        score,
    } = useSelector((state) =>state)
    

    let apiUrl = `/api.php?amount=${amount_of_question}`;
    if (question_category) {
      apiUrl = apiUrl.concat(`&category=${question_category}`);
    }
    if (question_difficulty) {
      apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
    }
    if (question_type) {
      apiUrl = apiUrl.concat(`&type=${question_type}`);
    }
    const { response, loading } = useAxios({url: apiUrl});
    const [questionIndex, setQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);

    const dispatch = useDispatch();

    useEffect(() =>{
        if(response){
            if(response.results.length) {
                const question = response.results[questionIndex];
                let answers = [...question.incorrect_answers];
                answers.splice(
                    getRandomInt(question.incorrect_answers.length),
                    0,
                    question.correct_answer
                );
                setOptions(answers)
               
        }
    }

    }, [response, questionIndex])

    /*console.log(response)*/

    if(loading){
        return(
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }
 
    function handleClickAnswer(e){
        const question = response.results[questionIndex];
        if (e.target.textContent === question.correct_answer) {
          dispatch(handleScoreChange(score + 1));
        }
        if(questionIndex + 1 < response.results.length){
            setQuestionIndex(questionIndex+1);
        }
        else{
            props.history.push("/score")
        }
    }

    return (      
       <Box>         
           <Typography variant="h4">Questions {questionIndex + 1}</Typography>
           <Typography mt={5}>
               {decode(response.results[questionIndex].question)}
               </Typography>
          {options.map((data, id) => (
              <Box mt={2} key={id}>
                  <Button onClick={handleClickAnswer} variant="contained">{decode(data)}</Button>
              </Box>
          ))}
           <Box mt={5}>
               score: {score} / {response.results.length}
           </Box>
       </Box>
    )
}

export default QuestionsPage

