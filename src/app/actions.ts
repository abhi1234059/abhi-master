
"use server";

import * as z from "zod";

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
    // Validate data on the server side as well
    const validatedData = contactFormSchema.parse(data);

    console.log("CONTACT FORM SUBMISSION RECEIVED:");
    console.log("Name:", validatedData.name);
    console.log("Email:", validatedData.email);
    console.log("Phone:", validatedData.phone || "Not provided");
    console.log("Requirement:", validatedData.requirement);
    console.log("Message:", validatedData.message);
    
    // In a real application, you would add your email sending logic here.
    // For example, using Nodemailer or an email API service like SendGrid.
    // e.g., await sendEmail({ to: 'yourgmail@example.com', subject: 'New Contact Form Submission', body: ... });

    return { success: true, message: "Form submitted successfully!" };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    if (error instanceof z.ZodError) {
      return { success: false, message: "Invalid form data.", errors: error.flatten().fieldErrors };
    }
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
