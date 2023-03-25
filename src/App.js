import './App.scss';
import React from 'react';
import Cabecera from './components/Cabecera/Cabecera';
import { FormattedMessage, IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import English from './lang/en.json';
import { useForm } from 'react-hook-form';

const locale = navigator.language;

function App() {
  const [messages, setMessages] = React.useState(English);
  const [currentLanguange, setCurrentLanguage] = React.useState('en');
  const { register, handleSubmit, watch } = useForm({ defaultValues: { language: currentLanguange } });
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
      <div className='App'>
        <div>
          <h2>Users!</h2>
          <button onClick={() => setMessages(Spanish)}>ES</button>
          <button onClick={() => setMessages(English)}>EN</button>
          <Cabecera></Cabecera>
        </div>
        <FormattedMessage id='app:language_selector' />
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <select {...register('language')}>
            <option value='es'>
              <FormattedMessage id='app:spanish'></FormattedMessage>
            </option>
            <option value='en'>
              <FormattedMessage id='app:english'></FormattedMessage>
            </option>
          </select>
        </form>
      </div>
    </IntlProvider>
  );
}

export default App;
