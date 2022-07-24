import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
//  {category}= this.this.props
  constructor(props)
  {
    super(props)
    this.state={
      articles: [],
      loading: false ,
      page:1
    };
    {this.props.category==="general"?document.title="ABTAK-Home":document.title="ABTAK-"+this.props.category}
    // document.title=this.props.category;
  }
  async componentDidMount(){
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=caafc59079244e0eb390d770f83d8d2e&page=${this.state.page}&pageSize=20`;
   this.setState({loading:true});
   let data =await fetch(url)
   let parsedData= await data.json();
   this.setState({loading:false});
  this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults});

  }
  nextpage=async()=>{
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/20))){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=caafc59079244e0eb390d770f83d8d2e&page=${this.state.page+1}&pageSize=20`;
    this.setState({loading:true});
    let data =await fetch(url)
    let parsedData= await data.json();
    this.setState({loading:false});
   this.setState({articles: parsedData.articles,
  page:this.state.page+1});}
  }
  prevpage=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=caafc59079244e0eb390d770f83d8d2e&page=${this.state.page-1}&pageSize=20`;
    this.setState({loading:true});
    let data =await fetch(url)
    let parsedData= await data.json();
    this.setState({loading:false});
   this.setState({articles: parsedData.articles,
  page:this.state.page-1});
  }
  render() {
    return (
       
     
    <div className="container my-4">
        {this.state.loading&&<Spinner/>}
      <div className="row">
      {this.state.articles.map((element)=>{
        return  <div className="col-md-4 " key={element.url}>
        <NewsItem title={element.title} description={element.description} newsUrl={element.url} imageUrl={element.urlToImage} alt="Card image cap"/>
        </div>
      })
      }
       
       
      </div>
      <div className="d-flex justify-content-between my-4">
        <button className="btn btn-success" onClick={this.prevpage} disabled={this.state.page===1}>&larr; PREVIOUS PAGE  </button>
        <button className="btn btn-success" onClick={this.nextpage} disabled={(this.state.page+1>Math.ceil(this.state.totalResults/20))}>NEXT PAGE  &rarr;</button>
      </div>
    </div>

    
    )
  }
}

export default News