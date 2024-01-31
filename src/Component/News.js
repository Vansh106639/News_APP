import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Speener from './Speener';
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 9,
  }
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: true
    }
    document.title = `Newsomania - ${this.props.category}`
  }
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=465be5904a054965a01789ac85f63a4c&page=1&pagesize=${this.props.pageSize}`
    this.setState({ loading: true });
    this.props.setProgress(40);
    let data = await fetch(url);
    this.props.setProgress(70);
    let parsedData = await data.json();
    this.props.setProgress(85);
    this.setState({ loading: false });
    this.props.setProgress(100);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage, loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=465be5904a054965a01789ac85f63a4c&page=${nextPage}&pagesize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });
  };


  render() {
    return (
      <>
        <div className='container my-3'>
          <h1 className="text-center">Top Headlines - {this.props.category} </h1>
          {this.state.loading && <Speener />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={<Speener />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
                  return <div className="col-md-4 mt-3" key={element.url}>
                    <NewsItems title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }
}

export default News

