require "sinatra/json"

get '/' do
  erb :index
end

get '/contacts' do
  json Contact.all
end
 

