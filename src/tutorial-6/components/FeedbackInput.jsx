import "./style.css";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FeedbackInput = (props) => {
  
  const change = (e) => {
    if (e.target.name.value && e.target.email.value && e.target.text.value){
    e.preventDefault()
    const date = new Date()
    const createdAt = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes();
    props.setComments([...props.comments, {name:e.target.name.value, email:e.target.email.value, text:e.target.text.value, createdAt: createdAt}]);
    e.target.reset()
    }
  };


  return (
    <>
      <form onSubmit={change}>
        <div className="center">
          <div className="container-feedback">
            <div className="text">
              <h3>Обратная связь:</h3>
            </div>
            <div className="input">
              <TextField name="name" id="name" label="Имя" variant="outlined" />
            </div>
            <div className="input">
              <TextField
                name="email"
                type="email"
                id="email"
                label="Почта"
                variant="outlined"
              />
            </div>
            <div className="input">
              <TextField
                name="text"
                id="text-input"
                label="Текст"
                multiline
                rows={4}
                defaultValue=""
              />
            </div>
            <div className="input">
              <Button
                type="submit"
                variant="outlined"
              >
                Отправить
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FeedbackInput;
