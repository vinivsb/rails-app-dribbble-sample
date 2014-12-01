require 'rails_helper'

RSpec.describe ShotsController, :type => :routing do
  it "routes get index" do
    expect(get: "/").to route_to(controller: "shots", action: "index")
  end

  it "routes get show" do
    expect(get: "shots/1/details").to route_to(controller: "shots", action: "show", id: "1")
  end
end
