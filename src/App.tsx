// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CleanLayout from './layouts/clean';
import SignedInLayout from './layouts/signed-in';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Dashboard from './pages/dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CleanLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<CleanLayout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/contact" element={<CleanLayout />}>
          <Route index element={<Contact />} />
        </Route>
        <Route path="/dashboard" element={<SignedInLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
