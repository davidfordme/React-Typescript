import './media/scss/app.scss';

import React, { useState } from 'react';

import { Context } from './Context';
import Loader from './componants/elements/Loader';
import UpcomingLaunches from './componants/views/UpcomingLaunches';

const App = () => {

  const [isLoading, setLoading] = useState<boolean>(true)

  return (
    <Context.Provider value={{isLoading, setLoading}}>
      <Loader/>
      <UpcomingLaunches/>
    </Context.Provider>
  )
};

export default App;