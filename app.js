const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

let items =["Buy Food", "Cook Food", "Eat Food"];

let workItems = [];

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    let day = date.getDate();
    
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
    
    let item = req.body.newItem;
    if(req.body.button === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
    items.push(item);

    res.redirect("/");
    }
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");

})

app.listen(3000, function(){
    console.log("The server has started");
});
