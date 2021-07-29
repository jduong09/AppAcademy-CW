require 'json'

class Session
  attr_reader :rails_lite
  # find the cookie for this app
  # deserialize the cookie into a hash
  def initialize(req)
    # if request does not contain our cookie, initialize an instance variable
    # as a hash so we can begin storing cookies. Else, we will parse the JSON cookie
    # of our app, and begin adding to it.
    @rails_lite = req.cookies["_rails_lite_app"].nil? ? {} : JSON.parse(req.cookies["_rails_lite_app"])
  end

  def [](key)
    self.rails_lite[key]
  end

  def []=(key, val)
    self.rails_lite[key] = val
  end

  # serialize the hash into json and save in a cookie
  # add to the responses cookies
  def store_session(res)
    # serialize the hash into json
    json_hash = JSON.generate(@rails_lite)
    #add to the responses cookies
    res.set_cookie("_rails_lite_app", json_hash)
  end
end
