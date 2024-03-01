
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/signup',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const data = JSON.stringify({
  username: 'DarkLadySylvanas',
  password: 'Forsaken'
});

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
