import React from "react";
import { useRef } from "react";
import { useElementOnScreen } from "../hooks/useElementOnScreen";

type ScrollContainerType={
    children?:React.ReactNode,
    style?:React.CSSProperties,
    id?:string,
    setScrollPage:React.Dispatch<React.SetStateAction<string>>
}
export const ScrollContainer = ({children,style,id,setScrollPage}:ScrollContainerType) => {
    const target = useRef(null)
    const isVisible = useElementOnScreen({
        root:null,
        rootMargin:'0px 0px 0px 0px',
        threshold:.51,
      },target)
    if (isVisible){
        setScrollPage(id?.replace("sc","") !)
    }
    return (
        <div className="ScrollContainer" style={style} id={id} ref={target}>
            <div className="scroll-section" >
                {children}
            </div>
        </div>
    );
}