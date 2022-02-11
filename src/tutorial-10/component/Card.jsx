import React from "react";
import "./style.css";
import axios from "axios";

const Card = () => {
  const [flag, setFlag] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [users, setUser] = React.useState({});
  const [value, setValue] = React.useState("");

  const getUser = async (e) => {
    e.preventDefault();
    try {
      setUploading(true);
      const user = await axios.get(`https://api.github.com/users/${value}`);
      const { data } = user;

      setUser(data);
      setUploading(false);
      setFlag(true);
    } catch {
      setUploading(false);
      alert("ошибка!");
    }
  };

  return (
    <>
      <div id="app">
        <div className="app-container">
          <form className="app-form">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="app-input"
              placeholder="Укажите GitHub-аккаунт"
            />
            <button
              disabled={uploading}
              onClick={getUser}
              className="app-form_btn"
            >
              Найти
            </button>
          </form>
          {uploading && (
            <div className="app-user">
              <p>
                <b>Идет загрузка...</b>
              </p>
            </div>
          )}
          {flag && (
            <div className="app-user">
              <div className="app-user_info">
                <div className="app-user_image">
                  <img src={users.avatar_url} alt="" />
                </div>
                <div className="app-user_data">
                  <h1 className="app-user_name">
                    {users.name}
                    <span>{users.login}</span>
                  </h1>
                  <p className="app-user_about">{users.bio}</p>
                </div>
              </div>
              <ul className="app-user_stats">
                <li className="app-user_stats-item">
                  Репозитории
                  <p>
                    <b>{users.public_repos}</b>
                  </p>
                </li>
                <li className="app-user_stats-item">
                  Подписчиков
                  <p>
                    <b>{users.followers}</b>
                  </p>
                </li>
                <li className="app-user_stats-item">
                  Публичные репозитории
                  <p>
                    <b>{users.public_repos}</b>
                  </p>
                </li>
              </ul>
              <ul className="app-user_location">
                <li className="app-user_location-item">{users.location}</li>
                <li className="app-user_location-item">
                  <a href={users.blog}>{users.blog}</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
