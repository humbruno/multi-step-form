import React from 'react';
import Container from './components/Container';
import StepsContent from './components/StepsContent';
import StepsPanel from './components/StepsPanel';

const App = () => (
  <div className="App">
    <Container>
      <StepsPanel />
      <StepsContent />
    </Container>
  </div>
);

export default App;
