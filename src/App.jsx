import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from "../src/components/Main/Main"

export default function App() {
  return (
    <>
      <Sidebar />

      <Main />
    </>
  );
}