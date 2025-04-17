import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import {NavBar} from "./components/NavBar/Index.jsx";

function App() {
  const HomePage = () => <div>
      <NavBar />
  </div>;
  const AboutPage = () => <h2>About Page</h2>;
  const NotFoundPage = () => <h2>404 - Page Not Found</h2>;

  return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
  );
}

export default App
