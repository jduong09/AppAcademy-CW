const APIUtil = require("./api_util");

class FollowToggle {
  constructor(btn, options) {
    this.$el = $(btn);
    this.userId = this.$el.attr("data-user-id") || options.userId;
    this.initialFollowState = this.$el.attr("data-initial-follow-state") || options.initialFollowState;

    this.render();

    this.$el.on("click", this.handleClick.bind(this));
  };

  handleClick(event) {
    const followToggle = this;
    event.preventDefault();

    if (this.initialFollowState === "followed") {
      this.initialFollowState = "unfollowing";
      this.render();

      APIUtil.unfollowUser(this.userId).then(() => {
        followToggle.initialFollowState = "unfollowed";
        followToggle.render();
      });
      
    } else if (this.initialFollowState === "unfollowed") {
      this.initialFollowState = "following";
      this.render();

      APIUtil.followUser(this.userId).then(() => {
        followToggle.initialFollowState = "followed";
        followToggle.render();
      });
    }
  };

  render() {
    switch (this.initialFollowState) {
      case "following":
        this.$el.prop("disabled", true);
        this.$el.html("following...");
        break;
      case "unfollowing":
        this.$el.prop("disabled", true);
        this.$el.html("unfollowing...");
        break;
      case "followed":
        this.$el.prop("disabled", false);
        this.$el.html("Unfollow!");
        break;
      case "unfollowed":
        this.$el.prop("disabled", false);
        this.$el.html("Follow!");
        break;
      default:
        break;
    }
  };
};

module.exports = FollowToggle;