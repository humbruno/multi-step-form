import React from 'react';
import Container from './components/Container';
import StepsPanel from './components/StepsPanel';
import StepsProvider from './context/StepsContext';

const App = () => (
  <div className="App">
    <StepsProvider>
      <Container>
        <StepsPanel />
        Vite
      </Container>
    </StepsProvider>
  </div>
);

export default App;
