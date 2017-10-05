const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
const zoom = require('zoomus')({
  'key': api_key,
  'secret': api_secret
});

const app = express();
app.use(bodyParser.json());

// const startDate = moment().format().split('-').join('%2F').slice(0,14);
// console.log(startDate);
let dashboard = {
  type: 2,
  from: '2017-10-03',
  to: '2017-10-03',
}

const testCB = (username) => {
  return username+'*';
}

const getUsers = (group) => {
  console.log('Listing meeting participants...');
  let arr = [];
  group.forEach((participant) => {
    if (!participant) console.log('no participant');
      //console.log(testCB(participant.user_name));
    arr.push(testCB(participant.user_name));
  })
  console.log(arr);
  console.log('Success');
}

const getDetail = (ids) => {
  let classTitle = [];
  console.log('Getting meeting participants...');
  ids.forEach((id) => {
    dashboard = {
      meeting_id: id,
      type: 2
    }
    zoom.dashboard.meeting(dashboard, (res) => {
      if (res.error) console.log('error on getDetail');
      const group = [res];
      group.forEach((meeting) => {
        if (!meeting.participants) console.log('error Detail');
        getUsers(meeting.participants);
      });

      //[[{}{}{}][{}{}{}][{}]]
      //res= {participants}{participants}{participants}{participants:[{users}]}
      //getUsers([group]);
    })
    //console.log(classTitle);
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
