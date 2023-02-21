import { Button, Checkbox, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField, Typography, FormControlLabel } from '@material-ui/core';
import useStyles from "./Css";
import React from 'react';

const Question = ({ question, onNext, onBack, onSubmit, answers, setAnswers, questions, currentQuestionIndex, setCurrentQuestionIndex }) => {
  const { id, prompt, type, options, isRequired } = question;
  const answer = answers[id] || '';
  const classes = useStyles();
  
  const handleSubmit = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers)
    };
    console.log(answers)
    fetch('/api/submit', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
    
      console.log('SUBMITTED')
      setCurrentQuestionIndex(currentQuestionIndex + 2);
  };
  const handleInputChange = (e) => {
    setAnswers({ ...answers, [id]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setAnswers({
      ...answers,
      [id]: isChecked ? (answers[id] || []).concat(e.target.value) : (answers[id] || []).filter((val) => val !== e.target.value),
    });
  };

  const handleOptionChange = (e) => {
    setAnswers({ ...answers, [id]: e.target.value });
  };

  const isValid = !isRequired || (!!answer && (type !== 'checkbox' || answer.length > 0));
  const datePickerId = new Date().toISOString().split("T")[0];

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Typography variant="h6">Question {id }</Typography>
        <Typography>{prompt}</Typography>
      </Grid>

      <Grid item>
        {type === 'text' && (
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={answer}
            onChange={handleInputChange}
            error={!isValid}
            helperText={isRequired && !answer ? 'This field is required' : ''}
          />
        )}

{type === 'checkbox' && (
  <FormControl component="fieldset" error={!isValid}>
    <InputLabel>{''}</InputLabel>

    {options.map((option) => (
      <FormControlLabel
        key={option}
        control={
          <Checkbox
            value={option}
            checked={(answer || []).includes(option)}
            onChange={handleCheckboxChange}
          />
        }
        label={option}
      />
    ))}
  </FormControl>
)}
        
        {type === 'number' && (
          <Input
            variant="outlined"
            margin="normal"
            fullWidth
            value={answer}
            onChange={handleInputChange}
            error={!isValid}
            type="number"
            helperText={isRequired && !answer ? 'This field is required' : ''}
            inputProps={{ min: 0, max: 100 }}          />
        )}

{type === 'date' && (
          <Input
            variant="outlined"
            margin="normal"
            fullWidth
            value={answer}
            onChange={handleInputChange}
            error={!isValid}
            type="date"
            helperText={isRequired && !answer ? 'This field is required' : ''}
            min={datePickerId}
            
          />
        )}


        {type === 'select' && (
          <FormControl variant="outlined" fullWidth margin="normal" error={!isValid}>
            <InputLabel id={`question-select-${id}-label`}>{prompt}</InputLabel>

            <Select
              labelId={`question-select-${id}-label`}
              value={answer}
              onChange={handleOptionChange}
              label={prompt}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>

              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Grid>

      <Grid item className={classes.buttons}>
        {id > 0 && (
          <Button variant="contained" color="secondary" onClick={onBack} >
            BACK
          </Button>
        )}
        {currentQuestionIndex < questions.length - 1 ? (
          <Button variant="contained" color="primary" disabled={!isValid} onClick={onNext} style={{ position: "relative", left: "35%" }}>
            NEXT
          </Button>
        ) : (
          <Button variant="contained" color="primary" disabled={!isValid} onClick={handleSubmit} style={{ position: "relative", left: "30%" }}>
            SUBMIT
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Question;