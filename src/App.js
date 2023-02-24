import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
