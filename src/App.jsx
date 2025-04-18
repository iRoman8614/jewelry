import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar/Index';
import './App.scss';

function App() {
    return (
        <>
            <NavBar />
            <main style={{ padding: '20px' }}>
                <Outlet />
            </main>
        </>
    );
}
export default App;