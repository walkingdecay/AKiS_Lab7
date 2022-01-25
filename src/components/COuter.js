import React, { Component } from "react";
import CInner from './CInner'
import './COuter.css'
import style from './COuter.module.css'

export default class COuter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            st : "Początek"
        }
        console.log( 'COuter - konstruktor' );
    }

    static getDerivedStateFromProps( props, state ){
        console.log("COuter - getDerivedStateFromProps()");
        return null;
    }

    componentDidMount(){
        console.log("COuter - componentDidMount()");
    }

    render() {
        console.log("COuter - render()");
        return(
            <div className='bgClassNormal'>
                <h2 className={style.bgClassModule}>Komponent zewnętrzy</h2>
                <button onClick={this.stateChange}>Zmiana stanu</button>
                <CInner/>
            </div>
        )
    }

    stateChange = () => {
        this.setState({st: "Klik"})
    }

    shouldComponentUpdate(){
        console.log("COuter - shouldComponentUpdate()")
        return true
    }

    getSnapshotBeforeUpdate( pprops, pstate ){
        console.log("COuter - getSnapshotBeforeUpdate()")
        return null
    }

    componentDidUpdate(){
        console.log("COuter - componentDidUpdate()")
    }
}