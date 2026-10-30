const example1 = (req, res) => {
  res.render('example1');
};

const example2 = (req, res) => {
  res.render('example2');
};

const example3 = (req, res) => {
  res.render('example3');
};

const getSongs = (req, res) => {
  res.json([
    { artist: 'The Walters', title: 'I Love You So' },
    { artist: 'The Backseat Lovers', title: 'Pool House' },
    { artist: 'daniel.mp3', title: 'green to blue' },
    { artist: 'Izzamusic, Julien Marchal', title: 'Shootout' },
  ]);
};

module.exports.example1 = example1;
module.exports.example2 = example2;
module.exports.example3 = example3;
module.exports.getSongs = getSongs;
