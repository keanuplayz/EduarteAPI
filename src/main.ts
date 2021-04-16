// var spawn = require("child_process").spawn,
//   py = spawn("python", ["dist/python/compute_input.py"]),
//   data = [1, 2, 3, 4, 5, 6, 7, 8, 10, 66, 9],
//   dataString = "";

// /*Here we are saying that every time our node application receives data from the python process output stream(on 'data'), we want to convert that received data into a string and append it to the overall dataString.*/
// py.stdout.on("data", function (data: { toString: () => string }) {
//   dataString += data.toString();
// });

// /*Once the stream is done (on 'end') we want to simply log the received data to the console.*/
// py.stdout.on("end", function () {
//   console.log("Sum of numbers=", dataString);
// });

// py.stdin.write(JSON.stringify(data));

// py.stdin.end();

import { spawn } from 'child_process';
const py = spawn('python', ['dist/python/apitoken.py']),
  data = {
    user: 'ktimmermans',
    passwd: 'Pabeketehe056',
    school: 'blariacum',
  };
var dataString = '';

py.stdout.on('data', (data) => {
  dataString += data.toString();
});

py.stdout.on('error', (data) => {
  console.log(data.toString());
});

py.stderr.on('data', (data) => {
  console.log(data.toString());
});

py.stdout.on('end', () => {
  console.log('APIToken = ', dataString);
});

py.stdin.write(JSON.stringify(data));

py.stdin.end();
