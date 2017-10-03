const request = require('request');
const moment = require('moment');

const headers = {
    'accept': 'application/json',
    'content-type': 'application/x-www-form-urlencoded'
};

const startDate = moment().format().split('-').join('%2F').slice(0,14);
const endDate = startDate;

const dateRange = `from=${startDate}&to=${endDate}`
const api_key = '';
const api_secret = '';
const type = 'type=2'; //Live Meetings: 1, Past Meetings: 2
const defaults = 'page_size=30&page_number=1';


const dataString = `${api_key}&${api_secret}&${type}&${dateRange}&${defaults}`;


const options = {
    url: 'https://api.zoom.us/v1/metrics/meetings',
    method: 'POST',
    headers: headers,
    body: dataString
};

const getMeetings = (error, response, body) => {
    if (!error && response.statusCode == 200) {
        const meetings = JSON.parse(body)['meetings'];
        meetings.forEach((meeting) => console.log(meeting.id));
    }
}


request(options, getMeetings);
