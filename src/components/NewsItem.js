import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl}=this.props
    
    
    return (
      <>
         <div className="card my-2" style={{width: "18rem"}}>
  <img className="card-img-top" src={imageUrl?imageUrl:"https://imgs.search.brave.com/cp7f6QykPYl45glpvxSx5CWlUF76UQ1AhxnPuh5YCwg/rs:fit:808:632:1/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RzL21heF84/MDgvMjNjZjMzNTU4/NDE5MzMuWTNKdmND/dzROalVzTmpjM0xE/RTJPQ3d3LnBuZw"}/>
  <div className="card-body">
    <h5 className="card-title">{title?title.substring(0,50)+"...":""}</h5>
    <p className="card-text">{description?description.substring(0,100)+"...":""}</p>
    <div className='text-center'><a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a></div>
  </div>
  </div>
      </>
    )
  }
}

export default NewsItem
