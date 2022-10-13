import React from "react";
import { useRef } from "react";
type ScrollContainerType={
    children?:React.ReactNode,
    style?:React.CSSProperties
    id?:string
}
export const ScrollContainer = ({children,style,id}:ScrollContainerType) => {
    return (
        <div className="ScrollContainer" style={style} id={id}>
            <div className="scroll-section" >
                {children}
            </div>
        </div>
    );
}