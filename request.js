const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const zoom = require('zoomus')({
  'key': api_key,
  'secret': api_secret
});

const app = express();
app.use(bodyParser.json());

let dashboard = {
  type: 2,
  from: '2017-10-03',
  to: '2017-10-03',
}

const testCB = (username) => {
  return username+' checked ';
}

const getDetail = (ids) => {
  let classTitle = [];
  console.log('Getting meeting participants...');
  ids.forEach((id, i) => {
    dashboard = {
      meeting_id: id,
      type: 2
    }
    let thisGroup = [];
    zoom.dashboard.meeting(dashboard, (res) => {
      if (res.error) console.log('error on getDetail');
      let meetingDetail = res.participants;
      if (meetingDetail !== undefined) {
        meetingDetail.forEach((person) => {
          thisGroup.push(testCB(person.user_name));
        })
      }
      console.log('Meeting '+i+': '+thisGroup);
    })
  })
}

const getMeetings = () => {
  console.log('getting meeting details...');
  zoom.dashboard.meetings(dashboard, (res) => {
    if (res.error) console.log('error');
    let ids = [];
    res.meetings.forEach((meeting) => ids.push(meeting.uuid));
    console.log('Getting details for '+ids.length+' meetings...');
    getDetail(ids);
  })
}

app.get('/', (req, res) => {
  console.log('getting meetings...');
  getMeetings();
})

app.listen(3000);
