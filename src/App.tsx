import React from 'react';
import { ScrollContainer } from './components/ScrollContainer';
import { ScrollAnimationContainer } from './components/IntersectionObserverContainer';
function App() {
  return (
    <div className="App">
      <ScrollContainer style={{backgroundColor:"cornflowerblue"}} >
        <ScrollAnimationContainer>ScrollAnimationContainer</ScrollAnimationContainer>
      </ScrollContainer>
      <ScrollContainer style={{backgroundColor:"coral"}} >This is...</ScrollContainer>
      <ScrollContainer style={{backgroundColor:"turquoise"}} >...Awesome</ScrollContainer>
    </div>
  );
}

export default App;
