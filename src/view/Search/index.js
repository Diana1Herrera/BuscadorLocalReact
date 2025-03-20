import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./style.css"
import data from "../../data/users.json";
import SearchResults from "./components/SearchResults";

export default function Search(){
    const [isAtTop, setIsAtTop] = useState (false);
    const [userData, setUserData] = useState (data);
    const [results,setResult] = useState ([]);

    const handleCloseSearch = () => {
        setIsAtTop(false);
        setResult([]);
    }

    const handleSearchClick = (searchText) =>{
        setIsAtTop(true);
        if(userData?.length){
           const searchTextMinuscula = searchText.toLowerCase();
           const filterData= userData.filter((value) =>{
                return (
                (value.name.toLowerCase().includes(searchTextMinuscula) ||
                 value.phone.toLowerCase().includes(searchTextMinuscula)  ||
                 value.username.toLowerCase().includes(searchTextMinuscula) ||
                 value.email.toLowerCase().includes(searchTextMinuscula)
                )) ;
            });
            setResult(filterData);
        }
    }
    return(
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
           <SearchBox 
           onSearch ={handleSearchClick} 
           onClose ={handleCloseSearch}
            isSearching={isAtTop}/>
            <SearchResults 
            results= {results}
             isSearching={isAtTop}/>
        </div>
 
    );
}