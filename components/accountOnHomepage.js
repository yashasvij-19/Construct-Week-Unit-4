function accounOnHomepage(){
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Account</title>
  <style>
  body{
  background-color:  #f3f3f3;
  }
  #accounT{
  background: #fff;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 4% auto 0;
  max-width: 360px;
  border-radius: 4% 4% 0 0;
  border: 1px solid rgba(0,0,0,.16);
  min-height: 600px;
  }
#box .close {
position: absolute;
left: 25px;
top: 20px;
width: 32px;
height: 32px;
opacity: 0.3;
}
#box .close:hover {
opacity: 1;
}
#box .close:before, .close:after {
position: absolute;
left: 10px;
content: ' ';
height: 18px;
width: 2px;
background-color: #333;
}
#box .close:before {
transform: rotate(45deg);
}
#box .close:after {
transform: rotate(-45deg);
}
.heading{
  font-size: 36px;
  font-weight: 600;
  margin-top: 50px;
  margin-bottom: 9px;
  margin-left: 35px;
  font-family:Arial, Helvetica, sans-serif;
  color: #000f1d;
  opacity: .92;
}
#text-part p{
  font-size: 18px;
  line-height: 20px;
  color: #001325;
  opacity: .92;
  margin-left: 10%;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
hr{
  background-color:rgba(0,19,37,.16);
  width: 80%;
  color: #001325;
  opacity: .92;
}
#text-part img{
 width:80%;
 height: auto;
 margin-left: 10%;
}
.login button{
  width:320px;
  height: 40px;
  border-radius: 4px;
  background: #fc2779;
  font-size: 15px;
  line-height: 24px;
  color: #fff;
  margin-left: 6%;
  margin-top: 4%;

}
.long button{
  width:320px;
  height: 40px;
  margin-left: 6%;
  margin-top: 4%;
  margin-bottom: 6%;
  border-radius: 4px;
  background-color: rgb(235, 228, 228);
  border: 1px solid rgb(49, 49, 49);
  font-weight: bolder;
  color: #333;
  text-decoration: none;
  font-size: 17px;
}
span{
  color: #001325;
  opacity: .64;
  margin-left: 10%;
}
span a{
  color: #001325;
  opacity: .64;
}
</style>
</head>
<body>
  <div id = "accounT">
  <div id = "box">
  <a href="https://www.nykaa.com/" class="close"></a>
  </div>
  <div id = "text-part">
  <h2 class = "heading">Sign in</h2>
  <p>To quickly find your favourites items,<br>saved addresses and payments.</p>
  <hr>
  <p>Register and earn 2000 reward points</p>
  <img src = "https://ak.picdn.net/shutterstock/videos/1077642536/thumb/1.jpg?ip=x480"/>
  <a class = "login" href = "redirectAccount.html" target = "_blank"><button>Enter Phone Number or Email</button>
  <a class = "long" href = "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fwww.nykaa.com%2Fgoogleconnect%2Findex%2Fconnect%2F&client_id=140085884300-na7igu81hs7fcufr0bganb40su9ab4pq.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=offline&approval_prompt=force&state=https%253A%252F%252Fwww.nykaa.com%252F&flowName=GeneralOAuthFlow" target="_blank"><button>Google</button></a>
  <span>By continuing, you agree that you have read</span><br><span>and accept our <a href ="https://www.nykaa.com/terms-conditions" target="_blank">T&Cs</a> and <a href ="https://www.nykaa.com/privacy-policy" target="_blank">Privacy Policy.</a></span>
  </div>
  </div>
  
</body>
</html>
</body>
</html>`
}
export default accounOnHomepage