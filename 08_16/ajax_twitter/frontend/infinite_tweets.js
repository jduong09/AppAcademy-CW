const APIUtil = require("./api_util.js");

class InfiniteTweets {
  constructor(el) {
    // element will be div called infinite tweets
    this.$el = $(el);
    this.$feed = this.$el.find("#feed");
    this.maxCreatedAt = null;

    //listen for clicks to add more tweets
    this.$el.on("click", this.fetchTweets.bind(this));
    //listen for "insert-tweet", to add new tweet
    this.$el.on("insert-tweet", this.insertTweet.bind(this));
  }

  //make an ajax request to /feed
  fetchTweets(event) {
    const infiniteTweets = this;
    event.preventDefault();

    const data = {}
    if (this.maxCreatedAt) {
      data.max_created_at = this.maxCreatedAt;
    }

    APIUtil.fetchTweets(data).then((tweets) => {
      infiniteTweets.insertTweets(tweets);

      if (tweets.length < 20) {
        this.$moreTweets.replaceWith("<b>No More Tweets</b>");
      }

      if (tweets.length > 0) {
        this.maxCreatedAt = tweets[tweets.length - 1].created_at;
      }
    });
  };

  //On resolution of promise, append get request to the feed, which adds more tweets!
  insertTweets(tweets) {
    for (let i = 0; i < tweets.length; i++) {
      const $li = $("<li></li>");
      $li.html(JSON.stringify(tweets[i]));
      this.$feed.append($li);
    }
  };

  insertTweet(event, tweet) {
    const $li = $("<li></li>");
    $li.html(JSON.stringify(tweet));
    this.$feed.prepend($li);

    if (!this.maxCreatedAt) {
      this.maxCreatedAt = tweet.created_at;
    }
  }
};

module.exports = InfiniteTweets;