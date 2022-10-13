import React, { useRef } from "react"
import { useElementOnScreen } from "../hooks/useElementOnScreen"

type AnimateOnShowProps = {
    children?:React.ReactNode,
    postAnimation:string[],
    preAnimation:string[],
    ioOptions:object // intersection observer options
}

export const AnimateOnShow = ({children,postAnimation,preAnimation,ioOptions}:AnimateOnShowProps) => {
    const target = useRef(null)
    const isVisible = useElementOnScreen(ioOptions,target)
    return(
        <div className={!isVisible?preAnimation.join(" "):postAnimation.join(" ")} ref={target}>
            {children}
        </div>
    )
}