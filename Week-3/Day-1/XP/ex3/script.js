let navBar = document.getElementById("navBar");

navBar.setAttribute("class", "SocialMediaNavigationBar");

let navId = document.getElementById("navBar");

let ul = navId.getElementsByTagName("ul")[0];

let li = document.createElement("li");

li.textContent = "logOut";

ul.append(li);