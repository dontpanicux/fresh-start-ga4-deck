# Deck content: "Guessing where your customers come from? Track it with Google Analytics"

Source of truth for every word on every slide. Use the copy exactly as written.

## Conventions

- `[[words]]` in a title = render in the accent color (the last words of the headline, like the reference deck).
- `Eyebrow:` = small uppercase label above the title.
- `Layout:` = the slide's layout.
- `Tag: Reference` = a slide the presenter may skip live. Show a small "Reference" pill in the top-right corner.
- `Tag: Optional` = same pill, labeled "Optional" (slide 4b).
- `Shot:` = file in `/screenshots`. `Highlight:` = draw an accent-colored outline box over that part of the screenshot (position with % values; check it visually).
- `Crop:` = zoom the screenshot into that region inside its frame. Highlights stay on the same part of the image.
- `Notes:` = speaker notes. Hidden on the slide; shown in presenter view (press N).
- Prompt blocks render as code blocks with a Copy button. Placeholders in CAPS (like `G-XXXXXXXXXX`) render highlighted.
- Every slide must make sense to someone reading it later without the video.

---

## 1

- Layout: title
- Eyebrow: CUSTOMER WORKSHOP · THU, NOV 5
- Title: Guessing where your customers come from? [[Track it with Google Analytics]]
- Subtitle: Count bookings and sign-ups on your Bolt.new site, then see which posts and ads bring them in.
- Footer: Blake Arnsdorff · CX Enablement Lead, Bolt.new
- Notes: Welcome. One hour, hands-on. By the end, your site counts bookings and sign-ups, and you know the five numbers to check each week.

## 2

- Layout: two-shots (side by side, with a caption under each)
- Eyebrow: WHY WE'RE HERE
- Title: The door counter and [[the receipt printer]]
- Lead: Bolt.new's analytics is the door counter at a shop. It counts everyone who walks in, with nothing to install and no way to dodge it. GA4 is the receipt printer: it tells you who bought what, and which flyer brought them in. A good shop wants both.
- Shot left: S6-07a-bolt-hosting-analytics.png. Crop: the "Top pages" card. Caption: **Bolt.new:** counts every visit from the server, with no setup. Is my site getting traffic? Where from? Is anything broken?
- Shot right: S6-07b-ga4-realtime-same-time.png. Crop: the "Views by Page title and screen name" card. Caption: **GA4:** runs in your visitor's browser. What did people do? Who booked? Which post brought them?
- Notes, if asked why Bolt.new's numbers look different:
  - Only shows "/": Bolt.new sites load once and switch pages instantly in the browser. That's why they feel fast. The server sees the arrival; GA4 sees the moves after that.
  - Counts /vite.svg and /robots.txt: it reports every file the server delivers, including the site icon and the file search engines check first.
  - Higher numbers than GA4: it counts every visit, including ad blockers, privacy browsers and bots. GA4 only sees browsers that run its tag.
  - No bookings or sign-ups: it's built for traffic, not actions. That's the gap GA4 fills.
  - Give Bolt.new credit: bandwidth and the "Top resources not found (404)" card catch broken links.

## 3

- Layout: cards-3
- Eyebrow: TODAY
- Title: What we'll [[build together]]
- Card 1, CONNECT: GA4 on your Bolt.new site. One prompt installs it. No code.
- Card 2, COUNT: Bookings and sign-ups as key events. GA4's name for the actions that bring you customers.
- Card 3, CREDIT: Tagged links and five weekly numbers. See which posts and ads lead to bookings.

## 4

- Layout: two-shots (desktop large, phone small overlapping the bottom-right corner)
- Eyebrow: OUR DEMO SITE
- Title: Meet [[Fresh Start Home Cleaning]]
- Lead: A fictional cleaning company built with one Bolt.new prompt. It has a booking form and a newsletter sign-up: the two actions we'll track.
- Shot: S2-03-home-page-full-width.png (desktop)
- Shot: S2-08b-mobile-book-page.png (phone). Crop: the phone screen.
- Callout: Your site works too, as long as it has a booking, contact or sign-up form.
- Notes: Prompt 1 built it in Plan mode with the Max model. Long prompts land better that way: review the plan, then build.

## 4b

- Layout: prompt (full width)
- Tag: Optional
- Eyebrow: NO SITE YET?
- Title: Build your own [[Fresh Start]]
- Lead: No site with a form? Paste this into Bolt.new to build your own copy of the demo site, then follow along.
- Prompt:

```
Build a simple, mobile-friendly website for a fictional home cleaning company called "Fresh Start Home Cleaning."

Use React Router so each page has its own URL, and give each page its own browser tab title (for example, "Book a cleaning | Fresh Start Home Cleaning"):
- Home (/): hero section, short intro, "Book a cleaning" button, three customer testimonials
- Services (/services): four services with starting prices: Standard Clean, Deep Clean, Move-In/Move-Out Clean, and Recurring Weekly Clean
- Book (/book): booking form
- About (/about): short story about the business
- Thank you (/thank-you): confirmation page

Booking form (id="booking-form"): name, email, phone, ZIP code, service (dropdown of the four services), number of bedrooms, preferred date, and a "Book my cleaning" button. All fields required. On successful submit, go to /thank-you.

Newsletter sign-up form (id="newsletter-form") in the footer on every page: one email field and a "Get cleaning tips" button. On submit, show an inline "Thanks for signing up!" message.

Show a small notice above both forms: "Demo site: please use made-up details." Don't save or send form data anywhere.

Include a header with navigation links to every page and a "Book a cleaning" button. Don't add any analytics or tracking code yet.
```

- Tip strip: Use Plan mode with the Max model: review the plan, then build.
- Notes: Skip this slide live if everyone has a site. It's here for anyone who wants to build along today.

## 5

- Layout: list-2col (term in bold, definition beside it)
- Eyebrow: WORDS YOU'LL SEE
- Title: Six terms, [[in plain English]]
- **Account:** the folder that holds your GA4 properties. Usually your business name.
- **Property:** where your reports live. One per website.
- **Data stream:** the connection between your website and the property.
- **Measurement ID:** the code starting with G- that tells your site where to send data.
- **Key event:** an action that brings you a customer, like a booking. GA4's word for a conversion.
- **Tagged link:** a normal link with labels on the end that tell GA4 where the visitor came from.

## 6

- Layout: two-shots (stacked, left) + choices table (right)
- Eyebrow: SET UP GA4 · 1 OF 7
- Title: Create your [[account and property]]
- Shot: S1-01-account-creation-v2.png. Crop: the Account details card. Highlight: the Account name field.
- Shot: S1-02-property-details.png. Crop: the Property details card. Highlight: time zone and currency.
- Table (columns: Setting · What to choose · Why it matters · Change later?):
  - Account name · Your business name · You'll see it on every screen · Yes, Admin → Account settings
  - Data sharing · Leave the defaults · Doesn't change your reports · Yes, Admin → Account settings
  - Property name · Your site or business name · It's where your reports live · Yes, Admin → Property details
  - Time zone · Where your business operates · Decides when a "day" starts, so weekly numbers line up with your week · Yes; applies going forward
  - Currency · Your currency · Used for any money values later · Yes; applies going forward
- Callout: Go to analytics.google.com. First time? Click Start measuring, and you'll begin at Account creation. Already have an account? Admin (gear, bottom left) → Create → Property.

## 7

- Layout: shot-cards
- Eyebrow: SET UP GA4 · 2 OF 7
- Title: Pick the [[closest industry]]
- Shot: S1-03-business-details-v2.png. Crop: the Industry category and Business size fields. Highlight: Industry category dropdown showing Home & Garden.
- Card 01, There's no "Services": Pick the closest match. Home services → Home & Garden.
- Card 02, It's only for benchmarks: Industry and size don't change what GA4 tracks.
- Card 03, Change it anytime: Admin → Property details.

## 8

- Layout: shot-cards
- Eyebrow: SET UP GA4 · 3 OF 7
- Title: Pick [[two objectives]]
- Shot: S1-04-business-objectives.png. Highlight: Generate leads and Understand web and/or app traffic (both checked).
- Card 01, Service business: Generate leads + Understand web and/or app traffic.
- Card 02, Online store with checkout on your site: Drive sales + Understand traffic.
- Card 03, What it changes: Only which reports show first in the menu. GA4 collects the same data either way. Add reports later in Reports → Library.
- Decision rule (bold strip under the cards): Which action makes you money, and do you want to know where visitors come from?
- Watch out for: Checking all five. Google recommends one or two.

## 9

- Layout: two-shots (stacked, full width)
- Tag: Reference
- Eyebrow: SET UP GA4 · 4 OF 7
- Title: Accept the terms, [[then choose Web]]
- Shot: S1-04b-terms-of-service.png. Crop: the Data Processing Terms checkbox and the buttons. Highlight: the Data Processing Terms checkbox.
- Shot: S1-05-data-collection-web.png. Crop: the "Choose a platform" row. Highlight: the Web button.
- Caption: Accept both the Terms and the Data Processing Terms (required to use GA4). Bolt.new projects are websites, so choose Web.

## 10

- Layout: shot-cards (screenshot on top, cards in a row below)
- Eyebrow: SET UP GA4 · 5 OF 7
- Title: Set up your [[data stream]]
- Shot: S1-06-stream-setup-v2.png. Crop: the Set up data stream panel (no gray overlay). Highlight: Website URL and Stream name.
- Card 01, Website URL: Your published Bolt.new address. It's a label; tracking runs on the Measurement ID. Edit it later with the pencil icon. Find it in Bolt.new → Publish → copy the address.
- Card 02, Stream name: Anything you'll recognize, like "My website."
- Card 03, Enhanced measurement: Leave it on. It tracks page views, scrolls, outbound clicks, site search, videos and downloads with no code.
- Callout: Before clicking Create & continue, click the gear icon. Next slide.

## 11

- Layout: shot-cards
- Eyebrow: SET UP GA4 · 6 OF 7
- Title: Two settings that matter [[for Bolt.new sites]]
- Shot: S1-07-08-enhanced-measurement-settings.png Crop: the right-hand Enhanced measurement panel.. Highlight 1: "Page changes based on browser history events" (checked). Highlight 2: Form interactions toggle (off).
- Card 01, Keep "Page changes based on browser history events" checked: Bolt.new sites switch pages without reloading. This helps count each page.
- Card 02, Turn Form interactions off: It guesses at activity on every form. We'll send one precise booking event instead, so leaving it on doubles up.
- Card 03, Save: Then click Create & continue.

## 12

- Layout: two-shots
- Eyebrow: SET UP GA4 · 7 OF 7
- Title: Copy your Measurement ID. [[Skip the code.]]
- Shot: S1-08b-google-tag-install-code.png. Crop: the install code panel. Caption: GA4 shows code to paste. Close this panel; Bolt.new installs it for you in the next step.
- Shot: S1-09-stream-details-measurement-id.png. Crop: the Stream ID and Measurement ID in the Stream details row. Highlight: Measurement ID and its copy icon. Caption: Your Measurement ID (G-…) lives here: Admin → Data streams → your stream, top right. Yours will be different.
- Watch out for: Retyping the ID. Use the copy icon; a typo sends data nowhere.
- Callout: "Data collection isn't active" is normal until the tag is on your site.
- Notes: Admin only appears after you finish the setup wizard (click Next).

## 13

- Layout: shot-cards (screenshot on top, cards in a row below)
- Tag: Reference
- Eyebrow: SET UP GA4 · EXTRA
- Title: Leave Google signals [[off]]
- Shot: S1-10-google-signals-off.png. Crop: the Google signals section. No highlight (don't draw attention to "Turn on").
- Card 01, What it is: Adds demographics from visitors signed in to Google.
- Card 02, Why off: With small-business traffic, GA4 hides numbers to protect privacy, and it adds privacy-notice duties.
- Card 03, Where: Admin → Data collection and modification → Data collection.

## 15c

- Layout: shot-cards
- Tag: Reference
- Eyebrow: INSTALL · SAFETY NET
- Title: Bookmark a version [[before you prompt]]
- Shot: SX-01-version-history.png. Crop: the Version History list. Highlight: the bookmarked "Build Start" version.
- Card 01, Open version history: The clock icon at the top of Bolt.new.
- Card 02, Bookmark a good version: Before any tracking prompt, click the bookmark icon next to your current version.
- Card 03, Roll back in one click: If a prompt breaks something.

## 14

- Layout: prompt (full width)
- Eyebrow: INSTALL · PROMPT 1 OF 3
- Title: One prompt [[installs GA4]]
- Prompt:

```
Add Google Analytics 4 to this site with Measurement ID G-XXXXXXXXXX:

1. Put the Google tag (gtag.js) in the <head> of index.html so it loads on every page.
2. Give every page its own browser tab title, and make the <title> in index.html match the home page's title.
3. Check how this site's page links work. If the URLs use a # (like /#/book), send a GA4 page_view each time the visitor moves to a different page, with page_title, page_location (the full URL) and page_path (the part after the #). Send it after the new title is set, once per change. The Google tag already sends the first page view, so never send one on the first page load. If the URLs don't use a #, don't add any page view code.

Don't change anything else. When you're done, tell me which files you changed and whether the site uses # URLs.
```

- Placeholder note: `G-XXXXXXXXXX` → your Measurement ID (GA4 → Admin → Data streams → your stream, top right).
- Tip strip: Bookmark a version in Bolt.new before any tracking prompt, so rolling back is one click.
- Notes: In the test build this took three prompts (install, # page views, a first-load fix). This version folds all three into one.

## 14b

- Layout: list-2col (Make sure box left, Watch out box right)
- Eyebrow: INSTALL · CHECK BOLT.NEW'S WORK
- Title: Check what [[Bolt.new did]]
- Make sure Bolt.new:
  - Its reply names the files it changed
  - Its reply mentions the Google tag and your exact G- ID
  - Its reply says whether your site uses # links
- Watch out for:
  - The Google tag added twice: every visit counts double. Run the check-it prompt (Make Bolt.new show its work) to confirm it appears once.
  - Extra page view code on a site without #: every page counts double
  - Forgetting Update: nothing reaches the live site until you click Publish → Update

## 15

- Layout: two-shots
- Eyebrow: INSTALL · CHECK IT
- Title: See yourself [[in Realtime]]
- Shot: S4-03-realtime-first-visit.png. Crop: the active users card. Caption: In Bolt.new, click Publish → Update, then open your bolt.host address in a new tab (not the preview). In GA4, open Reports → Realtime overview. Within about 30 seconds you appear as an active user.
- Shot: S4-04-realtime-page-titles-working.png. Crop: the Audience, Views by Page title and Event count cards. Highlight: Views by Page title card. Caption: Click between pages. Each page title should appear.
- Shot note (small, under the page-title shot): Home shows twice here because this test site's page title didn't match. Step 2 of the install prompt fixes that.
- Callout: If your site uses # links, the # stays in the address. GA4 now counts the moves; your links don't change.
- Watch out for: Testing in the Bolt.new preview (nothing shows) and ad blockers (they hide your own visits).

## 15b

- Layout: three-shots in a row, same size, with captions
- Tag: Reference
- Eyebrow: INSTALL · IF YOUR SITE USES #
- Title: Why # links [[needed extra help]]
- Shot: S4-04b-live-services-hash-url.png. Crop: the address bar and page header. Caption: Moving to /#/services…
- Shot: S4-04c-realtime-unchanged-after-clicks.png. Crop: the "Views by Page title and screen name" card. Caption: …wasn't counted. Only the home page showed.
- Shot: S4-04-realtime-page-titles-working.png. Crop: the "Views by Page title and screen name" card. Caption: After the fix (now part of the install prompt), every page counts.
- Shot note (small, under the page-title shot): Home shows twice here because this test site's page title didn't match. Step 2 of the install prompt fixes that.
- Notes: Bolt.new sometimes uses # links so pages open correctly when someone refreshes. The workshop install prompt handles both styles.

## 16

- Layout: shot-cards (two stacked shots on the left, steps right)
- Eyebrow: KEY EVENTS
- Title: Mark your key events [[first]]
- Lead: Tell GA4 which actions count as conversions now, so it's ready by the time you test. It can take 10+ minutes to start.
- Shot: S5-02-key-event-settings-correct.png. Crop: the key event settings. Highlight: Mark as key event (on), "Don't set a default key event value" (selected), Once per event.
- Shot: S5-03-key-events-list.png. Crop: the events table. Highlight: the stars next to generate_lead and sign_up.
- Steps:
  1. Admin → Data display → Events → Create event
  2. Name it exactly `generate_lead` (then repeat for `sign_up`)
  3. Turn on Mark as key event
  4. Choose Don't set a default key event value
  5. Leave Counting method on Once per event.
  6. Under Choose how to create an event, select Create with code → Create
- Callout: close_convert_lead and qualify_lead appear on their own when you pick the Generate leads objective. They're for sales pipelines and never fire on a simple site. Leave them.

## 16b

- Layout: cards-3 (one large amber card per warning)
- Eyebrow: KEY EVENTS · WATCH OUT
- Title: Three GA4 [[traps to avoid]]
- Watch out for (bold, high-contrast box):
  - **"Create without code" is pre-selected.** It builds a fake event from page views, so visits count as bookings. Select Create with code.
  - **GA4 pre-selects a $1 value on every new key event.** Bookings would report fake revenue. Choose Don't set, and check each event after saving: ⋮ → Set default key event value.
  - **There's no separate Key events page.** It's under Admin → Data display → Events.

## 17

- Layout: prompt (full width)
- Eyebrow: EVENTS · PROMPT 2 OF 3
- Title: Count bookings and [[sign-ups]]
- Prompt:

```
Add two GA4 events using gtag:

1. When YOUR BOOKING FORM passes validation and submits successfully, send:
   gtag('event', 'generate_lead', { form_name: 'booking', service: <the selected service> })

2. When YOUR SIGN-UP FORM submits successfully, send:
   gtag('event', 'sign_up', { method: 'newsletter' })

Send each event once per submission, and never when validation fails. Never include the name, email, phone, or ZIP code in any event. Don't change anything else. Tell me which files you changed.
```

- Before you paste box (directly under the prompt, accent border):
  - Box title: Before you paste: fill in the 2 highlighted blanks
  - Table (Blank · Type… · Example):
    - YOUR BOOKING FORM · Your booking, contact or quote form, and the page it's on · the booking form on the Book page
    - YOUR SIGN-UP FORM · Your newsletter or account sign-up form, and where it is · the newsletter sign-up form in the footer
  - Subhead: If your site doesn't have…
    - a service dropdown: delete ", service: <the selected service>"
    - a sign-up form: delete step 2
  - Footnote: Leave everything else as is. Bolt.new fills in <the selected service> for you.

## 17a

- Layout: table
- Eyebrow: EVENTS · PROMPT 2 OF 3
- Title: What each part of [[the prompt does]]
- Anatomy table (Part of the prompt · What it does · Why it matters):
  - "submits successfully" · Names the moment that counts · Clicks on a broken form don't count as bookings
  - generate_lead / sign_up · GA4's recommended names · GA4's built-in reports and Google Ads recognize them
  - { service: … } · Extra detail sent with the event · See which service gets booked most
  - "once per submission, never when validation fails" · Stops double counts and false bookings · Your numbers stay honest
  - "Never include the name, email…" · Keeps personal details out · Google's rules forbid personal info in GA4
  - "Don't change anything else" · Keeps Bolt.new focused · No surprise edits
- Callout: Bolt.new sends the event. GA4's key event setting makes it count as a conversion. You need both.

## 17b

- Layout: table
- Eyebrow: EVENTS · YOUR OWN SITE
- Title: Write [[your own]] events prompt
- Step 1, match each action to a name (What the visitor does · Event name · Useful detail):
  - Books an appointment or service · generate_lead · form_name: 'booking', the service
  - Sends a contact or quote form · generate_lead · form_name: 'contact' or 'quote'
  - Joins a newsletter or waitlist · sign_up · method: 'newsletter' or 'waitlist'
  - Creates an account · sign_up · method: 'email' or 'google'
  - Clicks Buy or Checkout · begin_checkout · the product name (not tested in the demo)
  - Lands on a thank-you page after paying · purchase · value and currency (not tested in the demo)

## 17c

- Layout: prompt (template left, Step 3 under it, watch-outs right)
- Eyebrow: EVENTS · YOUR OWN SITE
- Title: Fill in [[the template]]
- Step 2, fill in the template:

```
Add a GA4 event using gtag:
When [the form or button, in plain words, e.g. "the quote form on the Contact page"] [submits successfully / is clicked], send:
gtag('event', '[event name from the table]', { [detail]: [value] })

Send it only after a successful [submit / click], once each time. Never include names, emails, phone numbers, addresses or other personal details. Don't change anything else. Tell me which file you changed.
```

- Watch out for:
  - Forms from another company (Calendly, Typeform, Jotform): this prompt can't see inside them. Those tools have their own GA4 settings.
  - Payment pages on another site (Stripe payment links): track the click as begin_checkout. Counting purchase needs a thank-you page back on your site.
  - Made-up names like booking_done: they work, but GA4's built-in reports won't recognize them.

## 17ca

- Layout: prompt (full width)
- Eyebrow: EVENTS · YOUR OWN SITE
- Title: Fill in [[the template]] (continued)
- Example title: Example: a quote form
- Prompt:

```
Add a GA4 event using gtag:
When the quote form on the Contact page submits successfully, send:
gtag('event', 'generate_lead', { form_name: 'quote' })

Send it only after a successful submit, once each time. Never include names, emails, phone numbers, addresses or other personal details. Don't change anything else. Tell me which file you changed.
```

- Note: Pick one option where the template says "submits successfully / is clicked" and "submit / click". The event name and detail come from the table on the previous slide.
- Step 3: Run the check-it prompt. If you added a new event, mark it as a key event now.

## 18

- Layout: shot-cards (prompt block above the cards)
- Eyebrow: CHECK · PROMPT 3 OF 3
- Title: Make Bolt.new [[show its work]]
- Prompt:

```
Don't change anything. List every place this site sends data to Google Analytics: the Google tag, any page views and any events. Confirm the Google tag appears only once, and confirm no event includes a name, email, phone number or ZIP code.
```

- Shot: S5-01b-check-it-prompt-audit.png (crop to the Bolt.new chat panel). Highlight: the "Confirmations" section.
- Card 01, A read-only audit: Bolt.new changes nothing; it lists every tracking point with file and line.
- Card 02, One tag: Confirms the Google tag appears once.
- Card 03, No personal details: Confirms no event carries names, emails or phone numbers.
- Callout: Run it after each tracking prompt. No code reading needed.

## 19

- Layout: two-shots + troubleshooting table
- Eyebrow: VERIFY
- Title: Is it [[working?]]
- Shot: S5-05a-key-events-partial.png. Crop: the Views by Page title and Event count cards. Highlight: Event count card (generate_lead, sign_up). Caption: **Realtime:** submit a test booking and sign-up on your live site. Your events appear within a minute in Event count.
- Shot: S6-04-debugview-generate-lead-key-event-flag.png. Crop: the DebugView timeline and parameters. Highlight: the green flag next to generate_lead. Caption: **DebugView:** the green flag means GA4 counts it as a key event.
- Table (Symptom · Likely cause · Fix):
  - No visit in Realtime · Ad blocker or privacy browser · Pause it for your site, or use a clean Chrome window
  - No visit in Realtime · Testing in the Bolt.new preview · Use your published bolt.host address
  - No visit in Realtime · Last change not published · Publish → Update
  - Only the first page appears · Page changes not counted · Run the check-it prompt, then ask Bolt.new to count page changes
  - Key events card is empty · GA4 hasn't started labeling yet · Normal for 10+ minutes; check Event count instead
  - Booking counted when the form has errors · Event sent too early · Ask Bolt.new to send it only after validation passes
- Callout: GA4 will always show fewer visitors than Bolt.new. That's normal.
- Notes: Use test bookings with made-up details.

## 20

- Layout: shot-cards
- Tag: Reference
- Eyebrow: VERIFY · DEBUGVIEW
- Title: How to read [[DebugView]]
- Shot: S6-03c-debugview-after-first-load-fix.png. Crop: the minute column, timeline and Top events.
- Card 01, Turn it on: tagassistant.google.com → Add domain → paste your site → Connect. Then GA4 → Admin → DebugView.
- Card 02, Read top down: Newest events are at the top. The left column counts events per minute; the gaps show seconds between events.
- Card 03, The icons: Blue is an event. A green flag is a key event. user_engagement is automatic; ignore it.
- Card 04, Click an event: See its details. Click ▸ to see a value. The number on the right counts how many times it was sent, not the value.
- Shot (small, inset): S6-05-debugview-service-deep-clean.png. Crop: the service = Deep Clean parameter. Caption: service = Deep Clean, and no personal details.

## 21

- Layout: shot-cards (link anatomy strip above)
- Eyebrow: TAGGED LINKS
- Title: See which posts [[bring customers]]
- Link anatomy (render as a single link with each part labeled underneath):
  `YOUR-SITE.bolt.host/?utm_source=instagram&utm_medium=social&utm_campaign=fall_promo`
  - utm_source = who sent them (instagram, newsletter, google)
  - utm_medium = what kind of channel (social, email, qr)
  - utm_campaign = which promotion (fall_promo, nov_email)
- Shot: S7-01-debugview-source-instagram.png. Crop: the source = instagram parameter. Highlight: source = instagram. Caption: Proof in DebugView: the visit carries source = instagram.
- Card 01, You don't give these to Bolt.new: Put them where you share your site: posts, emails, QR codes. The Google tag reads them automatically.
- Card 02, Test in Incognito: GA4 remembers where your browser first came from. A new Incognito window acts like a new visitor.
- Card 03, Sites with # links: Check your address bar: if page addresses look like /#/book, your site uses # links. Put the tags before the #: YOUR-SITE.bolt.host/?utm_source=instagram#/book
- Callout: Build links with Google's Campaign URL Builder (search "Campaign URL Builder"). Sources show up in Reports → Acquisition → Traffic acquisition within 24–48 hours.
- Notes: Realtime's "First user source" card stayed empty all day in the test build, even though DebugView showed the source. Don't demo that card live.

## 21b

- Layout: shot-cards (screenshot left, steps and cards right)
- Eyebrow: TAGGED LINKS · BUILD ONE
- Title: Build a tagged link [[in one minute]]
- Shot: S7-03-campaign-url-builder.png. Crop: the form and the generated URL. Highlight: the website URL, campaign source, campaign medium and campaign name fields, and the generated URL box.
- Steps:
  1. Go to ga-dev-tools.google/campaign-url-builder (or search "Campaign URL Builder")
  2. Website URL: your published site. Leave campaign ID, campaign term and campaign content blank.
  3. Campaign source: where the link lives (instagram, newsletter, flyer)
  4. Campaign medium: the kind of channel: social, email, or qr for anything printed
  5. Campaign name: the promotion (fall_promo)
  6. Copy the link and use it in your post, email or QR code generator
- Card, Naming rules: Lowercase, no spaces, same names every time. "Instagram" and "instagram" show up as two different sources.
- Card, For QR codes: Build the tagged link first, then paste it into any QR code generator. Every scan is credited to that flyer.
- Watch out for:
  - Type the promotion into campaign name, not campaign ID (the box right under the URL). If the generated link doesn't include utm_medium and utm_campaign, check those boxes.
  - Leave "Set campaign parameters in the fragment portion of the URL" unchecked.
  - Don't paste tagged links into Bolt.new's regular chat; it may try to change your site. To have Bolt.new write them, use Plan mode (next slide).

## 21b2

- Layout: prompt (one callout box, prompt inside)
- Eyebrow: TAGGED LINKS · BUILD ONE
- Title: Or let Bolt.new [[write them]]
- Callout title: Shortcut: let Bolt.new write them
- Box title: Before you paste
  - Replace YOUR-SITE with your site's address (Bolt.new → Publish → copy the address)
  - Change the three places to the ones you actually use: an Instagram bio, a Facebook post, an email, a flyer
- Body: Switch the chat to Plan mode first, so nothing in your site changes. Then paste:
- Prompt:

```
Don't change any code. Write tagged links (UTM links) for my site, https://YOUR-SITE.bolt.host, for these places:
- my Instagram bio
- my November email newsletter
- a printed flyer with a QR code

Use utm_source, utm_medium and utm_campaign, all lowercase, no spaces. Use these mediums: social for social media, email for emails, qr for anything printed. If my site's links use a #, put the ?utm part before the #. Give me a table with where each link is used and the full link.
```

- Footnote: Test each link once in an Incognito window before you share it.

## 21c

- Layout: shot (one wide screenshot) + cards-3 below
- Tag: Reference
- Eyebrow: TAGGED LINKS · QR AND PRINT
- Title: Why your flyer shows [[as Unassigned]]
- Shot: S7-02-traffic-acquisition-unassigned.png. Crop: the channel table. Highlight 1: the Unassigned row. Highlight 2: its Key events value (3.00).
- Card 01, What happened: GA4 doesn't recognize "qr" as a channel, so channel reports call it Unassigned. Here, it brought the most bookings.
- Card 02, The quick fix: In Traffic acquisition, switch the first column to Session source / medium. You'll see it as "flyer / qr."
- Card 03, Optional: Admin → Data display → Channel groups lets you create an "Offline" channel for qr and print. About five minutes.

## 22

- Layout: table
- Eyebrow: EVERY MONDAY
- Title: The five numbers [[worth checking]]
- Table (Number · What it tells you · Where in GA4):
  - Visitors (Users) · Is anyone finding the site? · Traffic acquisition
  - Bookings (generate_lead) · How many leads came in · Key events column
  - Booking rate · Share of visits that booked · Session key event rate
  - Bookings by channel · Which posts and ads bring customers · Session source/medium rows
  - Sign-ups (sign_up) · Growth of the list you can market to · Key events column
- Skip for now (muted strip): bounce rate, average engagement time, total page views and demographics. With small-business traffic they're noisy and rarely change a decision.

## 23

- Layout: shot (wide report on top) + steps · inset · callout in a row below
- Eyebrow: EVERY MONDAY
- Title: Your [[Monday-morning check]]
- Shot: S8-01-traffic-acquisition-weekly.png. Crop: the report table through the flyer / qr row. Highlight 1: the "Session source / medium" column header. Highlight 2: the Key events column header showing generate_lead.
- Steps:
  1. Reports → Acquisition → Traffic acquisition
  2. Click the first column's dropdown (Session primary channel group) and choose Session source / medium
  3. In the Key events column, change All events to generate_lead
  4. Date range: Last 7 days, with Compare to the previous period
  5. Bookmark the page
- Shot (inset): S8-02-demo-account-traffic-acquisition.png. Crop: the Total row and top three rows. No highlight. Caption: The same report on a site with lots of data: Google's free GA4 demo account (Google Merchandise Store).
- Callout: Regular reports fill in 24–48 hours after visits. Realtime is for checking your setup, not your weekly numbers.

## 24

- Layout: cards-3
- Eyebrow: PRIVACY · NOT LEGAL ADVICE
- Title: Privacy [[in three points]]
- Card 1, Never send personal details: Google's rules prohibit names, emails and phone numbers in GA4. The events prompt already leaves them out.
- Card 2, Say you use analytics: Add a line to your privacy policy that your site uses Google Analytics and cookies.
- Card 3, Consent depends on where visitors live: Visitors in the EU, the UK and some US states have stronger rights over tracking. If you serve those areas, look into a cookie banner and Google's Consent Mode, or ask a professional.

## 25

- Layout: list (question in bold, answer under it)
- Eyebrow: FAQ
- Title: Questions people [[often ask]] (1 of 2)
- **Why does GA4 show fewer visitors than Bolt.new?** Ad blockers hide some visitors from GA4, and Bolt.new also counts bots.
- **How long until I see data?** Realtime shows visits within seconds. Regular reports take 24–48 hours.
- **Can I track Stripe payments?** Possibly, if your payment page sends buyers back to a thank-you page on your site. We didn't test that today.
- **Do I need a cookie banner?** It depends where your visitors live. See the privacy slide.
- **Can I see who exactly visited?** No. GA4 shows patterns, not people, and you shouldn't send names or emails to it.

## 25b

- Layout: list (question in bold, answer under it)
- Eyebrow: FAQ
- Title: Questions people [[often ask]] (2 of 2)
- **Where did my visits go?** Realtime only shows the last 30 minutes. Older visits move to your regular reports.
- **My reports say 0. Is it broken?** New properties take 24–48 hours to fill in. Check Realtime to confirm tracking works.
- **Why is my QR code traffic "Unassigned"?** GA4 doesn't recognize custom mediums like "qr" as a channel. In Traffic acquisition, switch to Session source/medium to see it as "flyer / qr".

## 26

- Layout: cards-3 (each card is a clickable link)
- Eyebrow: NEXT STEPS
- Title: Thank [[You]]
- Card 1, Next workshop: Nov 12: Will anyone pay for your product? Find out before you build. Save your spot. (links to luma.com/bolt-e3ba; shows "luma.com/bolt-e3ba ↗")
- Card 2, Watch the recording: Rewatch today's session, step by step. (links to youtube.com/@BoltDotNew; shows "youtube.com/@BoltDotNew ↗")
- Card 3, All workshops: See every upcoming Bolt.new training session. (links to luma.com/bolt-training; shows "luma.com/bolt-training ↗")
- Notes: Mention the next workshop: Thu, Nov 12, 10:30–11:30 am PT, "Will anyone pay for your product? Find out before you build."
