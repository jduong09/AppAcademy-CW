const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: "POST",
      url: `/users/${id}/follow`,
      dataType: "json"
    });
  },

  unfollowUser: id => {
    return $.ajax({
      method: "DELETE",
      url: `/users/${id}/follow`,
      dataType: "json"
    });
  },

  searchUsers: query => {
    return $.ajax({
      method: "GET",
      url: "/users/search",
      dataType: "json",
      data: { query }
    });
  },

  createTweet: json_form => {
    return $.ajax({
      method: "POST",
      url: "/tweets",
      dataType: "json",
      data: json_form
    });
  },

  fetchTweets: data => {
    return $.ajax({
      method: "GET",
      url: "/feed",
      dataType: "json",
      data: data
    });
  }

};

module.exports = APIUtil;