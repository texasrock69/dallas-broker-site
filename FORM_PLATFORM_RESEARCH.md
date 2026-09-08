# Broker Form Platform Research

## Actual broker program usage

- 48 forms across multiple broker websites.
- Approximately 23 submissions per month across the entire portfolio.
- 12.9 MB stored against a 10 GB allowance.
- Each broker should receive submissions directly at that broker’s own Google Workspace email address.
- Historical submissions, signatures, and signed-PDF records must be accessible by individual broker/form.

## 123FormBuilder capabilities

123FormBuilder stores submissions in its Submissions section, supports filtering, CSV/Excel export, individual PDF download, and resending prior submissions. Its notification configuration can send to typed recipient addresses and attach either a Submission PDF or a Submission PDF using the original form layout. Its signature documentation states that signatures are embedded in HTML notification emails; it also notes that plain-text templates show only a signed/unsigned answer. Forms can be published with JavaScript, inline HTML, or iframe embeds, so existing forms are technically usable on a Railway-hosted site.

The current 123FormBuilder feature matrix shows that the actual usage profile—48 forms, 23 monthly submissions, 12.9 MB storage—matches its Platinum plan: 100 forms, 20,000 submissions per month, 10 GB storage, digital signatures, form archive, external embeds, custom email notifications, and PDF document generation. The official pricing page currently displays Platinum at $24.50 per month when billed yearly during its listed 50% promotion ($294 per year); the normal displayed plan rate is $49 per month. The account’s exact renewal price should be checked in its Billing page before a migration decision.

Sources:

- https://www.123formbuilder.com/docs/managing-form-submissions/
- https://www.123formbuilder.com/docs/attach-form-results-as-pdfs-to-emails/
- https://www.123formbuilder.com/docs/digital-signature/
- https://www.123formbuilder.com/docs/setting-up-notifications-in-123formbuilder/
- https://www.123formbuilder.com/signup.html

## Tally capabilities

Tally offers unlimited forms and submissions under its fair-use policy, with signatures and PDF export available on the free plan. The Pro plan is listed at $24/month and provides customizable email notifications, workspaces/folders, custom branding, and automatic PDF attachments to notifications. Signed submissions remain in the form’s Submissions table; the signature is included in the generated PDF. Tally’s published pricing does not state a per-recipient-email limit, but this should be confirmed in a free trial before any migration.

Sources:

- https://tally.so/pricing
- https://tally.so/help/electronic-signatures
- https://tally.so/help/create-a-pdf-from-form-responses
- https://tally.so/help/self-email-notifications

## Cognito Forms capabilities

Cognito’s Pro plan is listed at $19/month when billed annually, with unlimited forms, 2,000 entries per month, 1 GB storage, and electronic signatures. It supports responsive iframe embedding, unlimited form folders for Pro and higher, saved/filterable entries, Excel export, direct email notifications to static recipient emails, and PDF/Word entry document attachments. Its notification guide states that up to eight recipient addresses can be included in one email notification; this is per notification rather than an account-wide linked-email limit. Forms can be grouped in a folder per broker and an entry view can be saved per form.

Sources:

- https://www.cognitoforms.com/pricing
- https://www.cognitoforms.com/support/168/style-publish/iframe-embedding
- https://www.cognitoforms.com/support/21/building-forms/organizing-forms
- https://www.cognitoforms.com/support/20/building-forms/create-custom-email-notifications
- https://www.cognitoforms.com/support/556/how-to-guides/collect-signed-contracts

## Fillout capabilities

Fillout’s free plan lists unlimited forms, 1,000 responses per month, form embedding, PDF generation, CSV export, and a submissions Results view with filtering and sorting. Its Starter plan is listed at $15/month billed annually and adds signature collection. Pro is listed at $40/month billed annually and removes branding. Its notification documentation supports direct recipient emails, and its custom-email documentation says a signature field can be added as an email attachment. Specific requirements for attaching a full completed PDF should be tested in a free account before selecting it.

Sources:

- https://www.fillout.com/pricing
- https://fillout.com/help/view-responses
- https://fillout.com/help/email-notifications
- https://fillout.com/help/custom-emails

## Cost comparison for the actual usage profile

| Platform | Annual price shown publicly | Forms / monthly entries | Direct broker email and archive | Signature and signed-PDF delivery | Assessment |
| --- | ---: | --- | --- | --- | --- |
| 123FormBuilder Platinum | $294/year during the displayed promotion; normal displayed rate is $49/month | 100 forms / 20,000 entries | Yes / yes | Yes / yes | Already meets every requirement and can be embedded outside Wix. |
| Cognito Forms Pro | $228/year | Unlimited forms / 2,000 entries | Yes / yes, with folders and saved entries | Yes / PDF attachment | Best documented lower-cost replacement for the low-volume portfolio. |
| Tally Pro | $288/year | Unlimited forms / fair-use submissions | Likely / yes | Yes / automatic PDF attachment | Attractive interface, but direct-recipient settings should be proven in a trial. |
| Fillout Starter | $180/year | Unlimited forms / 2,000 entries | Yes / yes | Signature supported; exact signed-PDF email flow should be tested | Lowest listed paid plan, but needs a proof-of-concept before migration. |

## Provisional recommendation

For the actual low-volume broker portfolio, Cognito Forms Pro is the leading candidate because its published $19/month annual price includes signatures, unlimited forms, a direct form-entry archive, broker folders, PDF attachments, and static direct-recipient emails without a published account-wide recipient-address cap. It would save approximately $66/year against 123FormBuilder Platinum’s currently displayed annual promotional price and may save substantially more if the current 123FormBuilder account renews at its normal $49/month rate. A no-card 14-day Cognito Pro trial should be used to prove the exact Dallas NDA before any broad migration.
