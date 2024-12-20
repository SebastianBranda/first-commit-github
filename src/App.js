import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FirstCommitSearchPage from './pages/FirstCommitSearchPage';
import FirstCommitPage from './pages/FirstCommitPage';
import SearchUserPage from "./pages/SeachUserPage"
import RepoProvider from "./context/RepoProvider"
import './App.css';

function App() {


  return (
    <>
      <Navbar />
      {/* <SearchUserPage /> */}
      <RepoProvider>
        <Routes>
          <Route path="/first-commit/*" element={<FirstCommitPage />} />
          <Route path="/search-user" element={<SearchUserPage />} />
          <Route path="/*" element={<FirstCommitSearchPage />} />
        </Routes>
      </RepoProvider>
      <Footer />
    </>
  );
}

export default App;
