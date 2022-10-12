import React from 'react';
import { ScrollContainer } from './components/ScrollContainer';
import { useRef } from 'react';
import { useElementOnScreen } from './hooks/useElementOnScreen';
import { AnimateOnShow } from './components/AnimateOnShow';

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
        <AnimateOnShow animationClasses={["show"]} ioOptions={options}>
          <h1>hi</h1>
        </AnimateOnShow>
        </ScrollContainer>
      <ScrollContainer style={{backgroundColor:"turquoise"}} >
      <AnimateOnShow animationClasses={["show"]} ioOptions={options}>
          <h1>hey</h1>
        </AnimateOnShow>
      </ScrollContainer>
      <ScrollContainer style={{backgroundColor:"cornflowerblue"}} >
        <AnimateOnShow animationClasses={["show"]} ioOptions={options}>
          <h1>This is now a component</h1>
          <h2>And we can animate anything</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae voluptatem nesciunt excepturi soluta, itaque, pariatur in odio tempore voluptate quis optio voluptas corrupti eaque reprehenderit quibusdam enim sequi porro. Aliquam, itaque quam.</p>
        </AnimateOnShow>
      </ScrollContainer>
    </div>
  );
};
export default App;
