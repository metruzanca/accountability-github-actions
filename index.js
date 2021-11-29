import fs from 'fs';

const PATH = "./logs/";

const today = new Date(Date.now()).toLocaleString().split(',')[0];

function everyFile(callback) {
  const filenames = fs.readdirSync(PATH);
  for (const file of filenames) {
    callback(file)
  }
}

everyFile((filename) => {
  fs.appendFileSync(PATH + filename, `\n# ${today}`);
})