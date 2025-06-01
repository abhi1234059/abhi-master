// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview An AI chatbot assistant for SiteQuick Personal to provide information about services, pricing, and delivery times.
 *
 * - chatbotAssistant - A function that processes user questions and provides relevant information.
 * - ChatbotAssistantInput - The input type for the chatbotAssistant function.
 * - ChatbotAssistantOutput - The return type for the chatbotAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotAssistantInputSchema = z.object({
  question: z.string().describe('The user question about SiteQuick Personal.'),
});
export type ChatbotAssistantInput = z.infer<typeof ChatbotAssistantInputSchema>;

const ChatbotAssistantOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question.'),
});
export type ChatbotAssistantOutput = z.infer<typeof ChatbotAssistantOutputSchema>;

export async function chatbotAssistant(input: ChatbotAssistantInput): Promise<ChatbotAssistantOutput> {
  return chatbotAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotAssistantPrompt',
  input: {schema: ChatbotAssistantInputSchema},
  output: {schema: ChatbotAssistantOutputSchema},
  prompt: `You are a chatbot assistant for SiteQuick Personal. Your goal is to answer user questions about SiteQuick Personal's services, pricing, and delivery times.

Here is some information about SiteQuick Personal:

SiteQuick Personal helps users create professional websites and mobile apps quickly and affordably.

Services Offered:
- Custom Website Design: Mobile-friendly, fast-loading, and clean design with your details.
- App Development: Android apps that match your brand or purpose — personal, business, or promotional.
- Social Media Integration: Easily link your Instagram, Facebook, and other platforms.
- Contact Form: Let your users connect with you directly through your website.
- No Images, Clean Layout: Text-only designs for speed, simplicity, and privacy.
- Responsive Design: Works perfectly on mobile, tablet, and desktop.

Pricing Packages:
- Basic: ₹500
- Standard: ₹1000
- Premium: ₹1500
All packages include full setup and free minor changes after delivery.

Contact Information:
- Phone: +91 8320446826
- Email: sitequickpersonal@gmail.com
- Instagram: @abhi293848
- Facebook: Abhi Dankhara

Now answer the following question:

{{{question}}}`, 
});

const chatbotAssistantFlow = ai.defineFlow(
  {
    name: 'chatbotAssistantFlow',
    inputSchema: ChatbotAssistantInputSchema,
    outputSchema: ChatbotAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
