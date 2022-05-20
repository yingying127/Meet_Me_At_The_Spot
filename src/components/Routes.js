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

class Routes extends Component {
    constructor() {
        super();
        this.state = {
            info: [],
            records: [],
            data: []
        }
    }
    componentDidMount() {
        fetch('https://api.harvardartmuseums.org/exhibition?venue=HAM&status=current&hasimage=1&apikey=8e787d5e-154a-4abd-877c-06d4c150ee6a&size=50')
        .then(res => res.json())
        .then((data) => {
            this.setState({ data: data })
        })
        .catch(console.log)
    }
    render() {
        const { info, records } = this.state.data;
        return (
            <div>
                <h1 className='title'><Link to='/home'>Meet Me at the Spot</Link></h1>
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