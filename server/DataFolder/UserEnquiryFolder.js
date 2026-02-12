
const nodemailer = require("nodemailer");
const enquiryModel = require("../Models/EnquiryModel");

require("dotenv").config();
let enquiryInsert = async (req, res) => {
  let { name, email, phone,callback,service } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission ",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Preferred Callback:</b> ${callback}</p>
        <p><b>Service:</b> ${service}</p>
       
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
};


module.exports = { enquiryInsert };
