import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import SimpleForm from './SimpleForm';
import SyncValidationForm from './SyncValidationForm';
import { PATHS } from './constants';

const App = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path={PATHS.SIMPLE_FORM} exact element={<SimpleForm />}></Route>
            <Route path={PATHS.SYNC_VALIDATION_FORM} exact element={<SyncValidationForm />}></Route>
        </Routes>
    </BrowserRouter>
);

export default App;
