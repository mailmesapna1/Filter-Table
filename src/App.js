// import logo from './logo.svg';
// import './App.css';
// import { useEffect ,useState} from 'react';
// import Data from './components/Data'
// import SignIn from './components/SignIn'
import SearchTable from './components/FilterTable';

function App() {
  // var item = [
  //   {
  //     name:'Sapna',
  //     age:19,
  //     a:''
  //   },
  //   {
  //     name:'Sonali',
  //     age:20,
  //     a:''
  //   },
  //   {
  //     name:'Komal',
  //     age:16,
  //     a:''
  //   },
  //   {
  //     name:'Shyam',
  //     age:17,
  //     a:''
  //   },
  //   {
  //     name:'Rajani',
  //     age:15,
  //     a:''
  //   }
  // ]
  return (
    <div className='App'>
      <SearchTable/>
      {/* <Data item ={Data}/> */}
      {/* <SignIn item={Data}/> */}
    </div>
    
  );
}

export default App;
