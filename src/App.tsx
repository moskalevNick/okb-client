import React from 'react';
import styles from './App.module.css';
import { HomePage } from './modules/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PortfolioPage } from './modules/PortfolioPage/PortfolioPage';
import { LaboratoryPage } from './modules/LaboratoryPage/LaboratoryPage';
import { GemsPage } from './modules/GemsPage/GemsPage';
import { VacanciesPage } from './modules/VacanciesPage/VacanciesPage';
import { ContactsPage } from './modules/ContactsPage/ContactsPage';
import { Layout } from './modules/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/laboratory' element={<LaboratoryPage />} />
          <Route path='/gems' element={<GemsPage />} />
          <Route path='/vacancies' element={<VacanciesPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
