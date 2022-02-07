import React from "react";
import Avatar from "@mui/material/Avatar";
import "./style.css";


const Comment = (props) => {
  return (
    <>
      <div className="container-feedback">
        <div className="text">Отзывы:</div>
        <div className="person">
        {props.comments.map(i => {
          return(<>
          <div className="container-card">
            <Avatar>{i.name.slice(0,1)}</Avatar>
            <div className="card">
            <div className="card__name">{i.name}</div>
            <div className="card__text">{i.text}</div>
            <div className="date">{i.createdAt}</div>
            </div>
            </div>

          </>)
        })}
        </div>
      </div>
    </>
  );
};

export default Comment;
