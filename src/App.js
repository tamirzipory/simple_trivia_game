import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import FinalScreen from './pages/FinalScreen';

import Settings from './pages/Settings';
import {Container, Typography} from "@mui/material";
import {Box} from "@mui/system"
import QuestionsPage from './pages/QuestionsPage';
function App() {

  return (
  <BrowserRouter>
    
    <div className="grid-container">
<main>
  <Container maxWidth="small">
  <Box textAlign="center" mt={5}>
  <Route path="/" component={Settings} exact ></Route>
  <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
  <Route path="/questions" component={QuestionsPage}></Route>
  <Route path = "/score" component={FinalScreen}></Route>
  </Box>
  </Container>
</main>


</div>
</BrowserRouter>

  )
}

export default App;
