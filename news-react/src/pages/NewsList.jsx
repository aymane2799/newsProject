import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_NEWS } from '../GraphQL/Queries'
import NewsCard from '../components/NewsCard';

function NewsList() {

    const {loading, data} = useQuery(LOAD_NEWS)

    const [newsList, setNews] = useState([]);

    useEffect(() => {
        if(data){
            console.log(data.allNews)
            setNews(data.allNews);
        }
        if(loading){
            console.log("Loading ...")
        }
    }, [data]);

    return (
        <>
            {
               <div className="row justify-content-around" style={{ diplay:"flex", flexWrap:"wrap", marginLeft:"auto", marginRight:"auto" }}>
                   {
                       newsList.length > 11 ? 
                       newsList.slice(0,15).map((val,index) => (
                        <NewsCard key={index} title={val.title} body={val.body} />
                       ))
                       :
                       newsList.map((val,index) => (
                           <NewsCard key={index} title={val.title} body={val.title} />
                       ))
                   }
               </div>
            }
         
        </>
    )
}

export default NewsList
