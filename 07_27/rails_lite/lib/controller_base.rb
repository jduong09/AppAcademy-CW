require 'active_support'
require 'active_support/core_ext'
require 'active_support/inflector'
require 'erb'
require_relative './session'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res, route_params = {})
    @req = req
    @res = res
    @params = route_params.merge(req.params)
    @already_built_response = false

  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response
  end

  # Set the response status code and header
  def redirect_to(url)
    res.status = 302
    res['location'] = url
    session.store_session(res)
    raise 'Already rendered. Abort!' if already_built_response?
    @already_built_response = true
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    res.write(content)
    res['content-type'] = content_type
    #Need to save cookies in this response
    session.store_session(res)
    raise 'Already rendered. Abort!' if already_built_response?
    @already_built_response = true
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    #Require 'activesupport/inflector'
    #Use .underscore to return snakecase version of controller name
    #Use controller and template names to construct paths to template files.
    #controller_name = "#{controller_name}_controller"
    controller_name = self.class.name.underscore
    
    filename = File.dirname("views/#{controller_name}/#{template_name}.html.erb")
    full_filename = File.join(filename, "#{template_name}.html.erb")

    #Use File.read to read the template file
    contents = File.read(full_filename)
    #Create a new ERB template from the contents
    template = ERB.new(contents)
    #Evaluate the ERB template, using binding to capture the controller's instance variables.
    #Pass the result to #render_content with a content_type of text/html.
    message = template.result(binding)
    render_content(message, "text/html")
  end

  # method exposing a `Session` object
  def session
    @session ||= Session.new(@req)
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
    self.send(name)
    render(name) unless already_built_response?
  end

  private

  attr_accessor :already_built_response
end

