// import logo from './logo.svg';
import './Style/App.css';
import List from './Components/Comp_List';
import Questions from './Components/Comp_qns';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import company from './companylist.json'



function App()
 {
  return (
    <div className="App">
     
     <BrowserRouter>
    
   <Routes>



    <Route exact path='/List' element ={<List/>} />
    <Route exact path='/questions/:id' element ={<Questions/>}/>

   </Routes>
  </BrowserRouter>

  
    </div>
  );
}

export default App;
