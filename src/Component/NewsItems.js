import React from 'react'

const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3 container'>
      <div className="card">
        <img src={!imageUrl ? "https://th.bing.com/th/id/R.eebff4d2e1359d69a57af3c0eb5b7210?rik=TE%2b%2fYJ3DvPrhgQ&riu=http%3a%2f%2fmycreativecubby.weebly.com%2fuploads%2f6%2f3%2f5%2f9%2f63591523%2fbethany-sapigao-my-photoshop-album-1.jpg&ehk=VMrxfh3GPZ3KUgCPcKuIHjQdPOIH7bUTwP7eORzPDNI%3d&risl=&pid=ImgRaw&r=0" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p style={{ color: "green" }}> {source}</p>
          <p className='card-text'><small>By {author == null ? "unknown" : author} on {(new Date(date)).toGMTString()} </small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItems


