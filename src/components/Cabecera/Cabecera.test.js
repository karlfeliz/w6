import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import Cabecera from './Cabecera';
import English from '../../lang/en.json';

describe('Test Cabecera', () => {
  let component;
  beforeEach(() => {
    component = render(
      <IntlProvider locale='en-EN' messages={English}>
        <MemoryRouter>
          <Cabecera></Cabecera>
        </MemoryRouter>
      </IntlProvider>
    );
  });

  test('Check title', () => {
    const cabecera = component.container.querySelector('.Cabecera');
    expect(cabecera).toBeInTheDocument();
  });
});
