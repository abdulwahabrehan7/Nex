# IT Desk — Support Knowledge Hub

A responsive IT support learning website built with HTML, Tailwind CSS (CDN) and vanilla JavaScript.

## Run locally
1. Extract the ZIP.
2. Open the `it-support-guide` folder in VS Code.
3. Open `index.html` with the Live Server extension, or open it directly in a browser.
4. Internet access is needed for the Tailwind CDN, Google Fonts, Unsplash images and live diagnostic API calls.

## Features
- Searchable and filterable support runbooks
- Windows, network/VPN, Microsoft 365, account/access and hardware guides
- Step-by-step guide view
- Browser connectivity status
- Public IP lookup via `https://api.ipify.org`
- DNS A-record lookup via Cloudflare DNS-over-HTTPS
- Service desk incident note generator and copy function
- Four-question troubleshooting quiz
- Responsive mobile navigation and layouts

## Important API and privacy notes
- The public IP lookup sends a request to ipify.
- DNS lookup sends the entered domain to Cloudflare's public DNS-over-HTTPS endpoint.
- Do not submit internal hostnames or confidential domains to the demo DNS tool.
- Browser connection details are limited by browser support. This site cannot inspect a device's private IP, run ping/tracert commands, inspect Active Directory, access Microsoft 365 tenant health, or change endpoint settings from a normal browser page.
- Follow your organisation's security, change-management, ESD and escalation procedures. The included content is educational and should be adapted to your environment.

## Customise
- Edit guide content and quiz questions in `script.js`.
- Edit layout and styling in `index.html` and `style.css`.
- Replace remote Unsplash image URLs with approved local assets if preferred.
