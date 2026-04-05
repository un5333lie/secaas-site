import { useEffect } from 'react'
import * as CookieConsent from 'vanilla-cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

export default function CookieConsentBanner() {
  useEffect(() => {
    CookieConsent.run({
      revision: 1,
      guiOptions: {
        consentModal: { layout: 'box', position: 'bottom right' },
        preferencesModal: { layout: 'box' },
      },
      categories: {
        necessary: { enabled: true, readOnly: true },
        functional: { enabled: false },
        analytics: { enabled: false },
        marketing: { enabled: false },
      },
      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title: 'We use cookies',
              description:
                'SeelieSec uses cookies for site functionality and — with your consent — analytics. ' +
                'See our <a href="/privacy">Privacy Policy</a>.',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              showPreferencesBtn: 'Manage preferences',
            },
            preferencesModal: {
              title: 'Cookie preferences',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              savePreferencesBtn: 'Save preferences',
              sections: [
                {
                  title: 'Strictly necessary',
                  description: 'Required for authentication and core site functionality. Cannot be disabled.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Functional',
                  description: 'Remembers your preferences across visits.',
                  linkedCategory: 'functional',
                },
                {
                  title: 'Analytics',
                  description: 'Helps us understand how visitors use the site. Data is anonymised.',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'Marketing',
                  description: 'Used to show relevant content. Requires explicit opt-in.',
                  linkedCategory: 'marketing',
                },
                {
                  title: 'More information',
                  description:
                    'Contact us at <a href="mailto:privacy@seelie-sec.internal">privacy@seelie-sec.internal</a> with any questions.',
                },
              ],
            },
          },
        },
      },
    })
  }, [])

  return null
}
