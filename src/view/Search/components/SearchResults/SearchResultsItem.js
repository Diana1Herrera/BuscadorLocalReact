
export default function SearchResultsItem({name,email}){
    return(
        <div  style={{backgroundColor : "#E8E7E7", marginTop:5, marginBottom:5, padding:10,width:"100%" }}>
                    <p style={{textAlign:"center"}}>{name}</p>
                    <p style={{textAlign:"center"}}>{email}</p>
        </div>
    );
}