let curr_username = document.getElementById('curr_username');
let curr_pass = document.getElementById('curr_pass');
let new_username = document.getElementById('new_username');
let new_pass = document.getElementById('new_pass');
const curr_user = document.getElementById('curr_user');
const new_user = document.getElementById('new_user');

var user_data = new Map();
var cur_user_list = new user_list()

class user_list
{
    constructor()
    {
        this.p_head = null;
    }
}

class day_goal_node
{
    constructor(curr_date)
    {
        this.day = curr_date;
        this.water = sessionWater;
        this.day_goal = goal;
        this.next = null;
    }
}

class account
{
    constructor(username, password)
    {
        this.user = username;
        this.pass = password;
    }
}

curr_user.addEventListener('submit', function(event) 
{event.preventDefault();
   //const account = {user: curr_user, pass: curr_pass};
   var curr = new account(curr_username.value , curr_pass.value);
   if(user_data.has(curr) == true && user_data.)
   {
    //grab data
    cur_user_list = user_data.get(curr);
    //send user back to main screen
    //update goal?
    goal = cur_user_list.p_head.day_goal;
    window.location.replace('index.html');

   }
   else
   {
    //else 
    alert('Username or Password is incorrect');
   }

    //check if user name and password are correct
    //if not, tell user that username or password is incorrect
    //if yes, grab their goal and the rest of their information 
});

new_user.addEventListener('submit', function(event) 
{event.preventDefault();
    var account = {user: new_username, pass: new_pass}
    
    if(user_data.has(account) == true)
    {
        //tell user that the username is taken
        alert('Username is taken');
    }
    else
    {
        user_data.set(account, null);
        window.location.replace('index.html');
    }

    //if username is taken, do not create user and do not
    //let user create goal. loop?
});