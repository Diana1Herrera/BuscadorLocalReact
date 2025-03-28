import SearchResultsItem from "./SearchResultsItem";

export default function SearchResults({results, isSearching}){
    return(
    <div style = {{width:"100%", padding:" 0rem 2rem 0rem 2rem"}}>
        {!results?.length && isSearching && <p style={{color : "red"}} > No existen resultados.</p>}
        {results?.map((value) =>{
            return(
               <SearchResultsItem key = {value.id} {...value}/>
            );
        })}
    </div>
    );
}