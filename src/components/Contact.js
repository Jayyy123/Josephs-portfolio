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
                        <p>Ajao Estate, Lagos Nigeria</p>
                    </div>

                    <div class="email">
                        <h4>Email:</h4>
                        <p>josephofilii@gmail.com</p>
                    </div>

                    <div class="phone">
                        <h4>Call:</h4>
                        <p>+234 7060942709</p>
                    </div>
                    </div>

                </div>

                <div className='form'>
                    <form action="forms/contact.php" method="post" className="php-email-form">
                    <div class="row">
                        <div className="form-group col-md-6">
                        <label for="name">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name" required />
                        </div>
                        <div className="form-group col-md-6">
                        <label for="name">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="name">Subject</label>
                        <input type="text" className="form-control" name="subject" id="subject" required />
                    </div>
                    <div className="form-group">
                        <label for="name">Message</label>
                        <textarea class="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div classNAme="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div class="text-center"><button type="submit">Send Message</button></div>
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