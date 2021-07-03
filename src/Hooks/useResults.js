import { useState } from "react";
import Spoonacular from "../API/Spoonacular";

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async () => {
        try{
            const response = await Spoonacular.get('/complexSearch', {
                params: {
                    apiKey: 'f3d341852e08482fa72cf95c4f329005',
                    number: 100
                    // ranking: 1
                    //ignorePantry: true
                }
            });
            setResults(response.data);
            //console.log(results);
        }

        catch (e) {
            setErrorMessage("Something went wrong!");
        }
    };

    return [searchApi, results, errorMessage];

};
