import Header from './shared/Header';
import Footer from './shared/Footer.js';
import Register from './components/Register';
// import { useState } from 'react';

function App() {
  const changeTitle = 'duong anh';
  // const exp = [
  //   {
  //     id: Math.floor(Math.random() * 100),
  //     name: 'le duc tho22',
  //     gmail: 'quang1922@gmail.com',
  //   },
  // ];
  // let [title, setTitle] = useState('duong anh');
  // let [value, setValue] = useState('duong anh');
  // const [users, setUser] = useState([
  //   {
  //     id: Math.floor(Math.random() * 100),
  //     name: 'le duc tho',
  //     gmail: 'quang19@gmail.com',
  //   },
  //   {
  //     id: Math.floor(Math.random() * 100),
  //     name: 'hoang quoc viet',
  //     gmail: 'hoang23@gmail.com',
  //   },
  //   {
  //     id: Math.floor(Math.random() * 100),
  //     name: 'le cat trong ly',
  //     gmail: 'lyquangdieu@gmail.com',
  //   },
  // ]);
  // const handleChangetitle = (e) => {
  //   setValue(e.target.value);
  // };
  // const handleCheckEvent = () => {
  //   setUser([...users, exp]);
  // };
  return (
    <div>
      <Header />

      <Register setevent={changeTitle} />

      {/* {users.map((user) => {
        return <div key={user.id}>{JSON.stringify(user)}</div>;
      })}

      <input type="text" value={value} onChange={(e) => handleChangetitle(e)} />
      <button onClick={() => handleCheckEvent()}>Change title</button>
      <h1>{title}</h1> */}

      <Footer />
    </div>
  );
}

export default App;
