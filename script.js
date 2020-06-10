var users = [
    {
    	username:"kumar",
    	password:"madman"

    } 
];

var newsfeed=[
     {
     	username:"bob",
     	timeline:"feeling bored"
     },
     {
     	username:"remo",
     	timeline:"awesome day it is!!"
     }

];

var userNamePrompt = prompt("what is your user name");
var paswordPrompt = prompt("what is your password");

function signIn(user,pass){
	if(user===users[0].username && pass===users[0].password){

		alert("sign in sucessfull");
		console.log(newsfeed);

	}
	else{
        alert("sign was unsucessful,sorry!!");
	}
}

signIn(userNamePrompt,paswordPrompt);