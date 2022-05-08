import axios from 'axios';

(async () => {
  await axios.post('http://localhost:3333/api/packages/generate');
})();
