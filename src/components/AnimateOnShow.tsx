import React, { useRef } from "react"
import { useElementOnScreen } from "../hooks/useElementOnScreen"

type AnimateOnShowProps = {
    children?:React.ReactNode,
    animationClasses:string[],
    ioOptions:object // intersection observer options
}

export const AnimateOnShow = ({children,animationClasses,ioOptions}:AnimateOnShowProps) => {
    const target = useRef(null)
    const isVisible = useElementOnScreen(ioOptions,target)
    return(
        <div className={!isVisible?"hidden":animationClasses.join(" ")} ref={target}>
            {children}
        </div>
    )
}