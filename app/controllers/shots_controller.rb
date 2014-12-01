class ShotsController < ApplicationController
  
  respond_to :html

  before_filter :init_dribble
  
  def index
    @shots = @dribbble.populars(page: params[:page], per_page: 20)
  end

  def show
    @shot = @dribbble.details(params[:id])
  end

  def init_dribble
    @dribbble = DribbbleApi.new
  end
end