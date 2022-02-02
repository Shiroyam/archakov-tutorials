import React from "react";

function montoToStr(num) {
    return num > 12 || num < 1
      ? null
      : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
          num - 1
        ];
  }

class ProfileC extends React.Component {
    month = montoToStr(this.props.registredAt.getMonth());
    date = this.props.registredAt.getDate() + ' ' +  this.month + ' ' + this.props.registredAt.getFullYear();

    render(){
        return (
            <>
            <p>Привет, <b>{this.props.name}!</b></p>
            <p>Дата регистрации: {this.date}  </p>
        </>
        );
    };
}

const ProfileF = (props) => {

    const month = montoToStr(props.registredAt.getMonth());
    const date = props.registredAt.getDate() + ' ' +  month + ' ' +props.registredAt.getFullYear();
   
    return( 
        <>
            <p>Привет, <b>{props.name}!</b></p>
            <p>Дата регистрации: {date}  </p>
        </>
    );
}

const App = () => {
    return (
        <>
            <ProfileF name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
            <ProfileC name="Вася Дудкин" registredAt={new Date(2022, 2, 2)} />
        </>
    );
}

export default App;