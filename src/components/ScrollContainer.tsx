import React from "react";
type ScrollContainerType={
    children?:React.ReactNode,
    style?:React.CSSProperties
}
export const ScrollContainer = ({children,style}:ScrollContainerType) => {
    return (
        <div className="ScrollContainer" style={style}>
            <div className="scroll-section">
                {children}
            </div>
        </div>
    );
}