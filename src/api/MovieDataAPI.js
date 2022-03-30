import axios from "axios";

export default class MovieDataAPI {

    static async getData() {
        try {
            let rdata = await axios.get('https://api.tvmaze.com/search/shows?q=all');
            return rdata.data;
        } catch (err) {
            return null;
        }
    }
}