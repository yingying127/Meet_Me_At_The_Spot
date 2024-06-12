import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import Home from './Home';
import HarvardMuseum from './HarvardMuseum';
import HarvardMuseumExhibition from './HarvardMuseumExhibition';
import ArtInstituteOfChicago from './ArtInstituteOfChicago';
import ArtInstituteOfChicagoExhibition from './ArtInstituteOfChicagoExhibition';
import CooperHewitt from './CooperHewitt';
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
            // console.log(data.records, 'harvard')
        })
        fetch('https://api.artic.edu/api/v1/exhibitions/search?query[term][is_featured]=true&limit=50&fields=id,title,aic_end_at,aic_start_at,image_url,description,short_description,web_url,artworks_ids,artwork_titles,is_featured/manifest.json')
        .then(res => res.json())
        .then((data) => {
            this.setState({ chicago: data })
            // console.log(data, 'real chicago')
        })
        // fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=d9a34c3816794edfc8b8bd433313f42c')
        fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=d9a34c3816794edfc8b8bd433313f42c&query=<QUERY> &on_display=1 &per_page=500')

            //curl -X GET 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=<TOKEN>&query=<QUERY> &accession_number=<ACCESSION_NUMBER> &color=<COLOR> &department_id=<DEPARTMENT_ID> &description=<DESCRIPTION> &on_display=<ON_DISPLAY> &display_date=<DISPLAY_DATE> &exhibition=<EXHIBITION> &exhibition_id=<EXHIBITION_ID> &has_images=<HAS_IMAGES> &has_no_known_copyright=<HAS_NO_KNOWN_COPYRIGHT> &justification=<JUSTIFICATION> &location=<LOCATION> &woe_id=<WOE_ID> &medium=<MEDIUM> &medium_id=<MEDIUM_ID> &period=<PERIOD> &period_id=<PERIOD_ID> &person=<PERSON> &person_id=<PERSON_ID> &role=<ROLE> &role_id=<ROLE_ID> &person_role_id=<PERSON_ROLE_ID> &tag=<TAG> &tag_id=<TAG_ID> &title=<TITLE> &type=<TYPE> &type_id=<TYPE_ID> &year_acquired=<YEAR_ACQUIRED> &year_end=<YEAR_END> &year_start=<YEAR_START> &width=<WIDTH> &height=<HEIGHT> &depth=<DEPTH> &longestside=<LONGESTSIDE> &shortestside=<SHORTESTSIDE>'

        .then(res => res.json())
        .then((data) => {
            this.setState({ cooper: data})
            console.log(data, 'cooper')
            //d9a34c3816794edfc8b8bd433313f42c≈
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
        const { pagination, data } = this.state.chicago
        // const harvard1 = this.state.harvard1
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
                        <CooperHewitt />
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