import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from './Context/Books';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <Provider>
    <App />
  </Provider>
);
