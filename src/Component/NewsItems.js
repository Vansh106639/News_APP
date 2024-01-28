import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className='my-3 container'>
        <div className="card">
          <img src={!imageUrl?"https://cdn.vox-cdn.com/thumbor/aJZ8CWwDzIdnLuHSeZd54lD3k3Y=/0x0:4282x2242/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25246602/1950954917.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems


