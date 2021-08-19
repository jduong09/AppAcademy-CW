const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");
const TweetCompose = require("./tweet_compose.js");
const InfiniteTweets = require("./infinite_tweets.js");

$(() => {
  console.log("document is ready!");
  $('.infinite-tweets').each( (i, feed) => new InfiniteTweets(feed) );
  $('.tweet-compose').each( (i, tweet) => new TweetCompose(tweet) );
  $('.users-search').each( (i, search) => new UsersSearch(search) );
  $('button.follow-toggle').each( (i, btn) => new FollowToggle(btn) );
});