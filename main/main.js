const path = require('path');
const fs = require('fs');
const { fetchData } = require('./submodule');

const savePath = path.join(__dirname, 'data.json');

async function main() {
  try {
    console.log('Fetching data...');
    const data = await fetchData('https://jsonplaceholder.typicode.com/posts');
    console.log('Data fetched. Saving to file...');
    fs.writeFileSync(savePath, JSON.stringify(data, null, 2));
    console.log('Data saved to', savePath);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();