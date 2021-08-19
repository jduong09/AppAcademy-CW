const APIUtil = require("./api_util.js");

class TweetCompose {
  constructor(el) {
    // instance variables
    this.$el = $(el);
    this.$contentInput = this.$el.find('textarea');
    this.$chars = this.$el.find('strong');
    this.$mentionedUsers = this.$el.find('.mentioned-users');
    this.$addMention = this.$el.find('.add-mentioned-user');

    // handlers
    this.$contentInput.on("input", this.handleChars.bind(this));
    this.$addMention.on("click", this.addMentionUser.bind(this));
    this.$mentionedUsers.on("click", ".remove-mentioned-user", this.removeMention.bind(this));
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

  handleChars(event) {
    const chars = $(event.currentTarget);
    const numChars = chars.val().length;
    this.$chars.html(`${140 - numChars}`);
  };

  addMentionUser(event) {
    const $mentionedUsers = this.$mentionedUsers;
    const $li = $("<li></li>");
    const $select = $("<select></select>");

    event.preventDefault();
    $select.attr("name", "tweet[mentioned_user_ids][]");

    for (let i = 0; i < window.users.length; i++) {
      const user = window.users[i];
      const $option = $("<option></option>");

      $option.val(user.id);
      $option.html(user.username);

      $select.append($option);
    }
    const $removeButton = $("<button></button>");
    $removeButton.addClass("remove-mentioned-user").html("Remove");

    $li.append($select).append($removeButton);
    $mentionedUsers.append($li);
  };

  removeMention(event) {
    event.preventDefault();
    $(event.currentTarget).parent().remove();
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
    this.$mentionedUsers.empty();
    this.$el.find(':input').prop('disabled', false);
  }
};

module.exports = TweetCompose;