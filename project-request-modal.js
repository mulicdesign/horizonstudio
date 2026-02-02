// ===== PROJECT REQUEST MODAL - 3 STEP FORM =====
// Version: 1.0
// Language: Bilingual (SR/EN)

(function() {
    'use strict';

    // ===== CONFIGURATION =====
    const CONFIG = {
        emailjs: {
            serviceId: 'service_q1sh3on',
            templateId: 'template_7gsyr67', // Template za Project Request
            publicKey: 'IvHOtzc5iZPZLgVFh'
        }
    };

    // ===== LANGUAGE STRINGS =====
    const LANG = {
        sr: {
            step1Title: 'Vaši Podaci',
            step2Title: 'Usluge',
            step3Title: 'Detalji Projekta',
            successTitle: 'Uspešno!',
            successMessage: 'Hvala! Javićemo vam se u roku od 24h.',
            
            // Step 1
            nameLabel: 'Ime i Prezime*',
            namePlaceholder: 'Vaše ime i prezime',
            emailLabel: 'Email*',
            emailPlaceholder: 'Vaša email adresa',
            companyLabel: 'Kompanija (opciono)',
            companyPlaceholder: 'Naziv kompanije',
            
            // Step 2
            servicesTitle: 'Koje usluge vam trebaju?',
            selectAtLeast: 'Morate izabrati najmanje jednu uslugu',
            
            // UI/UX Groups
            uiuxDesign: 'UI/UX Dizajn',
            choosePackage: 'Izaberite paket ili pojedinačne usluge:',
            starter: 'Starter paket',
            standard: 'Standard paket',
            premium: 'Premium paket',
            custom: 'Prilagođeno (izaberite ispod)',
            individualServices: 'Pojedinačne usluge:',
            
            // Standalone Projects
            standaloneProjects: 'Samostalni Dizajnerski Projekti',
            mobileAppDesign: 'Dizajn mobilne aplikacije',
            landingPageDesign: 'Dizajn landing stranice',
            websiteRedesign: 'Redizajn postojećeg sajta ili aplikacije',
            userTesting: 'Testiranje sa korisnicima (user testing)',
            designSystemCreation: 'Izrada dizajn sistema za postojeći brend',
            
            // Design for Your Business
            designBusiness: 'Dizajn za tvoju delatnost',
            ecommerce: 'E-commerce & online prodavnice',
            amazon: 'Amazon & marketplace vizuali',
            socialMedia: 'Vizuelni materijali za oglase i društvene mreže',
            localBusiness: 'Lokalni biznisi',
            designSupport: 'Dizajn podrška (kontinuirana saradnja)',
            
            // Graphic Design
            graphicDesign: 'Grafički Dizajn',
            logoBrand: 'Logo i brend identitet:',
            logo2: 'Logotip (2 predloga)',
            logo4: 'Logotip (4 predloga)',
            logoIllustration: 'Logotip (illustracija)',
            brandPackage: 'Brend paket',
            brandBook: 'Basic knjiga standarda',
            mascot: 'Zaštitni lik brenda (maskota)',
            businessCard: 'Vizit karta',
            letterhead: 'Memorandum',
            stamp: 'Pečat',
            
            printCollateral: 'Promotivni materijal:',
            flyer: 'Flajer',
            brochures: 'Brošure/katalozi',
            menus: 'Cenovnici/jelovnici/karte pića',
            leaflet3: 'Liflet (3 savijanja)',
            leaflet4: 'Liflet (4 savijanja)',
            bookCovers: 'Korice za knjige/časopise',
            forms: 'Dizajn obrazaca',
            tickets: 'Ulaznice',
            emailSignature: 'Potpis za email',
            
            productSpace: 'Brendiranje proizvoda i prostora:',
            shopWindow: 'Brendiranje izloga',
            vehicle: 'Brendiranje vozila',
            uniform: 'Brendiranje uniformi',
            packaging: 'Dizajn ambalaže',
            bottles1: 'Flaše (1 strana)',
            bottles2: 'Flaše (2 strane)',
            merchandise: 'Brendirani proizvodi',
            menuUpdate: 'Izmena cenovnika/jelovnika',
            
            // Step 3
            budgetLabel: 'Budžet:',
            budgetPlaceholder: 'Izaberite budžet',
            budget1: '€150–500',
            budget2: '€500–1,000',
            budget3: '€1,000–3,000',
            budget4: '€3,000+',
            budget5: 'Nisam siguran',
            
            timelineLabel: 'Rok:',
            timelinePlaceholder: 'Izaberite rok',
            timeline1: 'Hitno (1–2 nedelje)',
            timeline2: 'Srednje (1–2 meseca)',
            timeline3: 'Dugoročno (3+ meseca)',
            timeline4: 'Fleksibilno',
            
            descriptionLabel: 'Kratko opišite projekat:',
            descriptionPlaceholder: 'Opišite vaš projekat, ciljeve, ili bilo šta što bi nam pomoglo...',
            
            // Buttons
            btnNext: 'Dalje',
            btnBack: 'Nazad',
            btnSend: 'Pošalji Zahtev',
            btnClose: 'Zatvori',
            btnSending: 'Slanje...',
            
            // Validation
            errorName: 'Molimo unesite vaše ime',
            errorEmail: 'Molimo unesite validnu email adresu',
            errorServices: 'Molimo izaberite najmanje jednu uslugu',
            errorBudget: 'Molimo izaberite budžet',
            errorTimeline: 'Molimo izaberite rok',
            errorDescription: 'Molimo opišite vaš projekat',
            
            // Email errors
            errorSending: 'Greška pri slanju. Pokušajte ponovo.',
        },
        en: {
            step1Title: 'Your Info',
            step2Title: 'Services',
            step3Title: 'Project Details',
            successTitle: 'Success!',
            successMessage: 'Thanks! We\'ll get back to you within 24 hours.',
            
            // Step 1
            nameLabel: 'Full Name*',
            namePlaceholder: 'Your full name',
            emailLabel: 'Email*',
            emailPlaceholder: 'Your email address',
            companyLabel: 'Company (optional)',
            companyPlaceholder: 'Company name',
            
            // Step 2
            servicesTitle: 'What services do you need?',
            selectAtLeast: 'You must select at least one service',
            
            // UI/UX Groups
            uiuxDesign: 'UI/UX Design',
            choosePackage: 'Choose a package or select individual services:',
            starter: 'Starter Package',
            standard: 'Standard Package',
            premium: 'Premium Package',
            custom: 'Custom (select below)',
            individualServices: 'Individual Services:',
            
            // Standalone Projects
            standaloneProjects: 'Standalone Design Projects',
            mobileAppDesign: 'Mobile App Design (iOS / Android)',
            landingPageDesign: 'Landing Page Design',
            websiteRedesign: 'Website or App Redesign',
            userTesting: 'User Testing with Real Users',
            designSystemCreation: 'Design System Creation for Existing Brands',
            
            // Design for Your Business
            designBusiness: 'Design for Your Business',
            ecommerce: 'E-commerce & Online Stores',
            amazon: 'Amazon & Marketplace Visuals',
            socialMedia: 'Product Assets for Ads & Social Media',
            localBusiness: 'Local Businesses',
            designSupport: 'Design Support (Ongoing collaboration)',
            
            // Graphic Design
            graphicDesign: 'Graphic Design',
            logoBrand: 'Logo and Brand Identity:',
            logo2: 'Logo (2 suggestions)',
            logo4: 'Logo (4 suggestions)',
            logoIllustration: 'Logo (illustration)',
            brandPackage: 'Brand Package',
            brandBook: 'Brand Book',
            mascot: 'Brand Identity Illustration (mascot)',
            businessCard: 'Business Card',
            letterhead: 'Letterhead',
            stamp: 'Stamp Design',
            
            printCollateral: 'Print and Collateral:',
            flyer: 'Flyer',
            brochures: 'Brochures & Catalogs',
            menus: 'Price Lists/Menus/Drink cards',
            leaflet3: 'Leaflet (3 bends)',
            leaflet4: 'Leaflet (4 bends)',
            bookCovers: 'Covers for Books or Magazines',
            forms: 'Form Design',
            tickets: 'Tickets',
            emailSignature: 'Email Signature',
            
            productSpace: 'Product and Space Branding:',
            shopWindow: 'Shop Window Branding',
            vehicle: 'Vehicle Branding',
            uniform: 'Uniform Branding',
            packaging: 'Packaging Design',
            bottles1: 'Bottles (one-sided)',
            bottles2: 'Bottles (double-sided)',
            merchandise: 'Branded Products',
            menuUpdate: 'Price List/Menu Update',
            
            // Step 3
            budgetLabel: 'Budget:',
            budgetPlaceholder: 'Select budget',
            budget1: '€150–500',
            budget2: '€500–1,000',
            budget3: '€1,000–3,000',
            budget4: '€3,000+',
            budget5: 'Not sure yet',
            
            timelineLabel: 'Timeline:',
            timelinePlaceholder: 'Select timeline',
            timeline1: 'Urgent (1–2 weeks)',
            timeline2: 'Medium (1–2 months)',
            timeline3: 'Long-term (3+ months)',
            timeline4: 'Flexible',
            
            descriptionLabel: 'Short description:',
            descriptionPlaceholder: 'Describe your project, goals, or anything that would help us...',
            
            // Buttons
            btnNext: 'Next',
            btnBack: 'Back',
            btnSend: 'Send Request',
            btnClose: 'Close',
            btnSending: 'Sending...',
            
            // Validation
            errorName: 'Please enter your name',
            errorEmail: 'Please enter a valid email address',
            errorServices: 'Please select at least one service',
            errorBudget: 'Please select a budget',
            errorTimeline: 'Please select a timeline',
            errorDescription: 'Please describe your project',
            
            // Email errors
            errorSending: 'Error sending. Please try again.',
        }
    };

    // ===== STATE MANAGEMENT =====
    let currentStep = 1;
    let currentLang = 'sr';
    let entryPoint = null; // 'hero', 'starter', 'standard', 'premium', 'standalone', 'specialized', 'logo', 'print', 'product'
    let formData = {
        name: '',
        email: '',
        company: '',
        services: [],
        budget: '',
        timeline: '',
        description: ''
    };

    // ===== DOM CREATION =====
    function createModal() {
        const modalHTML = `
            <div id="projectRequestModal" class="pr-modal">
                <div class="pr-modal-overlay"></div>
                <div class="pr-modal-content">
                    <button class="pr-modal-close" aria-label="Close">&times;</button>
                    
                    <!-- Progress Bar -->
                    <div class="pr-progress-bar">
                        <div class="pr-progress-step active" data-step="1">
                            <div class="pr-progress-circle">1</div>
                        </div>
                        <div class="pr-progress-line"></div>
                        <div class="pr-progress-step" data-step="2">
                            <div class="pr-progress-circle">2</div>
                        </div>
                        <div class="pr-progress-line"></div>
                        <div class="pr-progress-step" data-step="3">
                            <div class="pr-progress-circle">3</div>
                        </div>
                    </div>

                    <!-- Step 1: Your Info -->
                    <div class="pr-step active" data-step="1">
                        <h2 class="pr-step-title" data-lang="step1Title">Vaši Podaci</h2>
                        <form id="prStep1Form">
                            <div class="pr-form-group">
                                <label data-lang="nameLabel">Ime i Prezime*</label>
                                <input type="text" id="prName" name="name" data-lang-placeholder="namePlaceholder" placeholder="Vaše ime i prezime" required>
                            </div>
                            <div class="pr-form-group">
                                <label data-lang="emailLabel">Email*</label>
                                <input type="email" id="prEmail" name="email" data-lang-placeholder="emailPlaceholder" placeholder="Vaša email adresa" required>
                            </div>
                            <div class="pr-form-group">
                                <label data-lang="companyLabel">Kompanija (opciono)</label>
                                <input type="text" id="prCompany" name="company" data-lang-placeholder="companyPlaceholder" placeholder="Naziv kompanije">
                            </div>
                            <button type="submit" class="pr-btn pr-btn-primary" data-lang="btnNext">Dalje →</button>
                        </form>
                    </div>

                    <!-- Step 2: Services -->
                    <div class="pr-step" data-step="2">
                        <h2 class="pr-step-title" data-lang="step2Title">Usluge</h2>
                        <p class="pr-step-subtitle" data-lang="servicesTitle">Koje usluge vam trebaju?</p>
                        
                        <div id="prServicesContainer" class="pr-services-container">
                            <!-- Services will be dynamically injected here -->
                        </div>

                        <div class="pr-button-group">
                            <button type="button" class="pr-btn pr-btn-secondary" id="prBackToStep1" data-lang="btnBack">← Nazad</button>
                            <button type="button" class="pr-btn pr-btn-primary" id="prNextToStep3" data-lang="btnNext">Dalje →</button>
                        </div>
                    </div>

                    <!-- Step 3: Project Details -->
                    <div class="pr-step" data-step="3">
                        <h2 class="pr-step-title" data-lang="step3Title">Detalji Projekta</h2>
                        <form id="prStep3Form">
                            <div class="pr-form-group">
                                <label data-lang="budgetLabel">Budžet:</label>
                                <select id="prBudget" name="budget" required>
                                    <option value="" data-lang="budgetPlaceholder">Izaberite budžet</option>
                                    <option value="€150–500" data-lang="budget1">€150–500</option>
                                    <option value="€500–1,000" data-lang="budget2">€500–1,000</option>
                                    <option value="€1,000–3,000" data-lang="budget3">€1,000–3,000</option>
                                    <option value="€3,000+" data-lang="budget4">€3,000+</option>
                                    <option value="Not sure yet" data-lang="budget5">Nisam siguran</option>
                                </select>
                            </div>
                            <div class="pr-form-group">
                                <label data-lang="timelineLabel">Rok:</label>
                                <select id="prTimeline" name="timeline" required>
                                    <option value="" data-lang="timelinePlaceholder">Izaberite rok</option>
                                    <option value="Urgent (1–2 weeks)" data-lang="timeline1">Hitno (1–2 nedelje)</option>
                                    <option value="Medium (1–2 months)" data-lang="timeline2">Srednje (1–2 meseca)</option>
                                    <option value="Long-term (3+ months)" data-lang="timeline3">Dugoročno (3+ meseca)</option>
                                    <option value="Flexible" data-lang="timeline4">Fleksibilno</option>
                                </select>
                            </div>
                            <div class="pr-form-group">
                                <label data-lang="descriptionLabel">Kratko opišite projekat:</label>
                                <textarea id="prDescription" name="description" rows="5" data-lang-placeholder="descriptionPlaceholder" placeholder="Opišite vaš projekat, ciljeve, ili bilo šta što bi nam pomoglo..." required></textarea>
                            </div>
                            <div class="pr-button-group">
                                <button type="button" class="pr-btn pr-btn-secondary" id="prBackToStep2" data-lang="btnBack">← Nazad</button>
                                <button type="submit" class="pr-btn pr-btn-primary" id="prSendRequest" data-lang="btnSend">Pošalji Zahtev →</button>
                            </div>
                        </form>
                    </div>

                    <!-- Success Screen -->
                    <div class="pr-step pr-success" data-step="success">
                        <div class="pr-success-icon">✓</div>
                        <h2 class="pr-success-title" data-lang="successTitle">Uspešno!</h2>
                        <p class="pr-success-message" data-lang="successMessage">Hvala! Javićemo vam se u roku od 24h.</p>
                        <button type="button" class="pr-btn pr-btn-primary" id="prCloseSuccess" data-lang="btnClose">Zatvori</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // ===== CREATE CSS =====
    function createStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Project Request Modal Styles */
            .pr-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
            }
            .pr-modal.active {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .pr-modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                backdrop-filter: blur(4px);
            }
            .pr-modal-content {
                position: relative;
                background: #ffffff;
                border: 2px solid #00d6d6;
                border-radius: 12px;
                width: 90%;
                max-width: 680px;
                max-height: 90vh;
                overflow: hidden; /* ← PROMENI sa auto na hidden */
                padding: 40px;
                box-shadow: 0 20px 60px rgba(0, 214, 214, 0.3);
                animation: prModalSlideIn 0.3s ease-out;
                display: flex; /* ← DODAJ */
                flex-direction: column; /* ← DODAJ */
            }
            @keyframes prModalSlideIn {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .pr-modal-close {
                position: absolute;
                top: 16px;
                right: 16px;
                width: 36px;
                height: 36px;
                background: transparent;
                border: none;
                font-size: 32px;
                color: #00171a;
                cursor: pointer;
                transition: color 0.3s;
                line-height: 1;
                padding: 0;
            }
            .pr-modal-close:hover {
                color: #00d6d6;
            }

            /* Progress Bar */
            .pr-progress-bar {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 32px;
                gap: 12px;
            }
            .pr-progress-step {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .pr-progress-circle {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 2px solid #cdd6d7;
                background: #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Inter', sans-serif;
                font-size: 16px;
                font-weight: 600;
                color: #cdd6d7;
                transition: all 0.3s;
            }
            .pr-progress-step.active .pr-progress-circle {
                border-color: #00d6d6;
                background: #00d6d6;
                color: #ffffff;
                box-shadow: 0 0 20px rgba(0, 214, 214, 0.4);
            }
            .pr-progress-step.completed .pr-progress-circle {
                border-color: #00d6d6;
                background: #00d6d6;
                color: #ffffff;
            }
            .pr-progress-line {
                width: 60px;
                height: 2px;
                background: #cdd6d7;
                transition: background 0.3s;
            }
            .pr-progress-step.completed + .pr-progress-line {
                background: #00d6d6;
            }

            /* Steps */
            .pr-step {
                display: none;
            }
            .pr-step.active {
                display: block;
                animation: prFadeIn 0.3s ease-out;
                overflow-y: auto; /* ← DODAJ scroll ovde */
                max-height: calc(90vh - 180px); /* ← Ograniči visinu (90vh - padding/progress) */
                padding-right: 8px; /* ← Razmak za scroll bar */
            }
            @keyframes prFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .pr-step-title {
                font-family: 'Outfit', sans-serif;
                font-size: 28px;
                line-height: 36px;
                font-weight: 500;
                color: #00171a;
                margin-bottom: 8px;
                text-align: center;
            }
            .pr-step-subtitle {
                font-family: 'Inter', sans-serif;
                font-size: 16px;
                line-height: 24px;
                color: #00171a;
                margin-bottom: 24px;
                text-align: center;
            }

            /* Form Groups */
            .pr-form-group {
                margin-bottom: 20px;
            }
            .pr-form-group label {
                display: block;
                margin-bottom: 8px;
                font-family: 'Inter', sans-serif;
                font-size: 14px;
                font-weight: 500;
                color: #00171a;
            }
            .pr-form-group input,
            .pr-form-group textarea,
            .pr-form-group select {
                width: 100%;
                padding: 12px 16px;
                background: #f5f5f5;
                border: 1px solid #cdd6d7;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                font-size: 16px;
                color: #00171a;
                transition: all 0.3s;
            }
            .pr-form-group input:focus,
            .pr-form-group textarea:focus,
            .pr-form-group select:focus {
                outline: none;
                border-color: #00d6d6;
                background: #ffffff;
                box-shadow: 0 0 0 3px rgba(0, 214, 214, 0.1);
            }
            .pr-form-group textarea {
                resize: vertical;
                min-height: 100px;
            }

            /* Services Container */
            .pr-services-container {
                margin-bottom: 24px;
                max-height: 400px;
                overflow-y: auto;
                padding-right: 8px;
            }
            .pr-services-container::-webkit-scrollbar {
                width: 6px;
            }
            .pr-services-container::-webkit-scrollbar-track {
                background: #f5f5f5;
                border-radius: 3px;
            }
            .pr-services-container::-webkit-scrollbar-thumb {
                background: #00d6d6;
                border-radius: 3px;
            }
            .pr-service-group {
                margin-bottom: 24px;
                padding: 16px;
                background: #f5f5f5;
                border-radius: 8px;
                border: 1px solid #cdd6d7;
            }
            .pr-service-group.locked {
                opacity: 0.5;
                pointer-events: none;
            }
            .pr-service-group-title {
                font-family: 'Outfit', sans-serif;
                font-size: 18px;
                font-weight: 600;
                color: #00171a;
                margin-bottom: 12px;
            }
            .pr-service-group-subtitle {
                font-family: 'Inter', sans-serif;
                font-size: 13px;
                color: #00171a;
                margin-bottom: 12px;
                opacity: 0.8;
            }
            .pr-service-options {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .pr-service-option {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 10px 12px;
                background: #ffffff;
                border: 1px solid #cdd6d7;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.2s;
            }
            .pr-service-option:hover {
                border-color: #00d6d6;
                background: rgba(0, 214, 214, 0.05);
            }
            .pr-service-option input[type="checkbox"],
            .pr-service-option input[type="radio"] {
                width: 20px;
                height: 20px;
                cursor: pointer;
                accent-color: #00d6d6;
            }
            .pr-service-option label {
                flex: 1;
                font-family: 'Inter', sans-serif;
                font-size: 14px;
                color: #00171a;
                cursor: pointer;
                margin: 0;
            }
            .pr-service-option.checked {
                border-color: #00d6d6;
                background: rgba(0, 214, 214, 0.1);
                box-shadow: 0 0 10px rgba(0, 214, 214, 0.2);
            }

            /* Buttons */
            .pr-btn {
                padding: 14px 28px;
                font-family: 'Outfit', sans-serif;
                font-size: 16px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s;
            }
            .pr-btn-primary {
                background: #00d6d6;
                color: #00171a;
            }
            .pr-btn-primary:hover {
                background: #007f7f;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 214, 214, 0.3);
            }
            .pr-btn-primary:disabled {
                background: #cdd6d7;
                cursor: not-allowed;
                transform: none;
            }
            .pr-btn-secondary {
                background: transparent;
                color: #00171a;
                border: 2px solid #00d6d6;
            }
            .pr-btn-secondary:hover {
                background: rgba(0, 214, 214, 0.1);
            }
            .pr-button-group {
                display: flex;
                gap: 12px;
                margin-top: 24px;
            }
            .pr-button-group .pr-btn {
                flex: 1;
            }

            /* Success Screen */
            .pr-success {
                text-align: center;
                padding: 40px 20px;
            }
            .pr-success-icon {
                width: 80px;
                height: 80px;
                margin: 0 auto 24px;
                background: #00d6d6;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 48px;
                color: #ffffff;
                animation: prSuccessPulse 0.6s ease-out;
            }
            @keyframes prSuccessPulse {
                0% { transform: scale(0); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            .pr-success-title {
                font-family: 'Outfit', sans-serif;
                font-size: 32px;
                font-weight: 600;
                color: #00171a;
                margin-bottom: 12px;
            }
            .pr-success-message {
                font-family: 'Inter', sans-serif;
                font-size: 16px;
                color: #00171a;
                margin-bottom: 32px;
            }

            /* Mobile Responsive */
            @media (max-width: 768px) {
                .pr-modal-content {
                    width: 95%;
                    max-width: none;
                    padding: 24px 20px;
                    max-height: 95vh;
                }
                .pr-step-title {
                    font-size: 24px;
                    line-height: 32px;
                }
                .pr-progress-bar {
                    gap: 8px;
                }
                .pr-progress-circle {
                    width: 36px;
                    height: 36px;
                    font-size: 14px;
                }
                .pr-progress-line {
                    width: 40px;
                }
                .pr-services-container {
                    max-height: none;
                }
                .pr-button-group {
                    flex-direction: column;
                }
                .pr-service-group {
                    padding: 12px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ===== SERVICE OPTIONS BUILDER =====
    function buildServicesHTML() {
        const lang = LANG[currentLang];
        
        return `
            <!-- UI/UX Design Group -->
            <div class="pr-service-group" data-group="uiux">
                <div class="pr-service-group-title">${lang.uiuxDesign}</div>
                <div class="pr-service-group-subtitle">${lang.choosePackage}</div>
                <div class="pr-service-options">
                    <div class="pr-service-option">
                        <input type="radio" name="uiux_package" id="pr_starter" value="starter">
                        <label for="pr_starter">${lang.starter}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="radio" name="uiux_package" id="pr_standard" value="standard">
                        <label for="pr_standard">${lang.standard}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="radio" name="uiux_package" id="pr_premium" value="premium">
                        <label for="pr_premium">${lang.premium}</label>
                    </div>
                    
                </div>
            </div>

            <!-- Standalone Projects -->
            <div class="pr-service-group" data-group="standalone">
                <div class="pr-service-group-title">${lang.standaloneProjects}</div>
                <div class="pr-service-options">
                    <div class="pr-service-option">
                        <input type="radio" name="standalone" id="pr_mobile_app" value="mobile_app">
                        <label for="pr_mobile_app">${lang.mobileAppDesign}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="radio" name="standalone" id="pr_landing_page" value="landing_page">
                        <label for="pr_landing_page">${lang.landingPageDesign}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="radio" name="standalone" id="pr_redesign" value="redesign">
                        <label for="pr_redesign">${lang.websiteRedesign}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="radio" name="standalone" id="pr_user_testing" value="user_testing">
                        <label for="pr_user_testing">${lang.userTesting}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="radio" name="standalone" id="pr_design_system" value="design_system">
                        <label for="pr_design_system">${lang.designSystemCreation}</label>
                    </div>
                </div>
            </div>

            <!-- Design for Your Business -->
            <div class="pr-service-group" data-group="specialized">
                <div class="pr-service-group-title">${lang.designBusiness}</div>
                <div class="pr-service-options">
                    <div class="pr-service-option">
                        <input type="radio" name="specialized" id="pr_ecommerce" value="ecommerce">
                        <label for="pr_ecommerce">${lang.ecommerce}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="radio" name="specialized" id="pr_amazon" value="amazon">
                        <label for="pr_amazon">${lang.amazon}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="radio" name="specialized" id="pr_social_media" value="social_media">
                        <label for="pr_social_media">${lang.socialMedia}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="radio" name="specialized" id="pr_local_business" value="local_business">
                        <label for="pr_local_business">${lang.localBusiness}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="radio" name="specialized" id="pr_design_support" value="design_support">
                        <label for="pr_design_support">${lang.designSupport}</label>
                    </div>
                </div>
            </div>

            <!-- Graphic Design - Logo & Brand -->
            <div class="pr-service-group" data-group="logo_brand">
                <div class="pr-service-group-title">${lang.graphicDesign}</div>
                <div class="pr-service-group-subtitle">${lang.logoBrand}</div>
                <div class="pr-service-options">
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_logo_2" value="logo_2">
                        <label for="pr_logo_2">${lang.logo2}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_logo_4" value="logo_4">
                        <label for="pr_logo_4">${lang.logo4}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_logo_illustration" value="logo_illustration">
                        <label for="pr_logo_illustration">${lang.logoIllustration}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_brand_package" value="brand_package">
                        <label for="pr_brand_package">${lang.brandPackage}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_brand_book" value="brand_book">
                        <label for="pr_brand_book">${lang.brandBook}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_mascot" value="mascot">
                        <label for="pr_mascot">${lang.mascot}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_business_card" value="business_card">
                        <label for="pr_business_card">${lang.businessCard}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_letterhead" value="letterhead">
                        <label for="pr_letterhead">${lang.letterhead}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_stamp" value="stamp">
                        <label for="pr_stamp">${lang.stamp}</label>
                    </div>
                </div>
            </div>

            <!-- Graphic Design - Print -->
            <div class="pr-service-group" data-group="print">
                <div class="pr-service-group-subtitle">${lang.printCollateral}</div>
                <div class="pr-service-options">
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_flyer" value="flyer">
                        <label for="pr_flyer">${lang.flyer}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_brochures" value="brochures">
                        <label for="pr_brochures">${lang.brochures}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_menus" value="menus">
                        <label for="pr_menus">${lang.menus}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_leaflet_3" value="leaflet_3">
                        <label for="pr_leaflet_3">${lang.leaflet3}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_leaflet_4" value="leaflet_4">
                        <label for="pr_leaflet_4">${lang.leaflet4}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_book_covers" value="book_covers">
                        <label for="pr_book_covers">${lang.bookCovers}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_forms" value="forms">
                        <label for="pr_forms">${lang.forms}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_tickets" value="tickets">
                        <label for="pr_tickets">${lang.tickets}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_email_signature" value="email_signature">
                        <label for="pr_email_signature">${lang.emailSignature}</label>
                    </div>
                </div>
            </div>

            <!-- Graphic Design - Product & Space -->
            <div class="pr-service-group" data-group="product_space">
                <div class="pr-service-group-subtitle">${lang.productSpace}</div>
                <div class="pr-service-options">
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_shop_window" value="shop_window">
                        <label for="pr_shop_window">${lang.shopWindow}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_vehicle" value="vehicle">
                        <label for="pr_vehicle">${lang.vehicle}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_uniform" value="uniform">
                        <label for="pr_uniform">${lang.uniform}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_packaging" value="packaging">
                        <label for="pr_packaging">${lang.packaging}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_bottles_1" value="bottles_1">
                        <label for="pr_bottles_1">${lang.bottles1}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_bottles_2" value="bottles_2">
                        <label for="pr_bottles_2">${lang.bottles2}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_merchandise" value="merchandise">
                        <label for="pr_merchandise">${lang.merchandise}</label>
                    </div>
                    <div class="pr-service-option">
                        <input type="checkbox" id="pr_menu_update" value="menu_update">
                        <label for="pr_menu_update">${lang.menuUpdate}</label>
                    </div>
                </div>
            </div>
        `;
    }

    // ===== LOCKING LOGIC =====
    function applyLockingLogic(entry) {
        const groups = {
            uiux: document.querySelector('[data-group="uiux"]'),
            standalone: document.querySelector('[data-group="standalone"]'),
            specialized: document.querySelector('[data-group="specialized"]'),
            logo_brand: document.querySelector('[data-group="logo_brand"]'),
            print: document.querySelector('[data-group="print"]'),
            product_space: document.querySelector('[data-group="product_space"]')
        };

        // Reset all
        Object.values(groups).forEach(group => {
            if (group) group.classList.remove('locked');
        });

        switch(entry) {
            case 'hero':
                // All unlocked initially
                break;
            
            case 'starter':
            case 'standard':
            case 'premium':
                // Pre-check the package
                document.getElementById(`pr_${entry}`).checked = true;
                // Lock other UI/UX, standalone, specialized, graphic
                if (groups.standalone) groups.standalone.classList.add('locked');
                if (groups.specialized) groups.specialized.classList.add('locked');
                if (groups.logo_brand) groups.logo_brand.classList.add('locked');
                if (groups.print) groups.print.classList.add('locked');
                if (groups.product_space) groups.product_space.classList.add('locked');
                break;
            
            case 'standalone':
                // Only standalone active
                if (groups.uiux) groups.uiux.classList.add('locked');
                if (groups.specialized) groups.specialized.classList.add('locked');
                if (groups.logo_brand) groups.logo_brand.classList.add('locked');
                if (groups.print) groups.print.classList.add('locked');
                if (groups.product_space) groups.product_space.classList.add('locked');
                break;
            
            case 'specialized':
                // Only specialized active
                if (groups.uiux) groups.uiux.classList.add('locked');
                if (groups.standalone) groups.standalone.classList.add('locked');
                if (groups.logo_brand) groups.logo_brand.classList.add('locked');
                if (groups.print) groups.print.classList.add('locked');
                if (groups.product_space) groups.product_space.classList.add('locked');
                break;
            
            case 'logo':
                // Only logo_brand active
                if (groups.uiux) groups.uiux.classList.add('locked');
                if (groups.standalone) groups.standalone.classList.add('locked');
                if (groups.specialized) groups.specialized.classList.add('locked');
                if (groups.print) groups.print.classList.add('locked');
                if (groups.product_space) groups.product_space.classList.add('locked');
                break;
            
            case 'print':
                // Only print active
                if (groups.uiux) groups.uiux.classList.add('locked');
                if (groups.standalone) groups.standalone.classList.add('locked');
                if (groups.specialized) groups.specialized.classList.add('locked');
                if (groups.logo_brand) groups.logo_brand.classList.add('locked');
                if (groups.product_space) groups.product_space.classList.add('locked');
                break;
            
            case 'product':
                // Only product_space active
                if (groups.uiux) groups.uiux.classList.add('locked');
                if (groups.standalone) groups.standalone.classList.add('locked');
                if (groups.specialized) groups.specialized.classList.add('locked');
                if (groups.logo_brand) groups.logo_brand.classList.add('locked');
                if (groups.print) groups.print.classList.add('locked');
                break;
        }
    }

    // ===== DYNAMIC LOCKING ON FIRST SELECTION (Hero CTA only) =====

    function setupDynamicLocking() {
        if (entryPoint !== 'hero') return;

        const allInputs = document.querySelectorAll('.pr-service-option input');
        let firstSelectionMade = false;

        allInputs.forEach(input => {
            input.addEventListener('change', function() {
                if (firstSelectionMade) return;
                if (!this.checked) return;

                firstSelectionMade = true;

                // Determine which group was selected
                const group = this.closest('[data-group]').getAttribute('data-group');
                
                // Lock accordingly
                if (group === 'uiux') {
                    // Lock standalone, specialized, all graphic
                    document.querySelector('[data-group="standalone"]')?.classList.add('locked');
                    document.querySelector('[data-group="specialized"]')?.classList.add('locked');
                    document.querySelector('[data-group="logo_brand"]')?.classList.add('locked');
                    document.querySelector('[data-group="print"]')?.classList.add('locked');
                    document.querySelector('[data-group="product_space"]')?.classList.add('locked');
                } else if (group === 'standalone') {
                    // Lock all others
                    document.querySelector('[data-group="uiux"]')?.classList.add('locked');
                    document.querySelector('[data-group="specialized"]')?.classList.add('locked');
                    document.querySelector('[data-group="logo_brand"]')?.classList.add('locked');
                    document.querySelector('[data-group="print"]')?.classList.add('locked');
                    document.querySelector('[data-group="product_space"]')?.classList.add('locked');
                } else if (group === 'specialized') {
                    // Lock all others
                    document.querySelector('[data-group="uiux"]')?.classList.add('locked');
                    document.querySelector('[data-group="standalone"]')?.classList.add('locked');
                    document.querySelector('[data-group="logo_brand"]')?.classList.add('locked');
                    document.querySelector('[data-group="print"]')?.classList.add('locked');
                    document.querySelector('[data-group="product_space"]')?.classList.add('locked');
                } else if (group === 'logo_brand' || group === 'print' || group === 'product_space') {
                    // Lock uiux, standalone, specialized, other graphic groups
                    document.querySelector('[data-group="uiux"]')?.classList.add('locked');
                    document.querySelector('[data-group="standalone"]')?.classList.add('locked');
                    document.querySelector('[data-group="specialized"]')?.classList.add('locked');
                    
                    // Lock other graphic groups
                    ['logo_brand', 'print', 'product_space'].forEach(g => {
                        if (g !== group) {
                            document.querySelector(`[data-group="${g}"]`)?.classList.add('locked');
                        }
                    });
                }
            });
        });
    }
 

    // ===== UPDATE LANGUAGE =====
    function updateLanguage() {
        const lang = LANG[currentLang];
        
        // Update all elements with data-lang attribute
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (lang[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = lang[key];
                } else if (el.tagName === 'OPTION') {
                    el.textContent = lang[key];
                } else {
                    el.textContent = lang[key];
                }
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
            const key = el.getAttribute('data-lang-placeholder');
            if (lang[key]) {
                el.placeholder = lang[key];
            }
        });

        // Rebuild services HTML
        const servicesContainer = document.getElementById('prServicesContainer');
        if (servicesContainer) {
            servicesContainer.innerHTML = buildServicesHTML();
            applyLockingLogic(entryPoint);
            setupDynamicLocking();
            attachCheckboxListeners();
        }
    }

    // ===== ATTACH CHECKBOX VISUAL FEEDBACK =====
    // ===== ATTACH CHECKBOX VISUAL FEEDBACK =====
    function attachCheckboxListeners() {
        document.querySelectorAll('.pr-service-option input').forEach(input => {
            input.addEventListener('change', function() {
                const parent = this.closest('.pr-service-option');
                
                // Ako je RADIO button - isključi sve ostale u istoj grupi
                if (this.type === 'radio') {
                    const group = this.closest('[data-group]');
                    if (group) {
                        group.querySelectorAll('.pr-service-option').forEach(opt => {
                            opt.classList.remove('checked');
                        });
                    }
                }
                
                // Dodaj checked klasu na trenutni
                if (this.checked) {
                    parent.classList.add('checked');
                } else {
                    parent.classList.remove('checked');
                }
            });
        });
    }

    // ===== OPEN MODAL =====
    function openModal(entry = 'hero', lang = 'sr') {
        entryPoint = entry;
        currentLang = lang;
        currentStep = 1;
        
        const modal = document.getElementById('projectRequestModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Update language
        updateLanguage();

        // Apply locking logic
        applyLockingLogic(entry);
        setupDynamicLocking();

        // Reset progress
        updateProgress();
    }

    // ===== CLOSE MODAL =====
    function closeModal() {
        const modal = document.getElementById('projectRequestModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset form
        currentStep = 1;
        formData = {
            name: '',
            email: '',
            company: '',
            services: [],
            budget: '',
            timeline: '',
            description: ''
        };
        
        // Reset inputs
        document.querySelectorAll('.pr-step form').forEach(form => form.reset());
        document.querySelectorAll('.pr-service-option.checked').forEach(opt => opt.classList.remove('checked'));
        
        // Show step 1
        goToStep(1);
    }

    // ===== GO TO STEP =====
    function goToStep(step) {
        currentStep = step;
        
        // Hide all steps
        document.querySelectorAll('.pr-step').forEach(s => s.classList.remove('active'));
        
        // Show current step
        const stepEl = document.querySelector(`.pr-step[data-step="${step === 4 ? 'success' : step}"]`);
        if (stepEl) stepEl.classList.add('active');
        
        updateProgress();
    }

    // ===== UPDATE PROGRESS BAR =====
    function updateProgress() {
        document.querySelectorAll('.pr-progress-step').forEach((step, index) => {
            const stepNum = index + 1;
            if (stepNum < currentStep) {
                step.classList.add('completed');
                step.classList.remove('active');
            } else if (stepNum === currentStep) {
                step.classList.add('active');
                step.classList.remove('completed');
            } else {
                step.classList.remove('active', 'completed');
            }
        });
    }

    // ===== VALIDATE STEP 1 =====
    function validateStep1() {
        const name = document.getElementById('prName').value.trim();
        const email = document.getElementById('prEmail').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            alert(LANG[currentLang].errorName);
            return false;
        }
        if (!email || !emailRegex.test(email)) {
            alert(LANG[currentLang].errorEmail);
            return false;
        }

        formData.name = name;
        formData.email = email;
        formData.company = document.getElementById('prCompany').value.trim();
        
        return true;
    }

    // ===== VALIDATE STEP 2 =====
    function validateStep2() {
        const services = [];
        
        // Collect all checked inputs
        document.querySelectorAll('.pr-service-option input:checked').forEach(input => {
            const label = input.nextElementSibling.textContent;
            services.push(label);
        });

        if (services.length === 0) {
            alert(LANG[currentLang].errorServices);
            return false;
        }

        formData.services = services;
        return true;
    }

    // ===== VALIDATE STEP 3 =====
    function validateStep3() {
        const budget = document.getElementById('prBudget').value;
        const timeline = document.getElementById('prTimeline').value;
        const description = document.getElementById('prDescription').value.trim();

        if (!budget) {
            alert(LANG[currentLang].errorBudget);
            return false;
        }
        if (!timeline) {
            alert(LANG[currentLang].errorTimeline);
            return false;
        }
        if (!description) {
            alert(LANG[currentLang].errorDescription);
            return false;
        }

        formData.budget = budget;
        formData.timeline = timeline;
        formData.description = description;

        return true;
    }

    // ===== SEND EMAIL =====
    async function sendEmail() {
        const sendButton = document.getElementById('prSendRequest');
        const originalText = sendButton.textContent;
        sendButton.disabled = true;
        sendButton.textContent = LANG[currentLang].btnSending;

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                company: formData.company || 'N/A',
                services: formData.services.join(', '),
                budget: formData.budget,
                timeline: formData.timeline,
                message: formData.description
            };

            await emailjs.send(
                CONFIG.emailjs.serviceId,
                CONFIG.emailjs.templateId,
                templateParams,
                CONFIG.emailjs.publicKey
            );

            // Show success
            goToStep(4);

        } catch (error) {
            console.error('EmailJS Error:', error);
            alert(LANG[currentLang].errorSending);
            sendButton.disabled = false;
            sendButton.textContent = originalText;
        }
    }

    // ===== EVENT LISTENERS =====
    function attachEventListeners() {
        // Close button
        document.querySelector('.pr-modal-close').addEventListener('click', closeModal);
        
        // Overlay click
        document.querySelector('.pr-modal-overlay').addEventListener('click', closeModal);

        // Step 1 form submit
        document.getElementById('prStep1Form').addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateStep1()) {
                goToStep(2);
            }
        });

        // Back to Step 1
        document.getElementById('prBackToStep1').addEventListener('click', () => {
            goToStep(1);
        });

        // Next to Step 3
        document.getElementById('prNextToStep3').addEventListener('click', () => {
            if (validateStep2()) {
                goToStep(3);
            }
        });

        // Back to Step 2
        document.getElementById('prBackToStep2').addEventListener('click', () => {
            goToStep(2);
        });

        // Step 3 form submit
        document.getElementById('prStep3Form').addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateStep3()) {
                sendEmail();
            }
        });

        // Close success
        document.getElementById('prCloseSuccess').addEventListener('click', closeModal);
    }

    // ===== INITIALIZE =====
    function init() {
        // Create modal and styles
        createStyles();
        createModal();
        attachEventListeners();

        // Attach to window for external access
        window.ProjectRequestModal = {
            open: openModal,
            close: closeModal
        };

        console.log('✅ Project Request Modal initialized');
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
