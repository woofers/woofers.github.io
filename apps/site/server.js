import handler from 'serve-handler';
import http from 'http';

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: 'out',
    trailingSlash: true,
  });
});

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});