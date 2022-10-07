import React from 'react';
import { ScrollContainer } from './components/ScrollContainer';
import { useRef } from 'react';
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
  const target3 = useRef(null);
  const isVisible3 = useElementOnScreen(options,target3);
  return (
    <div className="App">
      
      <div className='Header'>
        <h2>1:{!isVisible1 ? 'n' : 'y'}, 2:{!isVisible2 ? 'n' : 'y'}</h2>
      </div>

      <ScrollContainer style={{backgroundColor:"coral"}} >
        <h1 className={!isVisible1?"hidden":"show"} ref={target1} >Target 1</h1>
      </ScrollContainer>
      
      <ScrollContainer style={{backgroundColor:"turquoise"}} >
        <h1 className={!isVisible2?"hidden":"show"} ref={target2} >Target 2</h1>
      </ScrollContainer>
      
      <ScrollContainer style={{backgroundColor:"cornflowerblue"}} >
        <h1 className={!isVisible3?"hidden":"show"} ref={target3} >Target 3</h1>
      </ScrollContainer>


    </div>
  );
}

export default App;
