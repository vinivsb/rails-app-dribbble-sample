class DribbbleApi

  include HTTParty

  BASE_URL = "http://api.dribbble.com/"

  def initialize; end
  
  def populars(options = {})
    response = self.class.get(BASE_URL + "shots/popular", {query: options})
    JSON.parse(response.body)
  end

  def details(id)
    response = self.class.get(BASE_URL + "shots/" + id)
    JSON.parse(response.body)
  end

end