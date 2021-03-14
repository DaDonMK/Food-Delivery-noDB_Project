import React, {Component} from 'react'

export default class Total extends Component{
    render(){
        let totalMapped = this.props.totalArr.reduce((acc, curr) => (
            acc + curr
        ))
        console.log(this.props.totalArr)
        return(
            <p>TOTAL: ${totalMapped}</p>
        )
    }
}