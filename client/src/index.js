import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import './styles/index.css';
import client from './apollo/client'
import { GlobalContextProvider } from './context'
import App from './components/App';

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);