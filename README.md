# 👁️ DRISHTI AI — Citizen Road Safety & Grievance Network
### Smart India Hackathon (SIH26124) | Bharat Electronics Limited (BEL) & Urban Local Bodies

> **Live Public Web App (No VPN or Same Wi-Fi Needed):**  
> 🔗 **[https://hoogabooga1.github.io/drishti-citizen-app/](https://hoogabooga1.github.io/drishti-citizen-app/)**

---

## 🌟 Overview

**DRISHTI** (*Digital Road Inspection & Smart Hazard Tracking Infrastructure*) is a unified civic action platform that bridges everyday citizens with municipal public works departments (PWD) and automated public transit bus dashcams.

This repository hosts the **Citizen Road Safety & Grievance Web Application**, designed in a Twitter/X social timeline format to maximize community engagement, transparency, and rapid municipal accountability.

```
       [ Citizen Phone / Web App ]                  [ Transit Bus Edge CV ]
                    │                                          │
                    │ (Photo + Voice + GPS)                    │ (12-15 FPS + IMU Shock)
                    ▼                                          ▼
     ┌──────────────────────────────────────────────────────────────┐
     │                     DRISHTI CORE ENGINE                      │
     │  - Spatial Deduplication (<20m + Heading Vector)             │
     │  - 5-Pillar Detection Reliability Scoring (0-100%)           │
     │  - Automated GIS Ward Geofencing & Department Routing        │
     │  - Configurable SLA Escalation Engine (Tier 1 & Tier 2)      │
     │  - Before/After AI Repair Verification & Cryptographic Card  │
     └──────────────────────────────┬───────────────────────────────┘
                                    │
                                    ▼
                     [ Verified Municipal Action ]
               - Contractor Dispatched & Monitored
               - Visual Repair Quality Assured
               - Citizen Status Updated to "Verified Fixed"
```

---

## 🚀 Key Features

* **📱 Twitter/X Familiar Social Timeline:**
  * Real-time city feed with trending civic grievances, status badges (*🟡 Under Review*, *🟠 Crew Dispatched*, *🟢 Verified Fixed*), and ward-level filtering.
  * Search by road name, ward, or keyword.
* **🔬 Interactive Before/After AI Repair Verification:**
  * Interactive split-screen comparison slider allowing citizens to inspect completed repairs against initial damage photos.
  * Verifies mastic asphalt flushness and crater volume sealing.
* **📜 Incident Evidence Card & Cryptographic Audit:**
  * 5-Pillar Detection Reliability score (Optical Confidence, Image Quality, GPS RTK lock, Fleet Consensus, and IMU Shock).
  * Explainable AI (XAI) rationale detailing why priority and deadlines were assigned.
  * SHA-256 tamper-proof municipal audit trail.
* **🗳️ Community Endorsement ("Affects Me Too"):**
  * One-tap upvote feature that escalates priority in the municipal triage queue without filing duplicate reports.
* **🎙️ Voice Dictation (Hindi & English):**
  * Web Speech API integration allowing citizens to speak their grievance description in English or हिन्दी.
* **🔒 Privacy Protection (DPDP Act 2023):**
  * Automatic masking notices for pedestrian faces and vehicle license plates.
  * Anonymous reporting mode (*Anonymous Resident 🥷*).
* **🌓 Dual Theme & Bilingual Engine:**
  * Switch between Pure Pitch Black and Soft Glass frosted UI.
  * Switch between English and हिन्दी with a single tap.

---

## 💻 Tech Stack

* **Frontend:** Modern Vanilla JavaScript, HTML5, CSS3 Custom Properties (Twitter/X design language), Web Speech API, Service Workers.
* **State Management:** Hybrid Local Provider (Seamlessly runs live with DRISHTI FastAPI backend or standalone with persistent `localStorage` on GitHub Pages).
* **Data Standards:** GeoJSON coordinates, OpenStreetMap Nominatim reverse geocoding, SHA-256 cryptographic hashes.
* **Hosting:** GitHub Pages (Global CDN, 100% uptime, zero Cloudflare bot blocks, mobile-optimized).

---

## 🛠️ Local Development & Quick Start

Simply clone the repository and open `index.html` in any web browser:

```bash
git clone https://github.com/HOOGABOOGA1/drishti-citizen-app.git
cd drishti-citizen-app
# Open index.html in your browser or run a simple static server:
python -m http.server 8000
```
Then visit `http://localhost:8000`.

---

## 🏛️ Smart India Hackathon (SIH26124) Submission

* **Organization:** Bharat Electronics Limited (BEL) & Ministry of Housing and Urban Affairs (MoHUA)
* **Team:** DRISHTI Civic Innovation Team
* **Live Demo:** [https://hoogabooga1.github.io/drishti-citizen-app/](https://hoogabooga1.github.io/drishti-citizen-app/)
