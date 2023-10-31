import { Typography } from '@mui/material';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Etusivu from './components/etusivu';
import Lisaa from './components/lisaa';
import Budjetointi from './components/budjetointi';
import Pisteidenlasku from './components/pisteidenlasku';



function App() {
  return (
    <Router>
      <Typography>Opiskelijatapahtuma työkalut</Typography>
      <Routes>
      <Route path="/" element={<Etusivu></Etusivu>} > </Route>
      <Route path="/lisaa" element={<Lisaa></Lisaa>} > </Route>
      <Route path="/budjetointi" element={<Budjetointi></Budjetointi>} > </Route>
      <Route path="/budjetointi" element={<Pisteidenlasku></Pisteidenlasku>} > </Route>
      </Routes>
    </Router>
  );
}

export default App;
