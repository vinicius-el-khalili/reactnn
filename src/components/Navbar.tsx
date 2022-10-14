
type NavbarProps = {
    idList:string[],
    scrollToId:(id:string)=>void
}
export const Navbar = ({idList,scrollToId}:NavbarProps) => {
    return(
        <div className="Navbar">
            {idList.map((id)=>(
                <button key={"sb"+id} onClick={() => scrollToId(id)}/>
            ))}
        </div>
    )
}