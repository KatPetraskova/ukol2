import { createRoot } from 'react-dom/client';
import './global.css';
import Episode from './components/Episode';

createRoot(
  document.querySelector('#app'),
).render(<Episode />);
