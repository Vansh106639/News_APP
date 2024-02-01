import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Speener from './Speener';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
  const [article, setarticle] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);
  const [totalResults, settotalResults] = useState(0);
  //  document.title = `Newsomania - ${props.category}`
  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=334a8ff6e1fa4d56a07e55e481202d76&page=1&pagesize=${props.pageSize}`
    setloading(true);
    props.setProgress(40);
    let data = await fetch(url);
    props.setProgress(70);
    let parsedData = await data.json();
    props.setProgress(85);
    setloading(false);
    props.setProgress(100);
    setarticle(parsedData.articles)
    settotalResults(parsedData.totalResults)

  }
  useEffect(() => {
    updateNews();
    /* |for remove the warning*/
    //eslint-disable-next-line   
  }, [])

  const fetchMoreData = async () => {
    const nextPage =page+1
    setpage(nextPage)
    setloading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=334a8ff6e1fa4d56a07e55e481202d76&page=${nextPage}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticle(article.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    setloading(false)

  };
  return (
    <>
      <div className='container my-3'>
        <h1 className="text-center" style={{ marginTop: '90px' }}>Top Headlines - {props.category} </h1>
        {loading && <Speener />}
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length < totalResults}
          loader={<Speener />}
        >
          <div className="container">
            <div className="row">
              {article.map((element) => {
                return <div className="col-md-4 mt-3" key={element.url}>
                  <NewsItems title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 9,
};
export default News;