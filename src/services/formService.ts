import { supabase } from '../lib/supabase';
import { EmailService } from './emailService';

export interface ContactFormData {
  name: string;
  email: string;
  companySize?: string;
  locations?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
}

export interface SolutionFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  companySize?: string;
  locations?: string;
  currentWaste?: string;
  monthlyRevenue?: string;
  specificNeeds?: string;
  solution: string;
}

export interface SupportFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  priority: string;
}

export interface ROICalculatorData {
  name: string;
  email: string;
  company: string;
  monthlyRevenue: string;
  currentWaste: string;
  locations: string;
  employees: string;
  calculatedROI?: number;
  calculatedSavings?: number;
}

export interface WasteAuditData {
  name: string;
  email: string;
  companySize: string;
  locations: string;
}

export class FormService {
  // Submit contact form data
  static async submitContactForm(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
    try {
      // Save to database
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            company: data.company || null,
            service: data.service || null,
            message: data.message || `Company Size: ${data.companySize || 'Not specified'}, Locations: ${data.locations || 'Not specified'}`,
            status: 'new'
          }
        ]);

      if (error) {
        console.error('Contact form submission error:', error);
        return { success: false, error: error.message };
      }

      // Send email notification
      await EmailService.sendContactMessage(data);

      return { success: true };
    } catch (error) {
      console.error('Contact form submission error:', error);
      return { success: false, error: 'Failed to submit form' };
    }
  }

  // Submit solution form data
  static async submitSolutionForm(data: SolutionFormData): Promise<{ success: boolean; error?: string }> {
    try {
      // Save to database
      const { error } = await supabase
        .from('solution_inquiries')
        .insert([
          {
            solution_type: data.solution,
            name: data.name,
            email: data.email,
            company: data.company,
            phone: data.phone || null,
            company_size: data.companySize || null,
            locations: data.locations || null,
            current_waste: data.currentWaste || null,
            monthly_revenue: data.monthlyRevenue || null,
            specific_needs: data.specificNeeds || null,
            status: 'new',
            priority: 'medium'
          }
        ]);

      if (error) {
        console.error('Solution form submission error:', error);
        return { success: false, error: error.message };
      }

      // Send email notification
      await EmailService.sendSolutionInquiry(data);

      return { success: true };
    } catch (error) {
      console.error('Solution form submission error:', error);
      return { success: false, error: 'Failed to submit form' };
    }
  }

  // Submit support form data
  static async submitSupportForm(data: SupportFormData): Promise<{ success: boolean; error?: string }> {
    try {
      // Save to database
      const { error } = await supabase
        .from('support_tickets')
        .insert([
          {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            subject: data.subject,
            priority: data.priority,
            message: data.message,
            status: 'open',
            category: 'general'
          }
        ]);

      if (error) {
        console.error('Support form submission error:', error);
        return { success: false, error: error.message };
      }

      // Send email notification
      await EmailService.sendSupportTicket(data);

      return { success: true };
    } catch (error) {
      console.error('Support form submission error:', error);
      return { success: false, error: 'Failed to submit form' };
    }
  }

  // Submit ROI calculator data
  static async submitROICalculator(data: ROICalculatorData): Promise<{ success: boolean; error?: string }> {
    try {
      // Save to database
      const { error } = await supabase
        .from('roi_calculations')
        .insert([
          {
            name: data.name,
            email: data.email,
            company: data.company,
            company_size: data.employees,
            locations: data.locations,
            monthly_revenue: parseFloat(data.monthlyRevenue.replace(/[^\d.-]/g, '')) || null,
            current_waste: parseFloat(data.currentWaste.replace(/[^\d.-]/g, '')) || null,
            calculated_savings: data.calculatedSavings || null,
            roi_percentage: data.calculatedROI || null,
            payback_period_months: data.calculatedROI ? Math.round(12 / (data.calculatedROI / 100)) : null,
            status: 'calculated'
          }
        ]);

      if (error) {
        console.error('ROI calculator submission error:', error);
        return { success: false, error: error.message };
      }

      // Send email notification
      await EmailService.sendROICalculation(data);

      return { success: true };
    } catch (error) {
      console.error('ROI calculator submission error:', error);
      return { success: false, error: 'Failed to submit form' };
    }
  }

  // Submit waste audit request data
  static async submitWasteAuditRequest(data: WasteAuditData): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase
        .from('waste_audit_requests')
        .insert([
          {
            name: data.name,
            email: data.email,
            company_size: data.companySize,
            locations: data.locations,
            status: 'new',
            source: 'hero_form'
          }
        ]);

      if (error) {
        console.error('Waste audit request submission error:', error);
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Waste audit request submission error:', error);
      return { success: false, error: 'Failed to submit form' };
    }
  }

  // Test database connection for all tables
  static async testConnection(): Promise<{ success: boolean; error?: string }> {
    try {
      const tables = ['contact_messages', 'solution_inquiries', 'support_tickets', 'roi_calculations', 'waste_audit_requests'];
      
      for (const table of tables) {
        const { error } = await supabase
          .from(table)
          .select('count')
          .limit(1);

        if (error) {
          console.error(`Database connection test error for ${table}:`, error);
          return { success: false, error: `Failed to connect to ${table}: ${error.message}` };
        }
      }

      return { success: true };
    } catch (error) {
      console.error('Database connection test error:', error);
      return { success: false, error: 'Failed to connect to database' };
    }
  }
}

export default FormService;
