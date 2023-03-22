import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NotFoundPage from './Pages/404/notFoundPage';
import AboutPage from './Pages/About-faqs/aboutPage';
import HomePage from './Pages/Home/homePage';


function AppRouting() {
  return (
    <BrowserRouter>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs ||</Link>
        </aside>
        <main>
          <Routes>
            <Route path='/' element={ <HomePage /> }></Route>
            <Route path='/about' element={ <AboutPage /> }></Route>
            <Route path='/faqs' element={ <AboutPage /> }></Route>
            <Route  path='/*' element={ <NotFoundPage /> }></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default AppRouting;
