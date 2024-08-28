import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import noPreviewImg from '../assets/no-preview-available.png'
import InfiniteScroll from "react-infinite-scroll-component";


const NewsComponent = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    



    const upadtePage = async () => {
        props.setProgress(10);
        const apiUrl = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(apiUrl)
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }


    useEffect(() => {
        upadtePage();
        document.title = `NewsExpress - ${props.category}`
    }, [])

    const handleNext = async () => {
        if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
            setPage(page + 1)
            upadtePage();
        }

    }
    const handlePrev = async () => {
        setPage(page - 1)
        upadtePage();
    }

    const fetchMoreData = async () => {
        const apiUrl = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(apiUrl);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults)
    };



    return (
        <div className='container my-3 '>
            <h1 className="text-center" style={{ margin: "35px 0px",marginTop:"90px" }}>News Express - {props.category}</h1>

            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<div className='d-flex justify-content-center'>
                    <Spinner />
                </div>}>
                <div className="container">
                    <div className="row ">
                        {articles.map((element, index) => {
                            if (!element || !element.title) {
                                return null; // Skip this element if it is undefined or has no title
                            }
                            return <div className="col-md-4" key={`${element.url}-${index}`}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 70) : ""}
                                    description={element.description ? element.description.slice(0, 150) : ""}
                                    imgUrl={element.urlToImage ? element.urlToImage : noPreviewImg}
                                    newsUrl={element.url} author={element.author ? element.author : "*Unavailable*"}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

        </div>
    )

}

NewsComponent.defaultProps = {
    // country:'in',
    pageSize: 6,
    category: "General"
}
NewsComponent.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default NewsComponent
