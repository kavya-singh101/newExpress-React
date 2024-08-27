import React from 'react'

const NewsItem =(props)=> {
    
        let { title, description, imgUrl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{right:"0%",zIndex:"1"}}>{source}</span>
                    <img src={imgUrl} className="card-img-top" alt="..." height="250" />
                    <div className="card-body">
                        <h5 className="card-title">{title?title:"No title available"}...</h5>
                        <p className="card-text">{description?description:"No discription available"}...</p>
                        <p className="card-text">
                            <small className="text-body-secondary">By: <strong> {author}</strong></small> <br />
                            <small className="text-body-secondary">On: <strong>{new Date(date).toGMTString().slice(0, 11)}</strong></small>
                        </p>
                        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )

}

export default NewsItem
