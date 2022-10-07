import React from "react";
type ScrollAnimationContainerType = {
    children: React.ReactNode,
    href?:React.MutableRefObject<null>
}
export const ScrollAnimationContainer = ({children}:ScrollAnimationContainerType) => {
    return(
        <div className="ScrollAnimationContainer">{children}</div>
    )
}
