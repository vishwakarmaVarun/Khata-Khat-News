import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageurl, newsurl, author, date} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={imageurl?imageurl:"https://i.ytimg.com/vi/rtu35iG0paM/maxresdefault.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By {author? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
              <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem