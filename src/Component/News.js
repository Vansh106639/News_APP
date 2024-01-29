import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Speener from './Speener';
export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 9,
  }
 /*static PropTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
  }*/
  constructor() {
    super();

    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: true
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=465be5904a054965a01789ac85f63a4c&page=1&pagesize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }
  handlePreviousClick = async () => {
    console.log("previous")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=465be5904a054965a01789ac85f63a4c&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=465be5904a054965a01789ac85f63a4c&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ loading: false });
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }
  render() {
    return (
      <>
        <div className='container my-3'>
          {this.state.loading && <Speener />}
          <h1 className="text-center">Cricket Top headlines</h1>
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-md-4 mt-3" key={element.url}>
                <NewsItems title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url}  author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page <= 1} className="btn btn-dark " onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </>
    )
  }
}

export default News
