import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsDetails from '../NewsDetails/NewsDetails';

const NewsList = () => {
  const [headlineArticles, setHeadlineArticles] = useState([]);
  const [otherArticles, setOtherArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get('https://newsapi.org/v2/everything?q=saham&apiKey=90009d14c3e14a68aedffb9629a80052');
      const articles = response.data.articles;
      const newsapi = ['Purem Aapico', 'Renault', 'Proton', 'Bank', 'Aztiq', 'Upacara', 'Innobic', 'Mehrere', 'Fermented', 'Jiří', 'Saudi', 'Publicnow', 'Alexandre', 'Dinda', 'Ernik', 'Oktavia', 'Hazelen', 'Eka', 'Bank', 'Admin'];

      // Gunakan slice() untuk memisahkan berita ke dalam headlineArticles dan otherArticles
      setHeadlineArticles(articles.slice(0, 1));
      setOtherArticles(articles.slice(1));
    };

    getArticles();
  }, []);

  return (
    <div>
      {/* Section untuk headline */}
      <div style={{flexDirection: 'row', marginRight: 20, textAlign:'right'}}>
        {headlineArticles.map((article, index) => (
          <NewsDetails
            key={index}
            sx={{ minHeight: '500px', m: 2 }}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        ))}
      </div><br />

      {/* Section untuk berita lainnya */}
      <br />
      <h1>Latest News</h1>
      <div style={{ display: 'grid', listStyle: 'none', gridTemplateColumns: 'repeat(3, auto)', gridTemplateRows: 'repeat(2, auto)' }}>
        {otherArticles.map((article, index) => (
          <NewsDetails
            key={index}
            sx={{ minHeight: '500px', m: 2 }}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;