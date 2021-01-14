import { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import VideoPopup from './components/VideoPopup/VideoPopup';

export const UserContext = createContext();

function App() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
      <UserContext.Provider value={{open, setOpen}}>
        <main className="main-wrap">
          <Home/>
        </main>
        <VideoPopup open={open} closeModal={closeModal}/>
      </UserContext.Provider>

  );
}

export default App;
