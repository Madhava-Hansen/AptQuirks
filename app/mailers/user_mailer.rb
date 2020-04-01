class UserMailer < ApplicationMailer
  def welcome_email(user)
    @user = user
    @url  = 'https://apartmentquirks.com/login'
    mail(to: @user.email, subject: 'Welcome to Apartment Quirks!')
  end
end
