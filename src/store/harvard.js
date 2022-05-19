const FETCH_EXHIBITIONS = 'FETCH_EXHIBITIONS'

const _fetchExhibitions = (exhibitions) => ({ type: FETCH_EXHIBITIONS, exhibitions })

export const fetchExhibitions = () => {
    return async(dispatch) => {
        try {
            // rest.get("https://api.harvardartmuseums.org/object", {
            //     query: {
            //         apikey: "8e787d5e-154a-4abd-877c-06d4c150ee6a",
            //         title: "dog",
            //         fields: "objectnumber,title,dated",
            //     }
            //     }).on("complete", function(data, response) {
            //         console.log(data);
            // });

            // fetch('https://api.harvardartmuseums.org/exhibition?venue=HAM&status=current&hasimage=1&apikey=8e787d5e-154a-4abd-877c-06d4c150ee6a&size=100')
            // .then(res => res.json())
            // .then((data) => {
            //     this.setState({ infos: data.info, records: data.records })
            //     console.log(data.info, 'info', data.records, 'records')
            // })
        }
        catch(ex) {
            console.log(ex)
        }
    }
}

const harvard = (state = [], action) => {
    if (action.type === FETCH_EXHIBITIONS) {
        return action.exhibitions
    }
    return state
}

export default harvard