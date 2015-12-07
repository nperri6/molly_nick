class GuestsController < ApplicationController
  def create
    params["firstnames"].each_with_index do |name, index|
      new_guest = Guest.new(firstname: name, lastname: params["lastnames"][index], attending: params["attending"][index.to_s])
      new_guest.save
    end
  end

  def new
    @guestnum = params["guests"]
    render :partial => 'new', layout: false
  end

  def attending
    @attending = Guest.all
  end
end
