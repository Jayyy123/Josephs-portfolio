import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <>
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                <h2>Contact</h2>
                <p>Feel free to reach out to me</p>
                </div>

                <div className="contact-main">

                <div className="my-contact-details">
                    <div className="info">
                    <div className="address">
                        <h4>Location:</h4>
                        <p>Ibeju Lekki, Lagos Nigeria</p>
                    </div>

                    <div className="email">
                        <h4>Email:</h4>
                        <p>josephofilii@gmail.com</p>
                    </div>

                    <div className="phone">
                        <h4>Call:</h4>
                        <p>+234 7060942709</p>
                    </div>
                    </div>

                </div>

                <div className='form'>
                    <form action="forms/contact.php" method="post" className="php-email-form">
                    <div className="row">
                        <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                        <label htmlFor="name">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Subject</label>
                        <input type="text" className="form-control" name="subject" id="subject" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Message</label>
                        <textarea className="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>

                </div>

            </div>
        </section>
      </>
    )
  }
}

export default Contact