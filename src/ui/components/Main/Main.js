import { List } from "../List/List"
import { Title } from "../Title/Title"

export const Main = () =>{
    
    return(<>
    <Title title={"Pharma.inc"} 
           subtitle={
    <span>detailed patient  <strong> search </strong></span>}/>    
    <List/>
    </>)
}