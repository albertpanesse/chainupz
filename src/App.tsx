import { BrowserRouter as Router, Route } from 'react-router-dom';

import CleanLayout from './layouts/clean';
import SignedInLayout from './layouts/signed-in';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Dashboard from './pages/dashboard';

const App = () => {
  return (
    <Router>
      <Route path="/">
        <CleanLayout>
          <Home />
        </CleanLayout>
      </Route>
      <Route path="/about">
        <CleanLayout>
          <About />
        </CleanLayout>
      </Route>
      <Route path="/contact">
        <CleanLayout>
          <Contact />
        </CleanLayout>
      </Route>
      <Route path="/dashboard">
        <SignedInLayout>
          <Dashboard />
        </SignedInLayout>
      </Route>
    </Router>
  );
};

export default App;
