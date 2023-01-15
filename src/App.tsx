import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { CreateAccount } from './routes/Logs/CreateAccount';
import { LoginAccount } from './routes/Logs/LoginAccount';
import { ClientHome } from './routes/ClientHome';





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<ClientHome />} >
      <Route path="/login" element={<LoginAccount />} />
      <Route path="/createAccount" element={<CreateAccount />} />
    </Route>

    </Routes>
  </BrowserRouter>
  )
}

export default App;
