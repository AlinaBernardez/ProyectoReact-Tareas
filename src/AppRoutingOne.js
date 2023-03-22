import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NotFoundPage from './Pages/404/notFoundPage';
import AboutPage from './Pages/About-faqs/aboutPage';
import HomePage from './Pages/Home/homePage';
import ProfilePage from './Pages/Profile/profilePage';
import TaskDetailPage from './Pages/Tasks/taskDetailPage';
import TaskPage from './Pages/Tasks/taskPage';


function AppRouting() {
  return (
    <BrowserRouter>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/tasks'>| TASKS |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs ||</Link>
        </aside>
        <main>
          <Routes>
            <Route path='/' element={ <HomePage /> }></Route>
            <Route path='/profile' element={ <ProfilePage /> }></Route>
            <Route path='/tasks' element={ <TaskPage /> }></Route>
            <Route path='/task/:id' element={ <TaskDetailPage /> }></Route>
            <Route path='/about' element={ <AboutPage /> }></Route>
            <Route path='/faqs' element={ <AboutPage /> }></Route>
            <Route  path='*' element={ <NotFoundPage /> }></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default AppRouting;
