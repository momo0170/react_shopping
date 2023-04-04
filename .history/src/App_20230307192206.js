import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <UserContextProvider value={children}>
      <Header />
      <Outlet />
    </UserContextProvider>
  );
}

export default App;