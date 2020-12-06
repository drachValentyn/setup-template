const { port } = require('./config');
const app = require('./server');

const boot = async () => {
  await app.listen(port, () => {
    console.log(`listen on ${port}`);
  });
};

boot();
