import React from 'react';
import Container from './components/Container';
import StepsContent from './components/StepsContent';
import StepsPanel from './components/StepsPanel';
import StepsProvider from './context/StepsContext';

const App = () => (
  <div className="App">
    <StepsProvider>
      <Container>
        <StepsPanel />
        <StepsContent />
      </Container>
    </StepsProvider>
  </div>
);

export default App;
