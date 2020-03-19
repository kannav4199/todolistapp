const express=require("express");
const bodyparser=require("body-parser");

const app=express();



var newitems=[];

app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get('/',function(req,res){


	var today=new Date();
	var options={

		weekdays:"long",
		day:"numeric",
		month:"long"
	};


var day=today.toLocaleDateString("en-US",options);


res.render("list",{kindofday:day,newtasks:newitems});


});


app.post('/',function(req,res){
var item=req.body.task;
newitems.push(item);

if(req.body.list==="clearall"){
	newitems=[];
	res.redirect('/');
}
else{

res.redirect("/");
}
});




app.listen(3000,function(){

	console.log("server started");
});

