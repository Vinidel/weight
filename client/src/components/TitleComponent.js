import React, { Component } from 'react'
import axios from 'axios';
import {BASE_API_URL} from '../config';
class PingComponent extends Component {


    componentWillMount() {
        axios.get(`${BASE_API_URL}/api/ping`)
            .then((response) => console.log('Ok'))
            .catch(function (error) {
                console.log('hey', error);
            });

    }

    render() {
        return <h1>My.Weight</h1>;
    }
}

export default PingComponent; 