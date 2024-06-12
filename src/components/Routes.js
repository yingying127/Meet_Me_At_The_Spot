import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import Home from './Home';
import HarvardMuseum from './HarvardMuseum';
import HarvardMuseumExhibition from './HarvardMuseumExhibition';
import ArtInstituteOfChicago from './ArtInstituteOfChicago';
import ArtInstituteOfChicagoExhibition from './ArtInstituteOfChicagoExhibition';
import CooperHewitt from './CooperHewitt';
import CooperHewittExhibition from './CooperHewittExhibition';
import Met from './Met';
import Europeana from './Europeana';
import Louvre from './Louvre';

class Routes extends Component {
    constructor() {
        super();
        this.state = {
            harvard: [],
            chicago: [],
            cooper: []
        }
    }
    componentDidMount() {
        fetch('https://api.harvardartmuseums.org/exhibition?venue=HAM&status=current&hasimage=1&apikey=8e787d5e-154a-4abd-877c-06d4c150ee6a&size=50')
        .then(res => res.json())
        .then((data) => {
            this.setState({ harvard: data })
            // console.log(data, 'harvard')
        })
        fetch('https://api.artic.edu/api/v1/exhibitions/search?query[term][is_featured]=true&limit=50&fields=id,title,aic_end_at,aic_start_at,image_url,description,short_description,web_url,artworks_ids,artwork_titles,is_featured/manifest.json')
        .then(res => res.json())
        .then((data) => {
            this.setState({ chicago: data })
            // console.log(data, 'real chicago')
        })
        fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=d9a34c3816794edfc8b8bd433313f42c')
        .then(res => res.json())
        .then((data) => {
            const activeData = data.exhibitions.filter(exhibition => exhibition.is_active === "1")
            //because cooper does not filter through old exhibitions, here is a possible way to:
            const today = new Date().toISOString().slice(0, 10); //cooper api date format
            const currentExhibition = activeData.filter(e => {
                const exhibitionEndDate = e.date_end;
                return exhibitionEndDate > today
            })
            this.setState({ cooper: currentExhibition})
            // console.log(currentExhibition, 'cooper1')
        })

        // fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects?fields=title')
        // .then(res => res.json())
        // .then((data) => {
        //     this.setState({ met: data })
        //     // console.log(data, 'met')
        // })
        // fetch('https://collections.louvre.fr/ark:/53355/cl010061995.json', {mode: "no-cors"})
        // .then((data) => {
        //     this.setState({ louvre: data })
        //     // console.log(data, 'louvreee')
        // })
        // // fetch('https://api.si.edu/openaccess/api/v1.0/content/:id&api_key=Si4jTeolK75j8qglHIg5Zdb3SD4eBlegILEAdYXe')
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
        const { pagination, data } = this.state.chicago;
        const exhibition = this.state.cooper;
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

                    <Route exact path='/cooperhewitt'>
                        <CooperHewitt exhibition={exhibition}/>
                    </Route>
                    <Route exact path='/cooperhewitt/:id'>
                        {({match}) => <CooperHewittExhibition exhibition={exhibition} match={match} />}
                    </Route>

                    <Route exact path='/met'>
                        <Met />
                    </Route>
                    <Route exact path='/europeana'>
                        <Europeana />
                    </Route>
                    <Route exac path='/louvre'>
                        <Louvre />
                    </Route>
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default connect(state => state)(Routes)