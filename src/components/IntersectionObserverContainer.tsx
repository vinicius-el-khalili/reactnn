import React from "react";
type ScrollAnimationContainerType = {
    children: React.ReactNode
}
export const ScrollAnimationContainer = ({children}:ScrollAnimationContainerType) => {
    return(
        <div className="ScrollAnimationContainer">{children}</div>
    )
}
