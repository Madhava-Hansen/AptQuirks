class WelcomeUserMailer < ApplicationMailer
  default :from => 'service@apartmentquirks.com'
  def welcome_email(user)
    password_link = ""
    body = 
    "<div>
      <h1 style='font-size:30px;'>Welcome to Apartment Quirks!</h1>
      <p>Username: #{user.username}</p>
      #{if user.isSweepstakes
      "<p style='max-width:600px;'>Thank you so much for your review! You've been entered into the sweepstakes!</p>
      <p>If you'd like to add a custom password, follow the link below:</p>
      <a style='color:#3368FF; href='https://www.apartmentquirks.com/profile?id=#{user.password}&usr=#{user.username}'>Create Password</a>"
      else 
        "<p style='max-width:600px;'>Thanks for signing up, you're an apartment hero! Add a review today and be entered to win a month of free rent!</p>
        <a style='color:#3368FF;'href='https://www.apartmentquirks.com/login'>Apartment Quirks</a>"
      end}
      <p>Feel free to reach out with any questions!</p>
      <br/>
      <div style='line-height:0.5;'>
        <p>Best,</p>
        <p>Madhava Hansen</p>
        <p style='color:grey;font-style:italic;'>Fouder and CEO</p>
        <p style='color:grey;font-style:italic;'>Apartment Quirks, Inc.</p>
        <img style='width:200px;height:auto;'src='https://res.cloudinary.com/aptquirks/image/upload/v1589579825/Screen_Shot_2020-05-15_at_5.56.31_PM_rwhcpx.png'></img>
      </div>
    </div>"
    to = SendGrid::Email.new(email: user.email)
    from = SendGrid::Email.new(email: 'service@apartmentquirks.com')
    subject = 'Welcome to Apartment Quirks'
    content = SendGrid::Content.new(type: 'text/html', value: body)
    mail = SendGrid::Mail.new(from, subject, to, content)
    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
    response = sg.client.mail._('send').post(request_body: mail.to_json)
  end
end
