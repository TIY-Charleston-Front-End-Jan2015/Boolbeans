var templates = {};

templates.farmResults = [
  "<h2>Farm:</h2><h5><%= farm %></h5>",
  "<h2>Price:</h2><h5><%= price %></h5>",
  "<h2>Pickup Location:</h2><h5><%= pickup %></h5>",
  "<h2>Learn More:</h2><h5><a><%= url %></a></h5>"
 ].join("")


 templates.inSeason = [
 "<h1>What's in season?</h1><h5><%= list %></h5>"

 ].join("")
