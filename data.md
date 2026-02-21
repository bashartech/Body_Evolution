# EmailJS Template HTML

Use this HTML code for your EmailJS email template:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #1a1a1a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #2d2d2d; border: 2px solid #d4af37; border-radius: 8px; overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #d4af37 0%, #f9e39a 100%); padding: 30px; text-align: center;">
              <h1 style="color: #1a1a1a; margin: 0; font-size: 28px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">New Contact Submission</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 20px;">
                    <h2 style="color: #d4af37; margin: 0 0 10px 0; font-size: 18px; text-transform: uppercase;">From:</h2>
                    <p style="color: #ffffff; margin: 0; font-size: 16px;"><strong>{{from_name}}</strong></p>
                    <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 14px;">{{from_email}}</p>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 20px; border-top: 1px solid #444444; padding-top: 20px;">
                    <h2 style="color: #d4af37; margin: 0 0 10px 0; font-size: 18px; text-transform: uppercase;">Subject:</h2>
                    <p style="color: #ffffff; margin: 0; font-size: 16px;">{{subject}}</p>
                  </td>
                </tr>
                
                <tr>
                  <td style="border-top: 1px solid #444444; padding-top: 20px;">
                    <h2 style="color: #d4af37; margin: 0 0 10px 0; font-size: 18px; text-transform: uppercase;">Message:</h2>
                    <p style="color: #cccccc; margin: 0; font-size: 14px; line-height: 1.6;">{{message}}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #1a1a1a; padding: 20px; text-align: center;">
              <p style="color: #888888; margin: 0; font-size: 12px;">This message was sent from the Body Evolution contact form.</p>
              <p style="color: #d4af37; margin: 10px 0 0 0; font-size: 12px; font-weight: bold;">BODY EVOLUTION</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

## Template Variables

| Variable | Description |
|----------|-------------|
| `{{from_name}}` | Visitor's full name |
| `{{from_email}}` | Visitor's email address |
| `{{subject}}` | Message subject |
| `{{message}}` | Message content |

## Setup Instructions

1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Add an Email Service (e.g., Gmail, Outlook, or SMTP)
3. Create a new Email Template and paste the HTML above
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Add them to your `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_public_key"
```
