import logo from './logo.svg';
import './App.css';
import Numbers from './Components/Numbers';
import {useState, useEffect} from 'react'

function App() {

  const data = [
    {
      title:"Arsenal",
      number:"10/10",
      icon:"👋"
    },
    {
      title:"Tottenham",
      number:"1/10",
      icon:"💗"
    },
    {
      title:"Chelsea",
      number:"3/10",
      icon:"😅"
    },
    {
      title:"Fulham",
      number:"8/10",
      icon:"🗽"
    }
  ]

  const [arrayObj, update] = useState([]);

  useEffect(() => {
    update(data);
  }, []);

  return (
    <>
    {
      arrayObj.map((item) => {
        return(
          <Numbers title={item.title} number={item.number} icon={item.icon} />
        )
      })
    }
    
    </>
  );
}

export default App;
