<?php
  var_dump($_GET);
  var_dump($_POST);
?>

<!doctype html>
<html>
    <head>
    	<title>My First HTML Form</title>
    </head>
    <body>
        <h2>Login</h2>
        <form method="POST" action="/myfirstform.php">
            <p>
                <label for="username">Username</label>
                <input id="username" placeholder="username" name="username" type="text">
            </p>
            <p>
                <label for="password">Password</label>
                <input id="password" placeholder="password" name="password" type="password">
            </p>
            <p>
                <!-- two different ways to make a button(bottom is better) -->
                <input type="submit" value="Login(input[not button])">
                <button type="submit">Login(button)</button>
            </p>
         </form>

        <h2>Compose and Email</h2>
        <form method="POST" action="myfirstform.php">
            <p>
                <label for="to">Send To</label>
                <input id="to" placeholder="Send To" name="to" type="text"> 
            </p>
            <p>
                <label for="from">Email</label>
                <input id="from" placeholder="Your Email" name="from" type="text">
            </p>
            <p>
                <label><input id="subject" placeholder="Subject" name="subject" type="text"></label>
            </p>
            <p>
                <label><textarea id="body" placeholder="Compse email here." cols="100" rows="10"name="body" type="text"></textarea></label>
            </p>
            <p>
                <label><input type="checkbox" id="savemail" name="savemail" value="yes" checked>Save this email?</label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>    
        </form>

        <h2>Multiple Choice Test</h2>
        <form method="POST" action="myfirstform.php">
            <p>How many answer choices are there for this question?</p>
                <label><input type="radio" name="q1" value="1">1</label>
                <label><input type="radio" name="q1" value="2">2</label>
                <label><input type="radio" name="q1" value="3">3</label>

            <p>What answer did you give for your last question?</p>
                <label><input type="radio" name="q2" value="2">2</label>
                <label><input type="radio" name="q2" value="1">1</label>
                <label><input type="radio" name="q2" value="3">3</label>
            <p>Is this question as pointless as it sounds?</p>
                <label><input type="checkbox" id="pa1" name="q3[]" value="Yes">Yes</label>
                <label><input type="checkbox" id="pa2" name="q3[]" value="Yes">Yes</label>
                <label><input type="checkbox" id="pa3" name="q3[]" value="Yes">Yes</label>

            <p><button type="submit">Submit</button></p> 

        </form>

        <h2>Select Testing</h2>
        <form method="POST" action="myfirstform.php">
            <p>Have you ever flown on a plane?</p>
                <select id="transmission" name="transmission">
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>  
        
            <p>Your parents are...</p> 
                <select id="os" name="os[]"multiple>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

            <p><button type="submit">Submit</button></p>
        </form>
    </body>
</html>
