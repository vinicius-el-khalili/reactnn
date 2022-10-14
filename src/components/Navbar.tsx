
type NavbarProps = {
    idList:string[],
    scrollToId:(id:string)=>void,
    scrollPage:string
}
export const Navbar = ({idList,scrollToId,scrollPage}:NavbarProps) => {
    return(
        <div className="Navbar">
            {idList.map((id)=>(
                <button 
                    key={"sb"+id}
                    onClick={() => scrollToId(id)}
                    style={id===scrollPage?{
                        opacity:"1"
                    }:{
                        opacity:"0.5"
                    }}
                />
            ))}
        </div>
    )
}