import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FirstCommitSearchPage from './pages/FirstCommitSearchPage';
import FirstCommitPage from './pages/FirstCommitPage';
import SearchUserPage from "./pages/SeachUserPage"
import RepoProvider from "./context/RepoProvider"
import './App.css';

function App() {


  return (
    <div className="App">
      <Navbar />
      {/* <SearchUserPage /> */}
      <RepoProvider>
        <Routes>
          <Route path="/first-commit" element={<FirstCommitPage />} />
          <Route path="/search-user" element={<SearchUserPage />} />
          <Route path="/*" element={<FirstCommitSearchPage />} />
        </Routes>
      </RepoProvider>

    </div>
  );
}

export default App;
