import Config from './config';
import Counter from './components/Counter';

/** Instantiate the counter component */
const counter = new Counter({ name: 'Counter' });

/** Mount the component to the page */
counter.render(Config.APP_ROOT);
