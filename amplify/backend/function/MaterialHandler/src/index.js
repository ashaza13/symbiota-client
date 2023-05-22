
const axios = require('axios');

const API_URL_GET = 'https://api.earth911.com/earth911.getMaterials?api_key=';
const API_URL_LOCATIONS = 'https://api.earth911.com/earth911.searchLocations?api_key=';
const API_KEY = process.env.EARTH_API_KEY;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(event);
    const material_id = event.pathParameters.materialId;
    const lat = event.queryStringParameters.latitude;
    const lng = event.queryStringParameters.longitude;

    console.log(event.queryStringParameters);

    const resultLocations = await axios.get(API_URL_LOCATIONS + API_KEY + "&latitude=" + lat + "&longitude=" + lng + "&material_id=" + material_id + "&max_distance=25");
    console.log(resultLocations);

    const locations = resultLocations.data.result;

    const result = await axios.get(API_URL_GET + API_KEY);

    let items = result.data.result;

    let mat = items.filter((item) => parseInt(material_id) === parseInt(item.material_id));

    const material = { 'materialId': mat[0].material_id, 'description': mat[0].description, 'long_description': mat[0].long_description, 'url': mat[0].url, 'image': mat[0].image, 'family_ids': mat[0].family_ids, 'description_legacy': mat[0].description_legacy, "locations": locations };
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
        },

        body: JSON.stringify(material),
    };

    return response;
};
