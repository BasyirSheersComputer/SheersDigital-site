import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const scriptId = 'calendly-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }

	// Facebook Pixel Event
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Calendly Modal Opened',
        content_category: 'Booking',
      });
    }

    // Google Analytics Event
    if ((window as any).gtag) {
      (window as any).gtag('event', 'open_modal', {
        event_category: 'Calendly',
        event_label: 'IT Strategy Call Modal',
        value: 1,
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl h-[80vh] relative overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Book Your Free IT Strategy Call</h3>
            <p className="text-gray-600">30 minutes • No obligations • Immediate insights</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 h-full overflow-hidden">
          <div
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/abasyir/30min"
            style={{ minWidth: '320px', height: '100%' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
