// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new email service (Gmail, Outlook, etc.)
// 4. Create email templates for each form
// 5. Get your public key from the integration settings
// 6. Replace the placeholder values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Replace with your EmailJS public key
  PUBLIC_KEY: 'your_public_key_here',
  
  // Service IDs - create one for each form type
  SERVICES: {
    CONTACT: 'service_gfc_contact',
    SUPPORT: 'service_gfc_support', 
    VOLUNTEER: 'service_gfc_volunteer'
  },
  
  // Template IDs - create templates in EmailJS dashboard
  TEMPLATES: {
    CONTACT: 'template_contact_form',
    SUPPORT: 'template_support_form',
    VOLUNTEER: 'template_volunteer_form'
  }
};

// Email template suggestions:
// 
// Contact Form Template:
// Subject: New Contact Form Submission - {{subject}}
// Body: 
// Name: {{from_name}}
// Email: {{from_email}}
// Subject: {{subject}}
// Message: {{message}}
//
// Support Form Template:
// Subject: New Support Request - {{first_name}} {{last_name}}
// Body:
// Name: {{first_name}} {{last_name}}
// Age: {{age}}
// Phone: {{phone}}
// Address: {{address}}
// Health Conditions: {{health_conditions}}
// Support Types: {{support_types}}
// Emergency Contact: {{emergency_contact}}
// Additional Info: {{additional_info}}
//
// Volunteer Form Template:
// Subject: New Volunteer Application - {{first_name}} {{last_name}}
// Body:
// Name: {{first_name}} {{last_name}}
// Age: {{age}}
// Email: {{email}}
// Phone: {{phone}}
// School: {{school}}
// Availability: {{availability}}
// Communication Preference: {{communication}}
// Experience: {{experience}}