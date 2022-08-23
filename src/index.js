import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

ReactDOM.render(<App />, document.getElementById('app'));

/* import React from 'react';
import createRoot from 'react-dom';
import App from './components/App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />); */
