import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import { IndexPage, RepoPage, SearchPage, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="search">
            <Route path="/search" element={<SearchPage />}></Route>
            <Route path=":name" element={<RepoPage />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
