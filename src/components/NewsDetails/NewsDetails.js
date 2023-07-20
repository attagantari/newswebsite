import React from 'react'
import './NewsDetails.css'
import '../NewsList/NewsList.css'

const NewsDetails = ({title, description, url, urlToImage, isHaedline}) => {
  return (
    <div className={isHaedline ? "news-details-container-headline" : "news-details-container"}>
      <img className='news-details-image' src={urlToImage} alt={title} />
      <div className='news-details-content'>
        <h3><a href={url}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default NewsDetails