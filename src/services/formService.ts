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
      // Validate required fields
      if (!data.name || !data.email) {
        return { success: false, error: 'Name and email are required' };
      }

      // Save to database with better error handling
      const { error: dbError } = await supabase
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

      if (dbError) {
        console.error('Database error:', dbError);
        // Don't fail completely - try to send email at least
        console.log('Form data would be:', data);
      }

      // Send email notification (non-blocking)
      try {
        await EmailService.sendContactMessage(data);
      } catch (emailError) {
        console.error('Email error:', emailError);
        // Email failure shouldn't block form submission
      }

      return { success: true };
    } catch (error) {
      console.error('Contact form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit form. Please try again or contact us directly.';
      return { success: false, error: errorMessage };
    }
  }

  // Submit solution form data
  static async submitSolutionForm(data: SolutionFormData): Promise<{ success: boolean; error?: string }> {
    try {
      // Validate required fields
      if (!data.name || !data.email || !data.company) {
        return { success: false, error: 'Name, email, and company are required' };
      }

      // Save to database with better error handling
      const { error: dbError } = await supabase
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

      if (dbError) {
        console.error('Database error:', dbError);
        // Log the form data for manual follow-up
        console.log('Solution inquiry data:', {
          solution: data.solution,
          name: data.name,
          email: data.email,
          company: data.company
        });
      }

      // Send email notification (non-blocking)
      try {
        await EmailService.sendSolutionInquiry(data);
      } catch (emailError) {
        console.error('Email error:', emailError);
        // Email failure shouldn't block form submission
      }

      return { success: true };
    } catch (error) {
      console.error('Solution form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit form. Please try again or contact us at a.basyir@sheerssoft.com';
      return { success: false, error: errorMessage };
    }
  }

  // Submit support form data
  static async submitSupportForm(data: SupportFormData): Promise<{ success: boolean; error?: string }> {
    try {
      // Validate required fields
      if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
        return { success: false, error: 'All required fields must be filled' };
      }

      // Save to database with better error handling
      const { error: dbError } = await supabase
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

      if (dbError) {
        console.error('Database error:', dbError);
        console.log('Support ticket data:', { firstName: data.firstName, lastName: data.lastName, email: data.email, subject: data.subject });
      }

      // Send email notification (non-blocking)
      try {
        await EmailService.sendSupportTicket(data);
      } catch (emailError) {
        console.error('Email error:', emailError);
      }

      return { success: true };
    } catch (error) {
      console.error('Support form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit support ticket. Please email us at a.basyir@sheerssoft.com';
      return { success: false, error: errorMessage };
    }
  }

  // Submit ROI calculator data
  static async submitROICalculator(data: ROICalculatorData): Promise<{ success: boolean; error?: string }> {
    try {
      // Validate required fields
      if (!data.name || !data.email || !data.company) {
        return { success: false, error: 'Name, email, and company are required' };
      }

      // Save to database with better error handling
      const { error: dbError } = await supabase
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

      if (dbError) {
        console.error('Database error:', dbError);
        console.log('ROI calculation data:', { name: data.name, email: data.email, company: data.company, roi: data.calculatedROI });
      }

      // Send email notification (non-blocking)
      try {
        await EmailService.sendROICalculation(data);
      } catch (emailError) {
        console.error('Email error:', emailError);
      }

      return { success: true };
    } catch (error) {
      console.error('ROI calculator submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit ROI calculation. Please contact us at a.basyir@sheerssoft.com';
      return { success: false, error: errorMessage };
    }
  }

  // Submit waste audit request data
  static async submitWasteAuditRequest(data: WasteAuditData): Promise<{ success: boolean; error?: string }> {
    try {
      // Validate required fields
      if (!data.name || !data.email) {
        return { success: false, error: 'Name and email are required' };
      }

      const { error: dbError } = await supabase
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

      if (dbError) {
        console.error('Database error:', dbError);
        console.log('Waste audit request data:', { name: data.name, email: data.email });
      }

      return { success: true };
    } catch (error) {
      console.error('Waste audit request submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit waste audit request. Please contact us at a.basyir@sheerssoft.com';
      return { success: false, error: errorMessage };
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
