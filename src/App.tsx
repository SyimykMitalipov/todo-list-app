import React from 'react';

/// import pages;
import { Home } from 'pages';


// import routes;
import { Routes, Route } from 'react-router-dom';
import { PATHS } from 'common/constants';

const App = () => {
  return (
    <>
      <Routes>
        <Route path={PATHS.main} element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
