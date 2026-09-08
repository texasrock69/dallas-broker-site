
- [x] Make Dallas hero background image self-contained and independent of Manus-linked storage
- [x] Make the three Dallas reference images self-contained and independent of Manus-linked storage
- [x] Make Toby's headshot self-contained and independent of Manus-linked storage
- [x] Verify every Dallas image reference loads from the deployed project assets and does not alter the sample broker project
- [x] Add or update Vitest coverage for the self-contained asset configuration
- [x] Save a checkpoint after the Dallas asset migration is verified

> Note: The sample broker project must remain untouched.
- [x] Add Vitest coverage for all three Dallas reference image paths in Home.tsx
- [x] Commit the Dallas image files and local references to the Dallas GitHub repository for Railway deployment
- [x] Verify the Dallas project is connected to the GitHub repository containing the self-contained assets
- [x] Confirm Railway deploys the Dallas site from the updated repository and serves the local image paths

- [x] Compare the deployed Dallas skyline with the intended clearer blue-and-pink hero treatment

- [x] Refine the Dallas hero sky with a bluer upper-left region, clearer detail, and gentler skyline contrast
- [x] Verify the refined Dallas hero remains readable behind the homepage copy and deploy it

- [x] Save the refined Dallas hero image and overlay update to the connected repository
- [x] Confirm the live Dallas homepage serves the refined hero and retains readable copy

- [x] Confirm the refined Dallas skyline, three reference images, and Toby headshot are all tracked in the Dallas GitHub repository and served without Manus-linked image URLs

- [x] Review the live Dallas homepage at a mobile viewport and record responsive layout findings
- [x] Remove the visible Dallas homepage chat widget for a cleaner interface
- [x] Apply and verify any necessary mobile layout adjustments

- [x] Record the conclusion from a production mobile review of the live Dallas homepage
- [x] Publish the chat-widget removal to Railway and confirm it is absent from the live site

- [x] Correct the Dallas mobile hero height and text contrast after the production phone review
- [x] Re-check the live Dallas homepage at a 375 by 812 mobile viewport after the correction

- [ ] Inspect the Online NDA form, signature capture, and current Web3Forms email payload
- [ ] Replace the raw-text NDA email with a clean document-style completed agreement that includes the signature
- [ ] Add a downloadable PDF copy of each completed NDA submission to the email workflow
- [ ] Add automated coverage for signature inclusion and PDF delivery data
- [ ] Test the completed NDA output and deploy the Dallas email workflow update

- [x] Confirm Web3Forms subscription limits for attachment-enabled NDA, contact, and valuation forms
- [x] Define a reusable broker-specific form routing configuration for Google Workspace recipient addresses

- [x] Compare Web3Forms account structures and costs for 15 broker recipient email addresses

- [x] Research low-cost form-delivery alternatives for 15 broker websites without restrictive recipient-address limits
- [x] Recommend a scalable signed-NDA PDF and Google Workspace email-routing architecture

- [x] Compare direct-to-broker form delivery options that avoid central inbox forwarding and recipient-address caps

- [x] Compare the Dallas and sample broker “How We Sell Your Business” process styling at desktop and mobile sizes
- [x] Match Dallas process numbers, green checkmarks, connector lines, contrast, and responsive spacing to the sample broker site
- [x] Verify and publish the matching Dallas process section on desktop and mobile

- [x] Compare the Dallas and sample process sections at a true mobile viewport
- [x] Save and deploy the Dallas process-section update to GitHub and Railway
- [x] Verify the live Dallas process section on desktop and mobile after deployment

- [x] Document the revised direct-to-broker architecture that avoids shared-inbox forwarding and recipient caps
- [x] Define the selected architecture’s per-broker routing, signature PDF, and Google Workspace delivery requirements

- [x] Compare historical submission archive, export, and per-broker separation capabilities across candidate form systems
- [x] Select a direct-to-broker form option that preserves searchable historical NDA records per website

- [x] Identify the current Form Builder provider and verify whether its forms can be embedded outside Wix
- [x] Confirm whether the existing Form Builder supports broker-separated records, direct email notifications, signatures, and PDF submissions

- [x] Compare lower-cost archived-form platforms against 123FormBuilder for the 15-broker program
- [x] Identify the lowest-cost option that supports direct broker routing, signatures, PDF records, and historical submissions

- [x] Compare lower-cost archived-form options against the actual 48-form, 23-submission-per-month, and 12.9 MB storage profile

- [x] Compare lower-cost archived-form platforms against 123FormBuilder for the 15-broker program
- [x] Identify the lowest-cost option that supports direct broker routing, signatures, PDF records, and historical submissions
- [x] Compare lower-cost archived-form options against the actual 48-form, 23-submission-per-month, and 12.9 MB storage profile

- [x] Compare Dallas and sample broker hero readability at desktop and phone sizes
- [x] Prepare an optional non-destructive Dallas hero contrast refinement only if it improves copy readability

- [x] Publish the approved Dallas hero readability improvement to GitHub and Railway
- [x] Verify the live Dallas hero remains bright and readable on desktop and mobile

- [x] Verify the approved Dallas hero readability update is recorded in the Dallas GitHub repository

- [x] Research 123FormBuilder’s current archive, embed, direct-email, signature, PDF, and pricing capabilities
- [x] Compare 123FormBuilder, Tally, Cognito Forms, and Fillout against the actual broker workload
- [x] Select and document the lowest-cost platform that preserves direct broker delivery and historical signed-NDA records

- [x] Define the Dallas Cognito NDA proof-of-concept acceptance checks and no-card trial safeguards
- [ ] Create a no-card Cognito Forms trial and a Dallas NDA test form
- [ ] Add a non-public Dallas test route with the Cognito NDA embed and direct broker email notification
- [ ] Submit and verify a test NDA signature, completed PDF, email delivery, archived record, and mobile behavior
- [ ] Document whether Cognito Forms is ready to replace the current Dallas NDA workflow and how to end the trial safely

- [x] Defer the dad’s website audit to a separate thread at the user’s request

- [x] Inspect the verified Dallas Netlify duplicate’s default domain and GitHub deployment connection
- [x] Confirm Dallas and BBDG sample broker public traffic is served by Railway before any Netlify disconnect
- [x] Disable the verified-unused Dallas Netlify duplicate and confirm its default Netlify address no longer serves a deployment
- [x] Inspect the Netlify project list for any separate BBDG sample broker duplicate and disable it only if it is unused; no separate sample broker Netlify project exists
