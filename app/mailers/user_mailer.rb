class UserMailer < ApplicationMailer
  def welcome_email(user)
    @user = user
    @url  = 'https://apartmentquirks.com/login'
    mail(to: 'madhavah@gmail.com', subject: 'Welcome to My Apartment Quirks!')
  end
end
