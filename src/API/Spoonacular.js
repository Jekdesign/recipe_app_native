import axios from "axios";

export default axios.create({

    baseURL: 'https://api.spoonacular.com/recipes',
    headers: {
        Authorization : 'Bearer f3d341852e08482fa72cf95c4f329005'
    }
}); 