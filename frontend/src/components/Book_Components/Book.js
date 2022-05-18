import React ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
import './Books.css';
const Book=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCv7UzLO-1N4kqnsZtSmxzsQShRnheKb1k'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <div className="book_main">
            <div className="book_upper">
                <div className="book_header">
                    <div className="book_row1">
                        <h1>A room without books is like<br/> a body without a soul.</h1>
                    </div>
                    <div className="book_row2">
                        <h2>Find Your Book</h2>
                        <div className="book_search">
                            <input type="book_text" placeholder="Enter Your Book Name"
                            value={search} onChange={e=>setSearch(e.target.value)}
                            onKeyPress={searchBook}/>
                            <button><i className="fas fa-search"></i></button>
                        </div>
                        <img src="./bg1.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="book_lower">
                <div className="book_container">{
                    <Card book={bookData}/>
                } 
                </div>
            </div>
        </div>
    )
}
export default Book;