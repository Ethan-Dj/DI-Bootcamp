import './App.css';
import TransactionForm from './components/TransactionForm';
import Display from './components/Display';
import  {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './actions';

function App() {
  // const[users, setUsers] = useState([])
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => {
    //   // setUsers(data)
      dispatch(getUsers())
    // })
  },[])

  return (
  <>
  {/* <TransactionForm />
  <Display /> */}
  {
    users.map((item,index)=> {
      return(
        <div key={index}>
          {item.name}
        </div>
      )
    })
  }
  </>
  );
}

export default App;
