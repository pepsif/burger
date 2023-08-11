import Parse from "parse/dist/parse.min.js";
import {keys }from "./_key.js"

export async function fetchBurgers() {

    const PARSE_APPLICATION_ID = keys.PARSE_APPLICATION_ID;
    const PARSE_HOST_URL = keys.PARSE_HOST_URL;
    const PARSE_JAVASCRIPT_KEY = keys.PARSE_JAVASCRIPT_KEY;
    Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
    Parse.serverURL = PARSE_HOST_URL;

    const fetchBurgers = new Parse.Query("Burgers");
    const response = await fetchBurgers.first();
    const fetchBurgersArray = await response.get("data");


    return fetchBurgersArray
}



