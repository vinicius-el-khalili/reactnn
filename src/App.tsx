import React from 'react';
import { ScrollContainer } from './components/ScrollContainer';
import { ScrollAnimationContainer } from './components/IntersectionObserverContainer';
import { useState, useRef, useMemo, useEffect } from 'react';
function App() {
  const [isVisible,setIsVisible]=useState(false); 
  const targetRef=useRef(null);
  
  const intersectionCallback = (entries:any[]) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting) 
    console.log('ok')
  };
  
  const options = useMemo(()=>{
    return {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };
  },[]);

  useEffect(()=>{
    const observer = new IntersectionObserver(intersectionCallback,options);
    const currentTarget = targetRef.current;
    if(currentTarget) observer.observe(currentTarget)
    return ()=>{
      if(currentTarget) observer.unobserve(currentTarget)
    }
  },[targetRef,options])

  return (
    <div className="App">
      <div className='Header'>
        <h2>{!isVisible ? 'not in viewport' : 'in viewport'}</h2>
      </div>
      <ScrollContainer style={{backgroundColor:"cornflowerblue"}} >
        <ScrollAnimationContainer>ScrollAnimationContainer</ScrollAnimationContainer>
      </ScrollContainer>
      <ScrollContainer style={{backgroundColor:"coral"}} >This is...</ScrollContainer>
      <h1 className={!isVisible?"hidden":"show"} ref={targetRef} >hello</h1>
      <ScrollContainer style={{backgroundColor:"turquoise"}} >...Awesome</ScrollContainer>
    </div>
  );
}

export default App;
