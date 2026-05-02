import "./cards/Cards.scss";
const count = 0
count ,setcount
function Cards(){
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=> count ,setcount(+1)}>pilus</button>
        <button onClick={()=> count ,setcount(0)}>res</button>
        <button onClick={()=> count, setcount(-1)}>minus</button>
        </>
    )
}
export default Cards;