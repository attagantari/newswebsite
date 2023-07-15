import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsDetails from '../NewsDetails/NewsDetails'

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=saham&apiKey=90009d14c3e14a68aedffb9629a80052')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    },[])
  return (
    <div style={{display: 'grid', listStyle: 'none', gridTemplateColumns: 'repeat(3, auto)', gridTemplateRows: 'repeat(2, auto)'}}>
        {articles.map(article => {
            return (
                <NewsDetails sx={{minHeight:'500px', m:2 }}
                    title={article.title}
                    description={articles.description}
                    url={article.url}
                    urlToImage={article.urlToImage}
                />
            )
        })}
        </div>
  )
}

export default NewsList