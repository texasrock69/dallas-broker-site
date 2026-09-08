# Dallas Cognito Forms NDA Proof of Concept

## Purpose

Determine whether Cognito Forms Pro can replace the current Web3Forms-based Dallas Online NDA workflow while preserving direct broker delivery and a searchable historical submission archive. This proof of concept is intentionally limited to a non-public test route and does not replace the current live NDA form.

## No-risk trial safeguards

The evaluation will start only with Cognito’s published no-card trial. No billing information will be entered, no recurring paid subscription will be activated, and the test form will not be linked from the public navigation. If the trial is not selected, it will lapse to the free Individual plan rather than charge the account, according to Cognito’s current pricing guidance.

## Required test configuration

The test form will contain the current Dallas NDA terms, buyer contact fields, a required consent checkbox, a required drawn or typed signature field, and an automatically recorded signature date. It will send a clean notification directly to Toby Barker’s existing business email address and attach a completed PDF that includes the signature.

## Acceptance checks

| Check | Pass condition |
| --- | --- |
| Form appearance | The embedded form is readable and usable on desktop and a 375 × 812 phone viewport. |
| Direct email | The broker receives the notification directly, with no shared inbox or forwarding rule. |
| Signature | A drawn test signature appears in the submitted record and in the completed PDF. |
| PDF | The broker notification includes a downloadable completed NDA PDF without raw HTML or divider artifacts. |
| Archive | The test submission appears in Cognito’s Dallas NDA Entries page and can be retrieved later. |
| Separation | The test form is isolated from the live Dallas NDA until an explicit decision to replace it. |
| Trial safety | No card is added and no paid subscription is activated during the proof of concept. |

## Decision rule

Only after every acceptance check passes will the form system be considered for broader broker-site migration. If the test fails or is not preferred, the live Dallas Web3Forms workflow remains in place and the trial can be allowed to lapse or be ended in Cognito’s plan settings.
