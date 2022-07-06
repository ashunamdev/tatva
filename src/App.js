import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  console.log(data,"datas")
  return (
    <div className="App">
     <Form setData={setData} data={data}/>
     <List setData={setData} data={data}/>
    </div>
  );
}

export default App;
