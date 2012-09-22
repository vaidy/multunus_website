module Jekyll
  class TeamIndex < Page
    def initialize(site, base, dir,team_data)
      @site = site
      @base = base
      @dir  = dir
      @name = "index.html"

      self.read_yaml(File.join(base, '_layouts'), 'team.html')
      self.data['team'] = team_data
      self.process(@name)
    end

  end

  class PersonIndex < Page
    def initialize(site, base, dir, path)
      @site     = site
      @base     = base
      @dir      = dir
      @name     = "index.html"
      self.data = YAML.load(File.read(File.join(@base, path)))
      self.data['title'] = "#{self.data['name']} | #{self.data['role']}"

      self.process(@name)
    end
  end

  class GenerateTeam < Generator
    safe true
    priority :normal

    def generate(site)
      write_team(site)
    end

    # Loops through the list of team pages and processes each one.
    def write_team(site)
      team_data = {}
      Dir["source/_team/*.yml"].each do |path|
          name = File.basename(path, '.yml')
          self.write_person_index(site, "_team/#{name}.yml", name)
          config = YAML.load(File.read(path))
          type   = config['type']
          if config['active']
            team_data[type] = {} if team_data[type].nil?
            team_data[type][name] = config
          end
      end
      self.write_team_index(site,team_data)
    end

    def write_team_index(site,team_data)
      team = TeamIndex.new(site, site.source, "/team",team_data)
      team.render(site.layouts, site.site_payload)
      team.write(site.dest)

      site.pages << team
      site.static_files << team
    end

    def write_person_index(site, path, name)
      person = PersonIndex.new(site, site.source, "/team/#{name}", path)
      if person.data['active']
        person.render(site.layouts, site.site_payload)
        person.write(site.dest)

        site.pages << person
        site.static_files << person
      end
    end
  end

  class AuthorsTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text   = text
      @tokens = tokens
    end

    def render(context)
      site = context.environments.first["site"]
      page = context.environments.first["page"]

      if page
        authors = page['author']
        authors = [authors] if authors.is_a?(String)

        "".tap do |output|
          authors.each do |author|
            data     = YAML.load(File.read(File.join(site['source'], '_team', "#{author.downcase.gsub(' ', '-')}.yml")))
            template = File.read(File.join(site['source'], '_includes', 'author.html'))

            output << Liquid::Template.parse(template).render('author' => data)
          end
        end
      end
    end
  end
end

Liquid::Template.register_tag('authors', Jekyll::AuthorsTag)
