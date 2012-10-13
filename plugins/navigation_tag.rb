module Jekyll
  class NavigationTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      @nav_items = YAML.load(File.read('../../navigation.yml'))      
    end

    def render(context)
      navigation_markup = ""
      @nav_items.each do |nav_key,nav_value|
        title = nav_value[:title]
        address = nav_value[:address]
        
        active_status = (context['page']['nav'] == title) ? "active" : ""
        dropdown_status = nav_value[:sub_nav] ? "dropdown" : ""
        
        navigation_markup += "<li class='#{active_status} #{dropdown_status}'><a href='#{address}' target='#{nav_value[:target]}'>#{title}</a>"

        if nav_value[:sub_nav]
          navigation_markup += "<ul class='dropdown-menu'>"
          nav_value[:sub_nav].each do |subnav_key,subnav_value|
            subnav_title = subnav_value[:title]
            subnav_address = subnav_value[:address]
            
            navigation_markup += "<li><a href='#{subnav_address}' target='#{subnav_value[:target]}'>#{subnav_title}</a></li>"
          end
          navigation_markup += "</ul>"
        end
        
        navigation_markup += "</li>"
      end
      navigation_markup
    end
  end
end

Liquid::Template.register_tag('navigation', Jekyll::NavigationTag)
