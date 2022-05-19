// // find objects with images 
// var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
// var queryString = $.param({
//     apikey: "8e787d5e-154a-4abd-877c-06d4c150ee6a",
//     hasimage: 1
    
// });

// $.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
//     console.log(data); 
//     var records = data.records
//     var title = records.map(record => record.title)
//     var content = "<p>" + title.join('<br />')
//     $("#title").append(content)
// });

import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Infos from './components/Infos'
import Records from './components/Records'

class App extends Component {
    constructor() {
        super();
        this.state = {
            infos: [],
            records: []
        }
    }
    async componentDidMount() {
        try {
          fetch('https://api.harvardartmuseums.org/exhibition?venue=HAM&status=current&hasimage=1&apikey=8e787d5e-154a-4abd-877c-06d4c150ee6a&size=100')
            .then(res => res.json())
            .then((data) => {
                this.setState({ infos: data.info, records: data.records })
                console.log(data.info, 'info', data.records, 'records')
            })
        }
        catch(ex) {
            console.log(ex)
        }
    }
    render() {
        return (
            <div>
                <div>
                    {/* <h5>Exhibition Location</h5>
                    <h5>Base Image Url:</h5> */}
                    <Route path='/infos' component={Infos} />
                    <Route path='/records' component={Records} />
                </div>
                {/* <div>
                    <h5>Title</h5>
                    <p>Century:</p>
                    <p>Technique:</p>
                </div> */}
            </div>
        )
    }
}

render(<HashRouter>
        <App />
    </HashRouter>, 
    document.querySelector('#root'));