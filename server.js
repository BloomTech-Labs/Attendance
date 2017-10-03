const express = require('express');
const creds = require('./creds.json');
const moment = require('moment');
const zoom = require('zoomus')(creds);
const app = express();

app.get('/getMeetings', (req, res) => {
  const dashboard = {
    "type": 2,
    "from": moment().hour(9).minute(45).format('YYYY-MM-DDTHH:m:sZ'),
    "to": moment().hour(11).minute(0).format('YYYY-MM-DDTHH:m:sZ'),
    "page_size": 100,
  };
  zoom.dashboard.meetings(dashboard, (res2) => {
    res.send(res2.meetings.map((object) => object.uuid).map(item => {
      const dashboard2 = {
        'meeting_id': item,
        'type': 2,
        'page_size': 100
      };
      setTimeout(() => {
        zoom.dashboard.meeting(dashboard, (res3) => {
          return res3 /* .participants.map(member => {
            return member.id;
          }); */
        }); 
      }, 250);
    }));
  });
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
