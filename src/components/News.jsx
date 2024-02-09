import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=73c4a0883c584d46b8763f7fc2275edb&page=1&pageSize=20";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePrevClick = async () => {
      console.log("preffd")
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=73c4a0883c584d46b8763f7fc2275edb&page=${this.state.page - 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
      })
    }

    handleNextClick = async () => {
      console.log("next")
      if(this.state.page >= Math.ceil(this.state.totalResults/20)){

      }else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=73c4a0883c584d46b8763f7fc2275edb&page=${this.state.page + 1}&paseSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
        })
      }
      
    }

  render() {
    return (
        <div className='container my-3'>
            <h1>Khata-Khat-News - Top Headlines</h1>
            <div className="row">
              {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url} />
                </div>
              })}
            </div>
            <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>	&larr; Previous</button>
              <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next	&rarr;</button>
            </div>
        </div>
    )
  }
}

export default News