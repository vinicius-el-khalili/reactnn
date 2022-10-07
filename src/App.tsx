import React from 'react';
import { ScrollContainer } from './components/ScrollContainer';
function App() {
  return (
    <div className="App">
      <ScrollContainer style={{backgroundColor:"cornflowerblue"}} >Hello</ScrollContainer>
      <ScrollContainer style={{backgroundColor:"coral"}} >This is...</ScrollContainer>
      <ScrollContainer style={{backgroundColor:"turquoise"}} >...Awesome</ScrollContainer>
    </div>
  );
}

export default App;
