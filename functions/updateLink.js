const axios = require('axios');
require('dotenv').config();
const { UPDATE_LINK } = require('./utils/linkQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    if (event.httpMethod !== 'PUT') {
        return formattedResponse(405, { err: 'Method not supported' });
    }
    const { name, url, description, _id: id, archived } = JSON.parse(
        event.body
    );
    const variables = { name, url, description, archived, id };
    try {
        const { updateLink: updatedLink } = await sendQuery(
            UPDATE_LINK,
            variables
        );

        return formattedResponse(200, updatedLink);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};
