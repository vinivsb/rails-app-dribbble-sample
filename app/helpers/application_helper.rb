module ApplicationHelper
  def home?
    params[:controller] == "shots" && params[:action] == "index"
  end
end
