import './App.scss';

import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { WinesList } from './pages/WineListPage/WineList';
import { NotFoundPage } from './pages/NotFoundPage/NotFound';
import { Header } from './components/Header';
import React from 'react';
import { Breadcrumbss } from './components/Breadcrumbs/Breadcrumbs';
import { Footer } from './components/Footer';
import { ContainerWrap } from './components/ContainerWrap'


export const App = () => {
  return (
      <div className="App">
        <Header />
        <main className='main'>
          <ContainerWrap>
          <Breadcrumbss />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="wines" element={<WinesList />} />
              <Route path="home" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ContainerWrap>
        </main>
        <Footer />
      </div>
  );
};
