const APIUtil = require("./api_util.js");

class TweetCompose {
  constructor(el) {
    // element is the form
    this.$el = $(el);
    this.$contentInput = this.$el.find('textarea');
    this.$mentionInput = this.$el.find('option');

    this.$el.on("submit", this.submit.bind(this));
  };

  submit(event) {
    const json = this.$el.serializeJSON();
    event.preventDefault();

    this.$el.find(':input').prop('disabled', true);
    
    APIUtil.createTweet(json).then((tweet) => {
      console.log(tweet);
      this.handleSuccess(tweet);
    });
  };

  handleSuccess(tweet) {
    const $tweetsUl = $(this.$el.data('tweets-ul'));

    const $li = $('<li></li>');
    $li.append(JSON.stringify(tweet));

    $tweetsUl.append($li);
    this.clearInputs();
  };

  clearInputs() {
    this.$contentInput.val("");
    this.$mentionInput.empty();
    this.$el.find(':input').prop('disabled', false);
  }
};

module.exports = TweetCompose;