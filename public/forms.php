<!DOCTYPE html>



<html>
	<head>
		<title>Forms Homework</title>
	</head>

	<body>
		<h1>GET</h1>
		<?php var_dump($_GET);?>

		<h1>POST</h1>
		<?php var_dump($_POST);?>

		<h2>Search</h2>
		<form method="GET" action="/forms.php">
			<p>
				<label for="search">Search</label>
				<input id="search" placeholder="Search" name="search" type="text">
				<button type="submit">Search</button>
			</p>
		</form>

		<h2>Log in Form</h2>
		<form method="POST" action="/forms.php">
			<p>
				<label for="username">Username</label>
				<input id="username" placeholder="Username" name="username" type="text">
			</p>
			<p>
				<label for="password">Password</label>
				<input id="password" placeholder="Password" name="password" type="password">
			</p>
			<p>
				<button type="submit">Login</button>
			</p>
		</form>

		<h2>Sign-up &nbsp;Form</h2>
		<form method="post" action="/forms.php">
			<p>
				<label for="users_name">Name</label>
				<input id="users_name" placeholder="Name" name="users_name" type="text"> 
			</p>
			<p>
				<label for="email">E-mail</label>
				<input id="email" placeholder="E-mail" name="email" type="text">
			</p>
			<p>
				<label for="supUsername">Username</label>
				<input id="supUsername" placeholder="Username" name="username" type="text">
			</p>
			<p>
				<label for="supPassword">Password</label>
				<input id="supPassword" placeholder="Password" name="password" type="password">
			</p>
			<p>
				<button type="submit">Sign-Up</button>
			</p>
		</form>

		<h2>Contact-Me</h2>
		<form method="post" action="/forms.php"
			<p>
				<label for="contEmail">Email</label>
				<input id="contEmail" placeholder="Email" name="email" type="text">
			</p>
			<p>
				<label for="subject">Subject</label>
				<input id="subject" placeholder="Subject" name="subject" type="text">
			</p>
			<p>
				<label for="body">Body</label>
				<textarea id="body" placeholder="What's wrong now?" name="body"></textarea>
			</p>
			<p>
				<button type="submit">Send</button>
			</p>
		</form>

	</body>
</html>