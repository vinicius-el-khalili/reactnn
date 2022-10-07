import React from 'react';
import { ScrollContainer } from './components/ScrollContainer';
import { ScrollAnimationContainer } from './components/IntersectionObserverContainer';
import { useState, useRef, useMemo, useEffect } from 'react';
import { useElementOnScreen } from './hooks/useElementOnScreen';

const options = {
  root:null,
  rootMargin:'36px 36px 36px 36px',
  threshold:0,
}

function App() {

  // Simple to use!
  const target1 = useRef(null);
  const isVisible1 = useElementOnScreen(options,target1);
  const target2 = useRef(null);
  const isVisible2 = useElementOnScreen(options,target2);

  return (
    <div className="App">
      
      <div className='Header'>
        <h2>1:{!isVisible1 ? 'n' : 'y'}, 2:{!isVisible2 ? 'n' : 'y'}</h2>
      </div>
      
      <ScrollContainer style={{backgroundColor:"cornflowerblue"}} >Scroll me</ScrollContainer>

      <ScrollContainer style={{backgroundColor:"coral"}} >This is...</ScrollContainer>

      <h1 className={!isVisible1?"hidden":"show"} ref={target1} >Target 1</h1>
      
      <ScrollContainer style={{backgroundColor:"turquoise"}} >...Awesome</ScrollContainer>
      
      <h1 className={!isVisible2?"hidden":"show"} ref={target2} >Target 2</h1>

    </div>
  );
}

export default App;
