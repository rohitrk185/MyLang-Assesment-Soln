import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './App.css';

import Main from './Components/Main';
import Cards from './Components/Question1/Cards';
import Review from './Components/Question2/Review';
import Comments from './Components/Question3/Comments';
import Share from './Components/Question4/Share';


function App() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route 
                path='/question1' 
                element={<Cards amount={5} />}></Route>
            <Route 
                path='/question2' 
                element={<Review />}></Route>
            <Route 
                path='/question3' 
                element={<Comments />}></Route>
            <Route 
                path='/question4' 
                element={<Share />}></Route>
        </Routes>
    </BrowserRouter>
}

export default App;