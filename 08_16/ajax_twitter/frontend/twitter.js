const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$(() => {
  console.log("document is ready!");
  $('.users-search').each( (i, search) => new UsersSearch(search) );
  $('button.follow-toggle').each( (i, btn) => new FollowToggle(btn) );
});