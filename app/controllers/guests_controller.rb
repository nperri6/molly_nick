class GuestsController < ApplicationController
  def create
    params["firstnames"].each_with_index do |name, index|
      puts("name",name)
      puts(params)
      new_guest = Guest.new(firstname: params["firstnames"][index], lastname: params["lastnames"][index], attending: params["attending"][index.to_s])
      puts(new_guest)
      new_guest.save
    end
    render text: ""
  end

  def new
    @guestnum = params["guests"]
    render :partial => 'new', layout: false
  end

  def attending
    @attending = Guest.all
  end
end
