import './media/scss/app.scss';

import React from 'react';

import Loader from './componants/elements/Loader';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

function App() {
  return (
    <div className="App">
      <Loader />
    </div>
  );
}

export default App;
