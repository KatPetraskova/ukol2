import { createRoot } from 'react-dom/client';
import './global.css';
import episodes from './data';
import AllEpisodes from './components/Episode';

createRoot(
  document.querySelector('#app'),
).render(<AllEpisodes episode={episodes} />);
