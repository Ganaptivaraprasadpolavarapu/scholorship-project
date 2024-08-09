import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import DonorPage from './pages/donorpage';
import MainLayout from './layouts/mainLayout';
import LandingPage from './pages/landingpage';
import { ScholarshipsList } from './pages/scholarshipsList';
import { ScholarshipPage } from './pages/scholarshipPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage/>} />
          <Route path='/scholarships' element={<ScholarshipsList/>}/>
          <Route path='scholarship/:id' element={<ScholarshipPage/>} />
          <Route path='donors' element={<DonorPage/>} />
          <Route path='about' element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
