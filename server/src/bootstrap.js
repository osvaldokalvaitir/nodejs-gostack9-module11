const dotenv = require('dotenv');

dotenv.config({
  // Não foi possível usar com 3 sinais de igual, talvez seja porque o 'yarn test' foi alterado para Windows
  // path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  path: (process.env.NODE_ENV = 'test' ? '.env.test' : '.env'),
});
