---
comments: true
layout: post
title: HTML Fixtures with Jasmine and JSTestdriver
wordpress_id: 1013
wordpress_url: http://www.multunus.com/?p=1013
date: 2011-03-14 15:03:07.000000000 +05:30
author: Leena
---
Unit Testing Javascript is great using JSTestDriver and Jasmine, but maintaining HTML fixtures for the same is a pain. One of the approaches for fixing the same issue is by creating the HTML from the controller specs and loading the HTML using AJAX. This approach is mentioned <a href="http://pivotallabs.com/users/jb/blog/articles/1152">here</a>.

But I could not make it work with JSTestDriver as the server was not able to find the path for HTML fixtures. So I modified the above approach.

<strong>Update:</strong> I've created a gem using which you can achieve the same. Click <a href="https://github.com/multunus/js_fixtures">here</a> for the same.

<strong><span style="text-decoration: underline;">Generate the fixtures</span></strong>

Create a file fixture_generator.rb and save it in spec/support directory. The contents of the file is as follows:
<pre><code>
[sourcecode language="ruby"]
RSpec::Rails::ControllerExampleGroup.class_eval do

  # Saves the markup to a fixture file using the given name
  def save_fixture(markup, name)
    fixture_path = File.join(Rails.root.to_s, 'spec/javascripts/helpers')
    Dir.mkdir(fixture_path) unless File.exists?(fixture_path)

    fixture_file = File.join(fixture_path, &amp;quot;#{name}.js&amp;quot;)

    fixture_function = 'function load#{name}Fixture(){
  /*:DOC +='+markup+'*/
    }'
    File.open(fixture_file, 'w') do |file|
      file.puts(fixture_function)
    end
  end

  # From the controller spec response body, extracts html identified
  # by the css selector.
  def html_for(selector)
    doc = Nokogiri::HTML(response.body)

    #remove_third_party_scripts(doc)
    content = doc.css(selector).first.to_s

    convert_body_tag_to_div(content)
  end

  # Recommended that you add all body-level third party scripts inside a div called #third-party-scripts
  # so that they can be removed during testing.
  def remove_third_party_scripts(doc)
    scripts = doc.at('#third-party-scripts')
    scripts.remove if scripts
  end

  # Here we convert the body tag to a div so that we can load it into
  # the document running js specs without embedding a  within a body.
  def convert_body_tag_to_div(markup)
    markup.gsub('&lt;body', '&lt;div').gsub('&lt;/body&gt;', '&lt;/div&gt;')
  end
end
[/sourcecode]

 </code></pre>
Call the save_fixture within the controller spec as follows:
<pre><code>
[sourcecode language="ruby"]
describe 'Sign up' do
    it &quot;should show the signup form&quot; do
      get :new
      response.should render_template('new')
      save_fixture(html_for('body'), 'Signup')
    end
end
[/sourcecode]

 </code></pre>
The above will create a file Signup.js in the path <code>spec/javascripts/helpers</code>

<span style="text-decoration: underline;"><strong>Load the fixtures in JS tests</strong></span>

For this the spec/javascripts/helpers should be added to the load path for JSTD in jsTestDriver.conf.

Then call the method within the test.

[sourcecode language="ruby"]
describe('Validate registration form', function () {

  beforeEach(function () {
    $(this).ready(function () {
      loadSignupFixture()
    });
  });

  it('should validate the form ', function () {
      form = $('#user-registration-form')
      bindValidationForRegistrationForm()
      form.submit()
      expect($('.status').first().text()).toMatch('Please enter your name')
  });
});
[/sourcecode]

Thats all. In this way it is assured that the HTML is consistent with the actual view. The only thing that needs to be taken care is to make sure that the controller spec should be run whenever there is a change in the DOM, so that it is available to JS unit tests.

