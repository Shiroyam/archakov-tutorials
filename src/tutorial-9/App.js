import React from "react";

const App = () => {
  const [users, setUsers] = React.useState([]);

  async function getUsers() {
    try {
      let response = await fetch(
        "https://6204e472161670001741b008.mockapi.io/users"
      );
      let user = await response.json();
      setUsers(user);
    } catch (err) {
      alert(err);
    }
  }
  console.log(users)
  return (
    <>
      <div>
        <ul>
            {users.map((element) => (
                <li key={element.id}>
                    {element.name}
                </li>
            ))}
        </ul>
        <button onClick={getUsers}>Вывод данных</button>
      </div>
    </>
  );
};

export default App;
