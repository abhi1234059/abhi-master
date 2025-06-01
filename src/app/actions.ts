
"use server";

import * as z from "zod";
// import nodemailer from "nodemailer";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }).optional().or(z.literal('')),
  requirement: z.enum(["Website", "App", "Both"]),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function submitContactFormAction(data: ContactFormValues) {
  try {
    const validatedData = contactFormSchema.parse(data);

    console.log("Contact form data received:", validatedData);

    // Email sending logic (temporarily disabled until App Password is set up)
    //
    // Ensure you have GMAIL_EMAIL and GMAIL_APP_PASSWORD in your .env file
    // For GMAIL_APP_PASSWORD, generate an App Password from your Google Account security settings.
    // Do NOT use your regular Gmail password.
    //
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.GMAIL_EMAIL,
    //     pass: process.env.GMAIL_APP_PASSWORD, // Use the App Password here
    //   },
    // });

    // const mailOptions = {
    //   from: `"SiteQuick Contact Form" <${process.env.GMAIL_EMAIL}>`, // Sender address
    //   to: process.env.GMAIL_EMAIL, // List of receivers (your email address)
    //   subject: "New Contact Form Submission from SiteQuick Personal", // Subject line
    //   html: `
    //     <h1>New Contact Form Submission</h1>
    //     <p><strong>Name:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Phone:</strong> ${validatedData.phone || "Not provided"}</p>
    //     <p><strong>Requirement:</strong> ${validatedData.requirement}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
    //   `,
    // };

    // await transporter.sendMail(mailOptions);
    // console.log("Contact form submitted and email sent successfully.");
    // return { success: true, message: "Form submitted successfully! We'll be in touch soon." };

    console.log("Contact form submitted (email sending is temporarily disabled pending Google App Password setup).");
    return { success: true, message: "Form submitted (email disabled). We'll be in touch soon." };

  } catch (error) {
    console.error("Error submitting contact form:", error);
    if (error instanceof z.ZodError) {
      return { success: false, message: "Invalid form data.", errors: error.flatten().fieldErrors };
    }
    // Check if the error is from nodemailer (e.g., authentication failure)
    // if (error instanceof Error && 'code' in error && (error as any).code === 'EAUTH') {
    //     return { success: false, message: "Could not send email. Please check server configuration (email credentials)." };
    // }
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
