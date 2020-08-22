const fetch = require('node-fetch');

export default async (req, res) => {
    const accessToken = "";
    const companies = await getCompanies(accessToken);
    res.json(companies);
}

const getCompanies = async (accessToken) => {
    const response = await fetch('https://api.freee.co.jp/api/1/companies', {
        headers: {'Authorization': `Bearer ${accessToken}`}
    });
    const responseJson = await response.json();
    return responseJson;
};
