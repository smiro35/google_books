import React, {useState} from 'react';
import API from '../../utils/API'
import Book from '../Book'


function MySearch (){
    const [searchTerm, setSearchTerm] = useState("");
    const [apiResults, setApiResults] = useState([]);

    let inputChange = event => {
        setSearchTerm(event.target.value)
    }

    let btnSearch = ()=>{

        API.searchBooks(searchTerm)
        .then(data=>{   
            console.log(data.data.items)
            setApiResults(data.data.items)
        })
    }

    return(
        <div>
            <br />       
            <input type="text" onChange={inputChange}></input>
            <button onClick={btnSearch}>Search</button>

            {apiResults.map((e,index)=><Book kind={e.kind} etag={e.etag} key={index} />)}      
        </div>

    )

}

export default MySearch;