import Header from "./Header";
import SimpleForm from "./SimpleForm";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { PATHS } from './constants';

const App = () => (
  <BrowserRouter>
    <Header />
      <Routes>
        <Route path={PATHS.SIMPLE_FORM} exact element={<SimpleForm />}></Route>
        <Route path={PATHS.TEMP} exact element={<h1>TEMP</h1>}></Route>
      </Routes>
  </BrowserRouter>
)


export default App;
