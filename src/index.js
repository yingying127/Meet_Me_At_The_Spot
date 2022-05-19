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
import { connect, Provider } from 'react-redux';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import store, { fetchExhibitions } from './store'
import Home from './components/Home';
import HarvardMuseum from './components/HarvardMuseum';
import HarvardMuseumExhibition from './components/HarvardMuseumExhibition';
import Infos from './components/Infos';
import Records from './components/Records';

const App = connect(
    state => state,
    // (dispatch) => {
    //     return {
    //         bootstrap: async() => {
    //             dispatch(fetchExhibitions)
    //         }
    //     }
    // }
)(class App extends Component {
    // async componentDidMount() {
    //     this.props.bootstrap();
    // }
    render() {
        return (
            <div>
                <h1 className='title'><Link to='/'>Meet Me at the Spot</Link></h1>
                 <Routes>
                     <Route path='/' exact element={<Home />} />
                     <Route path='/harvardmuseum' element={<HarvardMuseum />} />
                     <Route path='/harvardmuseum/:id' element={<HarvardMuseumExhibition />} />
                 </Routes>
             </div>
        )
    }
})

render(<Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
    </Provider>, 
    document.querySelector('#root'));