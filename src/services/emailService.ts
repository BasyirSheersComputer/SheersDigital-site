/**
 * Email Service
 * Handles sending formatted emails for all form submissions
 * Sends to: a.basyir@sheerssoft.com
 */

import { supabase } from '../lib/supabase';

export interface EmailData {
  to: string;
  subject: string;
  htmlContent: string;
  textContent?: string;
}

export class EmailService {
  private static readonly ADMIN_EMAIL = 'a.basyir@sheerssoft.com';
  
  /**
   * Send email via Supabase Edge Function
   */
  private static async sendEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
    try {
      // For now, we'll use a webhook approach or direct API
      // You can implement this with Supabase Edge Functions, Resend, or SendGrid
      
      // Option 1: Use Supabase function (requires Edge Function setup)
      const { data: result, error } = await supabase.functions.invoke('send-email', {
        body: { 
          to: data.to,
          subject: data.subject,
          html: data.htmlContent,
          text: data.textContent
        }
      });

      if (error) {
        console.error('Email sending error:', error);
        // Fallback: Log to console for now
        console.log('Email would be sent:', data);
        return { success: true }; // Still return success to not block form submission
      }

      return { success: true };
    } catch (error) {
      console.error('Email service error:', error);
      // Don't fail the form submission if email fails
      return { success: true, error: 'Email notification failed but form was saved' };
    }
  }

  /**
   * Format and send solution inquiry email
   */
  static async sendSolutionInquiry(formData: any): Promise<{ success: boolean; error?: string }> {
    const subject = `New Solution Inquiry: ${formData.solution}`;
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .value { color: #333; }
            .footer { margin-top: 30px; padding: 20px; text-align: center; color: #666; font-size: 12px; }
            .priority-badge { display: inline-block; padding: 5px 15px; background: #fbbf24; color: #92400e; border-radius: 20px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🎯 New Solution Inquiry</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">${formData.solution}</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Contact Person</div>
                <div class="value">${formData.name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">🏢 Company</div>
                <div class="value">${formData.company}</div>
              </div>
              
              ${formData.phone ? `
              <div class="field">
                <div class="label">📞 Phone</div>
                <div class="value"><a href="tel:${formData.phone}">${formData.phone}</a></div>
              </div>
              ` : ''}
              
              ${formData.companySize ? `
              <div class="field">
                <div class="label">👥 Company Size</div>
                <div class="value">${formData.companySize}</div>
              </div>
              ` : ''}
              
              ${formData.locations ? `
              <div class="field">
                <div class="label">📍 Locations</div>
                <div class="value">${formData.locations}</div>
              </div>
              ` : ''}
              
              ${formData.currentWaste ? `
              <div class="field">
                <div class="label">🗑️ Current Monthly Waste</div>
                <div class="value">${formData.currentWaste}</div>
              </div>
              ` : ''}
              
              ${formData.monthlyRevenue ? `
              <div class="field">
                <div class="label">💰 Monthly Revenue</div>
                <div class="value">${formData.monthlyRevenue}</div>
              </div>
              ` : ''}
              
              ${formData.specificNeeds ? `
              <div class="field">
                <div class="label">📝 Specific Needs</div>
                <div class="value">${formData.specificNeeds}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">🕐 Submitted At</div>
                <div class="value">${new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This inquiry was submitted via the WasteWise website solution form.</p>
              <p>Please respond within 24 hours to maintain high customer satisfaction.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
New Solution Inquiry: ${formData.solution}

Contact Person: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.companySize ? `Company Size: ${formData.companySize}` : ''}
${formData.locations ? `Locations: ${formData.locations}` : ''}
${formData.currentWaste ? `Current Monthly Waste: ${formData.currentWaste}` : ''}
${formData.monthlyRevenue ? `Monthly Revenue: ${formData.monthlyRevenue}` : ''}
${formData.specificNeeds ? `Specific Needs: ${formData.specificNeeds}` : ''}

Submitted At: ${new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' })}
    `;

    return this.sendEmail({
      to: this.ADMIN_EMAIL,
      subject,
      htmlContent,
      textContent
    });
  }

  /**
   * Format and send support ticket email
   */
  static async sendSupportTicket(formData: any): Promise<{ success: boolean; error?: string }> {
    const subject = `Support Ticket: ${formData.subject}`;
    
    const priorityColor = formData.priority.includes('Urgent') ? '#ef4444' : 
                         formData.priority.includes('High') ? '#f59e0b' : 
                         formData.priority.includes('Medium') ? '#3b82f6' : '#10b981';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .label { font-weight: bold; color: #ef4444; margin-bottom: 5px; }
            .value { color: #333; }
            .priority-badge { display: inline-block; padding: 5px 15px; background: ${priorityColor}; color: white; border-radius: 20px; font-weight: bold; margin-top: 10px; }
            .message-box { background: #fff7ed; border-left: 4px solid #f59e0b; padding: 15px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🎫 New Support Ticket</h1>
              <span class="priority-badge">${formData.priority}</span>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">📋 Subject</div>
                <div class="value">${formData.subject}</div>
              </div>
              
              <div class="field">
                <div class="label">👤 Customer Name</div>
                <div class="value">${formData.firstName} ${formData.lastName}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
              </div>
              
              ${formData.phone ? `
              <div class="field">
                <div class="label">📞 Phone</div>
                <div class="value"><a href="tel:${formData.phone}">${formData.phone}</a></div>
              </div>
              ` : ''}
              
              ${formData.company ? `
              <div class="field">
                <div class="label">🏢 Company</div>
                <div class="value">${formData.company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="message-box">${formData.message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="field">
                <div class="label">🕐 Submitted At</div>
                <div class="value">${new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' })}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
New Support Ticket
Priority: ${formData.priority}

Subject: ${formData.subject}
Customer: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.company ? `Company: ${formData.company}` : ''}

Message:
${formData.message}

Submitted At: ${new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' })}
    `;

    return this.sendEmail({
      to: this.ADMIN_EMAIL,
      subject,
      htmlContent,
      textContent
    });
  }

  /**
   * Format and send ROI calculation email
   */
  static async sendROICalculation(formData: any): Promise<{ success: boolean; error?: string }> {
    const subject = `ROI Calculation Request: ${formData.company}`;
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .label { font-weight: bold; color: #10b981; margin-bottom: 5px; }
            .value { color: #333; }
            .highlight-box { background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); padding: 20px; border-radius: 8px; margin-top: 20px; }
            .roi-number { font-size: 32px; font-weight: bold; color: #059669; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">📊 ROI Calculation Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Contact Person</div>
                <div class="value">${formData.name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">🏢 Company</div>
                <div class="value">${formData.company}</div>
              </div>
              
              <div class="field">
                <div class="label">👥 Company Size</div>
                <div class="value">${formData.employees}</div>
              </div>
              
              <div class="field">
                <div class="label">📍 Locations</div>
                <div class="value">${formData.locations}</div>
              </div>
              
              <div class="field">
                <div class="label">💰 Monthly Revenue</div>
                <div class="value">RM ${formData.monthlyRevenue}</div>
              </div>
              
              <div class="field">
                <div class="label">🗑️ Current Monthly Waste</div>
                <div class="value">RM ${formData.currentWaste}</div>
              </div>
              
              ${formData.calculatedSavings ? `
              <div class="highlight-box">
                <div class="label">💎 Calculated Monthly Savings</div>
                <div class="roi-number">RM ${formData.calculatedSavings.toLocaleString()}</div>
                ${formData.calculatedROI ? `
                  <div style="margin-top: 15px;">
                    <div class="label">Annual ROI</div>
                    <div style="font-size: 24px; font-weight: bold; color: #059669;">${formData.calculatedROI}%</div>
                  </div>
                ` : ''}
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">🕐 Submitted At</div>
                <div class="value">${new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' })}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    return this.sendEmail({
      to: this.ADMIN_EMAIL,
      subject,
      htmlContent
    });
  }

  /**
   * Format and send contact form email
   */
  static async sendContactMessage(formData: any): Promise<{ success: boolean; error?: string }> {
    const subject = `Contact Form: ${formData.service || 'General Inquiry'}`;
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .label { font-weight: bold; color: #3b82f6; margin-bottom: 5px; }
            .value { color: #333; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">📬 New Contact Message</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${formData.name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
              </div>
              
              ${formData.phone ? `
              <div class="field">
                <div class="label">📞 Phone</div>
                <div class="value"><a href="tel:${formData.phone}">${formData.phone}</a></div>
              </div>
              ` : ''}
              
              ${formData.company ? `
              <div class="field">
                <div class="label">🏢 Company</div>
                <div class="value">${formData.company}</div>
              </div>
              ` : ''}
              
              ${formData.service ? `
              <div class="field">
                <div class="label">🎯 Service Interest</div>
                <div class="value">${formData.service}</div>
              </div>
              ` : ''}
              
              ${formData.message ? `
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="value">${formData.message}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">🕐 Submitted At</div>
                <div class="value">${new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' })}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    return this.sendEmail({
      to: this.ADMIN_EMAIL,
      subject,
      htmlContent
    });
  }
}

export default EmailService;

