curr_user = document.getElementById('curr_user');
curr_pass = document.getElementById('curr_pass');
new_user = document.getElementById('new_user');
new_pass = document.getElementById('new_pass');
var user_data = new Map();
//goal
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
    constructor(curr_day, curr_goal)
    {
        day = curr_day;
        goal = curr_goal;
        this.next = null;
    }
}

class account
{
    constructor(username, password)
    {
        user = username;
        pass = password;
    }
}

function checkuserandpass()
{
   //const account = {user: curr_user, pass: curr_pass};
   var curr = account(curr_user, curr_pass);
   if(user_data.has(curr) == true)
   {
    //grab data
    cur_user_list = user_data.get(curr);
   }
   else
   {
    //else 
    
   }

    //check if user name and password are correct
    //if not, tell user that username or password is incorrect
    //if yes, grab their goal and the rest of their information 

}

function createuser()
{
    var account = {user: new_user, pass: new_pass}
    
    if(user_data.has(account) == true)
    {
        //tell user that the username is taken
    }
    else
    {
        user_data.set(account, null);
    }

    //if username is taken, do not create user and do not
    //let user create goal. loop?
}