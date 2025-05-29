import express from 'express';
const app = express();

var wikiContent = await (await fetch('https://runescape.wiki/api.php?action=help&format=json&formatversion=2')).text();
var testSearch = await (await fetch('https://runescape.wiki/api.php?action=opensearch&format=json&search=moss%20giant&formatversion=2')).json();

app.get('/', (req, res) => {
    res.send("<p>/wiki for mediawiki api help</p><p>/moss to see a test search</p>")
});

app.get('/moss', (req, res) => {
    res.send(testSearch);
});

app.get('/wiki', (req, res) => {
  res.send(wikiContent);
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
