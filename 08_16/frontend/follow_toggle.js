const APIUtil = require("./api_util");

class FollowToggle {
  constructor(btn) {
    this.$el = $(btn);
    this.userId = this.$el.attr("data-user-id");
    this.initialFollowState = this.$el.attr("data-initial-follow-state");

    this.render();

    this.$el.on("click", this.handleClick.bind(this));
  };

  handleClick(event) {
    const followToggle = this;
    event.preventDefault();

    console.log("time to handleClick!");

    if (this.initialFollowState === "followed") {
      console.log("time to unfollow");
      APIUtil.unfollowUser(this.userId).then(() => {
        console.log("hello");
        followToggle.initialFollowState = "unfollowed";
        followToggle.render();
      });
      
    } else if (this.initialFollowState === "unfollowed") {
      console.log("time to follow");
      APIUtil.followUser(this.userId).then(() => {
        console.log("yo");
        followToggle.initialFollowState = "followed";
        followToggle.render();
      });
    }
  };

  render() {
    if (this.initialFollowState == "followed") {
      this.$el.html("UnFollow!");
    } else {
      this.$el.html("Follow!");
    }
  };
};

module.exports = FollowToggle;