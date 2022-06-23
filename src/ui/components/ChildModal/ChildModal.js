import styled from "styled-components"

export const ChildModal = ({users}) =>{

    return(<>
    {users.map((user,index)=>{
        return(<>
        <Div>
        <h2>{user.name.first}</h2>
        <h2>{user.gender}</h2>
        <h2>{user.nat}</h2>
        <h2>{user.phone}</h2>
        <h2>{user.id?.name}</h2>
        </Div>       
        </>)       
    })}    

    </>)
}
const Div = styled("div")`
    background:gray;
    display:flex;
    gap:40px;
    padding:0;
`