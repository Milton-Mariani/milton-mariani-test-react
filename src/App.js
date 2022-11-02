import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { MealDetails } from './components/MealDetails';


function App() {
  return (
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/MealDetails/:id'  element={<MealDetails/>}/>

    </Routes>
  );
}

export default App;
