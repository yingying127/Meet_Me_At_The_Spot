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
import BrooklynMuseum from './BrooklynMuseum';

class Routes extends Component {
    constructor() {
        super();
        this.state = {
            harvard: [],
            chicago: [],
            cooper: [],
            brooklyn: []
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
            const today = new Date().toISOString().slice(0, 10); //cooper api date format
            const currentExhibition = activeData.filter(e => {
                const exhibitionEndDate = e.date_end;
                return exhibitionEndDate > today
            })
            this.setState({ cooper: currentExhibition})
            // console.log(currentExhibition, 'cooper1')
        })

        fetch('https://www.brooklynmuseum.org/api/v2/exhibition', {
            headers: {'api_key': 'sVXA0sXGfqHh1jvft3oX9ecldPYkh6Bq'}
        })
        .then(res => res.json())
        .then((data) => {
            const brooklynkdata = data.data
            this.setState({ brooklyn: brooklynkdata })
            console.log(brooklynkdata, 'bk')
        })

        .catch(console.log)
    }
    render() {
        const { info, records } = this.state.harvard;
        const { pagination, data } = this.state.chicago;
        const exhibition = this.state.cooper;
        const brooklyndata = this.state.brooklyn;
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
                    <Route exact path='/brooklynmuseum'>
                        <BrooklynMuseum brooklyndata={brooklyndata}/>
                    </Route>
{/* 
                    <Route exact path='/met'>
                        <Met />
                    </Route> */}
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default connect(state => state)(Routes)