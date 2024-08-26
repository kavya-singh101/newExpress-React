import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center my-3'>
            <div className="spinner-border text-primary " >
                <div className="sr-only text-center"></div>
            </div>
            </div>
        )
    }
}
