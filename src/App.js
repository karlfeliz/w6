import './App.scss';
import React from 'react';
import Cabecera from './components/Cabecera/Cabecera';
import { FormattedMessage, IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import English from './lang/en.json';
import { useForm } from 'react-hook-form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import UserPage from './components/UserPage/UserPage';
import CreateUserPage from './components/CreateUserPage/CreateUserPage';

const locale = navigator.language;

function App() {
  const [messages, setMessages] = React.useState(English);
  const [currentLanguange, setCurrentLanguage] = React.useState('en');
  const { watch } = useForm({ defaultValues: { language: currentLanguange } });
  const currentLanguangeLive = watch('language');
  if (currentLanguangeLive !== currentLanguange) {
    setCurrentLanguage(currentLanguangeLive);
    switch (currentLanguangeLive) {
      case 'es':
        setMessages(Spanish);
        break;
      case 'en':
        setMessages(English);
        break;
      default:
        setMessages(English);
    }
  }
  return (
    <IntlProvider locale={locale} messages={messages}>
      <BrowserRouter>
        <div className='App'>
          <div>
            <h2>
              <FormattedMessage id='header.logo' />
            </h2>
            <Cabecera></Cabecera>
            <button onClick={() => setMessages(Spanish)}>
              <FormattedMessage id='header.spanish'></FormattedMessage>
            </button>
            <button onClick={() => setMessages(English)}>
              <FormattedMessage id='header.english'></FormattedMessage>
            </button>
          </div>
        </div>
        <Routes>
          {/* Ruta Normal */}
          <Route path='/' element={<HomePage></HomePage>}></Route>

          {/* Rutas Lazy */}
          <Route path='/users' element={<UserPage></UserPage>}></Route>
          <Route path='/create-user' element={<CreateUserPage></CreateUserPage>}></Route>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
