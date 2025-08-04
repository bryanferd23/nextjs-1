'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 Measurement ID

export default function Analytics() {
  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      )}
    </>
  );
}

// Analytics event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackContactClick = () => {
  trackEvent('contact_click', {
    event_category: 'engagement',
    event_label: 'header_contact_button',
  });
};

export const trackResumeView = () => {
  trackEvent('resume_view', {
    event_category: 'engagement', 
    event_label: 'resume_download',
  });
};

export const trackProjectView = (projectName: string) => {
  trackEvent('project_view', {
    event_category: 'engagement',
    event_label: projectName,
  });
};

export const trackFormSubmission = () => {
  trackEvent('form_submit', {
    event_category: 'engagement',
    event_label: 'contact_form',
  });
};

// Extend window object to include gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, string | number | boolean>) => void;
  }
}