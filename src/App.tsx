import { Routes, Route } from 'react-router-dom'
import NavList from './components/nav-list.comp'

import HomePage from './containers/home.page'
import QuizPage from './containers/quiz.page'
import ResultPage from './containers/result.page'
import ScoresPage from './containers/scores.page'
import NotFoundPage from './containers/not-found.page'

import './App.css'

function App() {
  return (
    <div className='App'>
      <NavList />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path='/result' element={<ResultPage />} />
        <Route path='/scores' element={<ScoresPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
