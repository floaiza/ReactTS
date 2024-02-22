import React from 'react';
import Providers from './Providers';
import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <Providers>
      {/* <h1>React TS!</h1> */}
      <div className="mt-5 mb-5 w-9/12 mx-auto">
        <AppRoutes />
      </div>
    </Providers>
  )
}

export default App