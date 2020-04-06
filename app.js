var express= require('express');
var body_parser= require('body-parser');
var app = express();
app.use(express.static('./tous'));
app.set('view engine','ejs');
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());
var fs= require('fs');
var list=[];
app.get('/departement',(req,resp)=>{
    var wd=fs.readFileSync('./data/Entreprise.json');
list=JSON.parse(wd);
resp.render('pages/Page1',{entreprise:list});
});
// Ajouter Département  //
app.post('/d',(req,resp)=>{
    list.push({"nom":req.body.nom,"id":list.length +1,"chef_département":req.body.chef_département,"description":req.body.description});
fs.writeFile('./data/Entreprise.json',JSON.stringify(list,null,5),(err)=>{
    console.log(err);
});
resp.render('pages/Page1',{entreprise:list});
});
app.listen(3320);