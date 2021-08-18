const APIUtil = require("./api_util.js");

const FollowToggle = require("./follow_toggle.js");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('input[name=username]');
    this.$ul = this.$el.find('.users');

    this.$input.on("input", this.handleInput.bind(this));
  };

  handleInput(event) {
    if (this.$input.val() === "") {
      this.renderResults([]);
      return;
    }

    APIUtil.searchUsers(this.$input.val())
      .then((users) => { 
        this.renderResults(users) 
      });
  };

  //Once Ajax returns results, we want to display results in the success portion of the promise
  renderResults(users) {
    this.$ul.empty();

    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      const $a = $("<a></a>");
      $a.text(`${user.username}`);
      $a.attr('href', `/users/${user.id}`);

      const $li = $("<li></li");
      const $button = $("<button></button>");

      new FollowToggle($button, {
        userId: user.id,
        initialFollowState: user.followed ? "followed" : "unfollowed"
      });

      $li.append($a);
      $li.append($button);

      this.$ul.append($li);
    }
  };
};

module.exports = UsersSearch;