require 'rails_helper'

RSpec.describe ShotsController, :type => :controller do
	context "index" do
    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end
  end

  context "show" do
    it "renders the show template" do
      get :show, id: 1
      expect(response).to render_template("show")
    end
  end
end
