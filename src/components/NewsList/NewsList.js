import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsDetails from '../NewsDetails/NewsDetails';

const NewsList = () => {
  // State dan useEffect tetap sama seperti sebelumnya 
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
      <div className='nav-hero'>
        <div className='nav-section'>
          <div className='hero-grid'>
        {/* Elemen untuk hero section */}
        {headlineArticles.map((article, index) => (
          <NewsDetails
          key={index}
          style={{ fontSize: '20px', fontWeight: 'bold', margin:'20px'}}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
          isHaedline={true}
          />
          ))}
        </div>
        </div>
      </div>
      <br />

      {/* pemisah antara section headline dan berita lainnya */}
      <div style={{ textAlign:'left', margin:'20px 0', borderBottom:'1px solid #ccc' }}>
      <h1>Latest News</h1>
      </div>
      {/* Section untuk berita lainnya */}
      <div 
      style={{ display: 'grid',
       gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px', 
        position: 'relative' }}>
        {otherArticles.map((article, index) => (
          <NewsDetails
            key={index}
            style={{ minHeight: '500px', margin: '2px' }} // Gunakan style bukan sx
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