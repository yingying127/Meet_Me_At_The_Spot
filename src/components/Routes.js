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
import { connect } from 'react-redux';
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import Home from './Home';
import HarvardMuseum from './HarvardMuseum';
import HarvardMuseumExhibition from './HarvardMuseumExhibition';
import ArtInstituteOfChicago from './ArtInstituteOfChicago';
import ArtInstituteOfChicagoExhibition from './ArtInstituteOfChicagoExhibition';

class Routes extends Component {
    constructor() {
        super();
        this.state = {
            harvard: [],
            chicago: [],
            smith: [],
        }
    }
    componentDidMount() {
        fetch('https://api.harvardartmuseums.org/exhibition?venue=HAM&status=current&hasimage=1&apikey=8e787d5e-154a-4abd-877c-06d4c150ee6a&size=50')
        .then(res => res.json())
        .then((data) => {
            this.setState({ harvard: data })
            console.log(data.records, 'harvard')
        })
        fetch('https://api.artic.edu/api/v1/exhibitions/search?query[term][is_featured]=true&limit=50&fields=id,title,aic_end_at,aic_start_at,image_url,short_description,web_url,artist_ids,artworks_ids,artwork_titles,is_featured/manifest.json')
        .then(res => res.json())
        .then((data) => {
            this.setState({ chicago: data })
        })
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects?fields=title')
        .then(res => res.json())
        .then((data) => {
            this.setState({ met: data })
            // console.log(data, 'met')
        })
        // fetch('https://api.si.edu/openaccess/api/v1.0/content/:id&api_key=Si4jTeolK75j8qglHIg5Zdb3SD4eBlegILEAdYXe')
        // //Si4jTeolK75j8qglHIg5Zdb3SD4eBlegILEAdYXe
        // .then(res => res.json())
        // .then((data) => {
        //     this.setState({ smith: data })
        //     console.log(data, 'smith')
        // })
        .catch(console.log)
        
    }
    render() {
        const { info, records } = this.state.harvard;
        const { pagination, data } = this.state.chicago
        return (
            <div>
                <Switch>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <Route exact path='/harvardmuseum'>
                        <HarvardMuseum info={info} records={records} />
                    </Route>
                    <Route exact path='/harvardmuseum/:id'>
                        {({match}) => <HarvardMuseumExhibition records={records} match={match} />}
                    </Route>
                    <Route exact path='/aic'>
                        <ArtInstituteOfChicago pagination={pagination} data={data} />
                    </Route>
                    <Route exact path='/aic/:id'>
                        {({match}) => <ArtInstituteOfChicagoExhibition data={data} match={match} />}
                    </Route>
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default connect(state => state)(Routes)

// const App = connect(
//     state => state,
//     // (dispatch) => {
//     //     return {
//     //         bootstrap: async() => {
//     //             dispatch(fetchExhibitions)
//     //         }
//     //     }
//     // }
// )(class App extends Component {
//     // async componentDidMount() {
//     //     this.props.bootstrap();
//     // }
//     constructor() {
//         super()
//         this.state = {
//             info: [],
//             records: []
//         }
//     }
//     componentDidMount() {
//         fetch('https://api.harvardartmuseums.org/exhibition?venue=HAM&status=current&hasimage=1&apikey=8e787d5e-154a-4abd-877c-06d4c150ee6a&size=50')
//         .then(res => res.json())
//         .then((data) => {
//             this.setState({ info: data.info, records: data.records })
//         })
//         .catch(console.log)
//     }
//     render() {
//         return (
//             <div>
//                 <h1 className='title'><Link to='/'>Meet Me at the Spot</Link></h1>
//                  <Routes>
//                      {/* <Route path='/' exact element={<Home />} /> */}
//                      <Route path='/harvardmuseum' HarvardMuseum info={this.state.info} records={this.state.records} />
//                      {/* <Route path='/harvardmuseum' component={HarvardMuseum} info={this.state.info} records={this.state.records} /> */}
//                      {/* <Route path='/harvardmuseum/:id' element={<HarvardMuseumExhibition />} /> */}
//                  </Routes>
//              </div>
//         )
//     }
// })

// render(<Provider store={store}>
//         <Router>
//             <App />
//         </Router>
//     </Provider>, 
// document.querySelector('#app'));