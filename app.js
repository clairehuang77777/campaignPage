const express = require('express');
const { engine } =require('express-handlebars');
const path =require('path');

const app = express();
const rowlist =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

app.engine('handlebars', engine({defaultLayout: false}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

/* 設置靜態路徑 */
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index',{rowlist: rowlist});
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!")
});
