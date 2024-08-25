import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import noPreviewImg from '../assets/no-preview-available.png'

// 4b7217bf8464443589c80acd6f86dc88 vishav
// a0f48b0a27b54ca6ad5af463fbfcf11c mine

export class NewsComponent extends Component {

    static defaultProps = {
        // country:'in',
        pageSize: 6,
        category: "General"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title=`NewsExpress - ${this.props.category}`
    }

    async upadtePage() {
        const apiUrl = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=4b7217bf8464443589c80acd6f86dc88&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(apiUrl)
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        // run after render
        // let apiUrl = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=4b7217bf8464443589c80acd6f86dc88&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(apiUrl)
        // let parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
        this.upadtePage();
        // this.setState({articles: parsedData.articles});
    }

    handleNext = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            // let apiUrl = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=4b7217bf8464443589c80acd6f86dc88&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            // this.setState({ loading: true });
            // let data = await fetch(apiUrl)
            // let parsedData = await data.json();
            // this.setState({
            //     page: this.state.page + 1,
            //     articles: parsedData.articles,
            //     loading: false
            // })

            await this.setState({page: this.state.page + 1,})
            this.upadtePage();
        }

    }
    handlePrev = async () => {
        // let apiUrl = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=4b7217bf8464443589c80acd6f86dc88&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(apiUrl)
        // let parsedData = await data.json();
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        await this.setState({page: this.state.page - 1})
        this.upadtePage();
    }

    render() {
        return (
            <div className='container my-3 '>
                <h1 className="text-center" style={{ margin: "35px 0px" }}>News Express - {this.props.category}</h1>
                {this.state.loading && <div className='d-flex justify-content-center'>
                    <Spinner />
                </div>}
                <div className="row ">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 70) : ""} description={element.description ? element.description.slice(0, 150) : ""} imgUrl={element.urlToImage ? element.urlToImage : noPreviewImg} newsUrl={element.url} author={element.author ? element.author : "*Unavailable*"} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between my-2'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" id="nxt" onClick={this.handlePrev}>&larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" id="prev" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default NewsComponent
