const FollowToggle = require("./follow_toggle.js");

$(() => {
  console.log("document is ready!");
  
  $('button.follow-toggle').each( (i, btn) => new FollowToggle(btn) );
});