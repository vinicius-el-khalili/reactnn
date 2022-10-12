import React, { useState, useMemo, useEffect } from "react";
export const useElementOnScreen = (options:object,targetRef:React.MutableRefObject<null>) => {
  const [isVisible,setIsVisible]=useState(false);
  const callbackfunction=(entries:any)=>{
    const [entry]=entries;
    setIsVisible(entry.isIntersecting)
  };
  const optionsMemo = useMemo(()=>{
    return options;
  },[options]);
  useEffect(()=>{
    const observer = new IntersectionObserver(callbackfunction,optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return ()=>{
      if (currentTarget) observer.unobserve(currentTarget);
    }
  },[targetRef,optionsMemo])
  return isVisible;
};