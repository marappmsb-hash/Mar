# MAR App - Comprehensive Development Plan

## Table of Contents
1. [Overview](#overview)
2. [Project Phases](#project-phases)
3. [Codebase Structure](#codebase-structure)
4. [Technology Stack](#technology-stack)
5. [Budget Breakdown](#budget-breakdown)
6. [Resource Links](#resource-links)

---

## Overview

**MAR** is a cultural connection and dining app that helps people discover restaurants, events, and connect with others who share similar cultural backgrounds or interests. Think of it like a combination of Tinder (for matching), Yelp (for restaurant discovery), and Eventbrite (for cultural events).

### Core Features
- **Roots Discovery**: Find restaurants and events matching your cultural heritage
- **Expedition Discovery**: Explore new cultures through food and events
- **Resonance Matching**: Swipe-based matching with other users
- **Gatherings**: Weekly "Thursday Ritual" group dining events
- **Identity Stack**: Visual representation of cultural identity (rhythm, spice, legacy)

---

## Project Phases

### Phase 0: Foundation & Planning (Weeks 1-2)
**Goal**: Set up the development environment and plan the architecture

#### Tasks
- [ ] Set up version control (Git/GitHub)
- [ ] Create project documentation structure
- [ ] Design database schema
- [ ] Plan API endpoints
- [ ] Set up development tools (code editor, testing frameworks)
- [ ] Create wireframes for all screens
- [ ] Legal research (terms of service, privacy policy, data protection)

#### Time Required
- **2 weeks** (80 hours)
- 1 full-stack developer
- 1 designer (part-time)

#### Technologies
- Git/GitHub
- Figma (for design)
- Notion/Confluence (for documentation)

#### Cost
- **$0-500** (mostly free tools, optional premium design software)

#### Key Deliverables
- Project repository on GitHub
- Database schema design document
- API specification document
- Design system and wireframes

---

### Phase 1: Backend Infrastructure (Weeks 3-8)
**Goal**: Build the server and database that will power the app

#### What is Backend?
Think of the backend as the "brain" of your app. It's the server that stores all the data (user profiles, restaurants, events) and handles requests from the app. Users don't see it, but it's essential.

#### Tasks

##### 1.1 Database Setup (Week 3)
- [ ] Choose database (PostgreSQL recommended)
- [ ] Design database tables:
  - Users table (name, email, location, identity stack)
  - Restaurants table (name, location, cuisine type, ratings)
  - Events table (name, date, location, host, category)
  - Matches table (who matched with whom)
  - Swipes table (who swiped on whom)
- [ ] Set up database on cloud (AWS RDS, Google Cloud SQL, or Supabase)
- [ ] Create database migration scripts

**Time**: 1 week (40 hours)

##### 1.2 Authentication System (Week 4)
- [ ] Implement user registration
- [ ] Implement login/logout
- [ ] Password hashing and security
- [ ] Email verification
- [ ] Password reset functionality
- [ ] OAuth integration (Google, Apple, Facebook login)

**Time**: 1 week (40 hours)

##### 1.3 Core API Development (Weeks 5-7)
Build RESTful APIs (Application Programming Interfaces) - these are like "doors" that allow the app to request data from the server.

**APIs Needed**:
- User APIs: Create profile, update profile, get profile
- Restaurant APIs: Search restaurants, get restaurant details, filter by location/cuisine
- Event APIs: List events, create event, join event, get event details
- Matching APIs: Get potential matches, record swipe, get matches
- Location APIs: Get user location, calculate distances

**Time**: 3 weeks (120 hours)

##### 1.4 File Storage Setup (Week 8)
- [ ] Set up cloud storage (AWS S3, Google Cloud Storage, or Cloudinary)
- [ ] Image upload functionality
- [ ] Image resizing and optimization
- [ ] Profile picture handling

**Time**: 1 week (40 hours)

#### Time Required
- **6 weeks** (240 hours)
- 1-2 backend developers

#### Technologies
- **Backend Framework**: Node.js with Express, Python with Django/FastAPI, or Go
- **Database**: PostgreSQL (recommended) or MongoDB
- **Authentication**: JWT tokens, OAuth 2.0
- **Cloud Services**: AWS, Google Cloud, or Vercel
- **File Storage**: AWS S3, Cloudinary, or Supabase Storage

#### Cost
- **Development**: $12,000-18,000 (if hiring developers)
- **Cloud Services (Monthly)**: $50-200 (scales with usage)
  - Database: $20-100/month
  - File Storage: $10-50/month
  - API Hosting: $20-100/month

#### Key Deliverables
- Working backend API
- Database with all tables
- Authentication system
- API documentation

---

### Phase 2: Data Collection & Integration (Weeks 9-14)
**Goal**: Populate the app with real restaurant and event data

#### What is Data Scraping?
Data scraping is like having a robot visit websites (like Yelp, Google Maps, Eventbrite) and automatically collect information about restaurants and events, then save it to your database.

#### Tasks

##### 2.1 Restaurant Data Collection (Weeks 9-11)
- [ ] Research data sources:
  - Google Places API
  - Yelp Fusion API
  - Foursquare API
  - OpenTable API
- [ ] Build scraping scripts (respecting rate limits and terms of service)
- [ ] Data cleaning and normalization
- [ ] Categorize restaurants by cuisine type
- [ ] Add cultural tags to restaurants
- [ ] Verify and update restaurant data

**Time**: 3 weeks (120 hours)

##### 2.2 Event Data Collection (Weeks 12-13)
- [ ] Research event sources:
  - Eventbrite API
  - Facebook Events API
  - Meetup API
  - Local event websites
- [ ] Build event scraping scripts
- [ ] Filter events by cultural relevance
- [ ] Categorize events (Roots vs Expedition)
- [ ] Data validation

**Time**: 2 weeks (80 hours)

##### 2.3 Data Quality & Maintenance (Week 14)
- [ ] Set up automated data refresh jobs
- [ ] Create admin dashboard for data management
- [ ] Implement data validation rules
- [ ] Set up monitoring for data quality

**Time**: 1 week (40 hours)

#### Time Required
- **6 weeks** (240 hours)
- 1 data engineer/developer

#### Technologies
- **APIs**: Google Places API, Yelp Fusion API, Eventbrite API
- **Scraping Tools**: Python (BeautifulSoup, Scrapy), Node.js (Puppeteer)
- **Data Processing**: Python (Pandas), or Node.js
- **Scheduling**: Cron jobs, AWS Lambda, or GitHub Actions

#### Cost
- **Development**: $9,000-12,000 (if hiring)
- **API Costs (Monthly)**:
  - Google Places API: $200-500/month (based on requests)
  - Yelp Fusion API: $0-500/month (free tier available
  - Eventbrite API: Free (with rate limits)
- **Total Monthly API Costs**: $200-1,000/month

#### Key Deliverables
- Database populated with restaurant data
- Database populated with event data
- Automated data refresh system
- Admin dashboard for data management

---

### Phase 3: Frontend Development (Weeks 15-22)
**Goal**: Build the user interface that users interact with

#### What is Frontend?
The frontend is what users see and interact with on their phones or computers. It's the buttons, images, and screens that make the app beautiful and easy to use.

#### Tasks

##### 3.1 Core UI Components (Weeks 15-17)
- [ ] Convert mockup to functional components
- [ ] Build reusable UI components:
  - Buttons, cards, modals
  - Navigation bars
  - Forms (login, registration, profile)
  - Image galleries
- [ ] Implement responsive design (works on phone, tablet, desktop)
- [ ] Add loading states and error handling
- [ ] Implement animations and transitions

**Time**: 3 weeks (120 hours)

##### 3.2 Feature Implementation (Weeks 18-20)
- [ ] **Roots/Expedition Discovery**:
  - Restaurant listing page
  - Restaurant detail page
  - Event listing page
  - Event detail page
  - Search and filter functionality
  - Map integration (Google Maps or Mapbox)
- [ ] **Resonance Matching**:
  - Swipe interface
  - Match screen
  - Chat interface (basic)
- [ ] **Gatherings**:
  - Thursday Ritual page
  - Join/leave functionality
  - Countdown timer
- [ ] **Identity Stack**:
  - Profile creation/editing
  - Identity stack visualization
  - Comparison view

**Time**: 3 weeks (120 hours)

##### 3.3 Integration with Backend (Week 21)
- [ ] Connect frontend to backend APIs
- [ ] Implement authentication flow
- [ ] Add error handling
- [ ] Implement data caching
- [ ] Add offline support (basic)

**Time**: 1 week (40 hours)

##### 3.4 Testing & Polish (Week 22)
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Bug fixes

**Time**: 1 week (40 hours)

#### Time Required
- **8 weeks** (320 hours)
- 1-2 frontend developers
- 1 UI/UX designer (part-time)

#### Technologies
- **Frontend Framework**: React (already using)
- **Styling**: Tailwind CSS (already using)
- **State Management**: Redux, Zustand, or React Context
- **Routing**: React Router
- **HTTP Client**: Axios or Fetch API
- **Maps**: Google Maps API or Mapbox
- **Image Handling**: React Image Gallery, Cloudinary

#### Cost
- **Development**: $16,000-24,000 (if hiring)
- **Services (Monthly)**:
  - Google Maps API: $100-500/month (based on usage)
  - Mapbox: $0-500/month (free tier available)
- **Total Monthly**: $100-500/month

#### Key Deliverables
- Fully functional web app
- Responsive design (mobile and desktop)
- All features working with backend
- Tested and polished UI

---

### Phase 4: Matching Algorithm & Intelligence (Weeks 23-26)
**Goal**: Build the "brain" that matches users intelligently

#### What is a Matching Algorithm?
A matching algorithm is like a smart system that looks at two users' profiles (their cultural background, interests, location) and decides how well they might get along. It's similar to how dating apps match people, but focused on cultural connections.

#### Tasks

##### 4.1 Algorithm Design (Week 23)
- [ ] Define matching criteria:
  - Cultural heritage similarity (for Roots matching)
  - Cultural diversity (for Expedition matching)
  - Location proximity
  - Shared interests
  - Activity preferences
- [ ] Design scoring system
- [ ] Create algorithm pseudocode
- [ ] Research existing matching algorithms

**Time**: 1 week (40 hours)

##### 4.2 Algorithm Implementation (Weeks 24-25)
- [ ] Implement matching logic
- [ ] Build recommendation engine
- [ ] Create A/B testing framework
- [ ] Add machine learning (optional, for Phase 6)

**Time**: 2 weeks (80 hours)

##### 4.3 Testing & Optimization (Week 26)
- [ ] Test matching accuracy
- [ ] Optimize algorithm performance
- [ ] Gather user feedback
- [ ] Refine matching criteria

**Time**: 1 week (40 hours)

#### Time Required
- **4 weeks** (160 hours)
- 1 backend developer with algorithm experience
- 1 data scientist (consulting, part-time)

#### Technologies
- **Algorithm**: Python or Node.js
- **Machine Learning** (optional): TensorFlow, PyTorch, or scikit-learn
- **Data Analysis**: Python (Pandas, NumPy)

#### Cost
- **Development**: $8,000-12,000 (if hiring)
- **ML Services** (if used): $50-200/month (AWS SageMaker, Google AI Platform)

#### Key Deliverables
- Working matching algorithm
- Recommendation system
- Performance metrics
- Documentation

---

### Phase 5: Security & Compliance (Weeks 27-30)
**Goal**: Protect user data and ensure legal compliance

#### What is Cybersecurity?
Cybersecurity is like having locks, alarms, and security guards for your app. It protects user data (passwords, personal information) from hackers and ensures the app is safe to use.

#### Tasks

##### 5.1 Security Implementation (Weeks 27-28)
- [ ] **Data Encryption**:
  - Encrypt sensitive data in database
  - Use HTTPS for all communications
  - Encrypt passwords (already done in Phase 1, but review)
- [ ] **Authentication Security**:
  - Implement rate limiting (prevent brute force attacks)
  - Add two-factor authentication (2FA)
  - Session management
- [ ] **API Security**:
  - API rate limiting
  - Input validation and sanitization
  - SQL injection prevention
  - Cross-site scripting (XSS) prevention
- [ ] **Data Protection**:
  - Regular security audits
  - Vulnerability scanning
  - Penetration testing

**Time**: 2 weeks (80 hours)

##### 5.2 Compliance (Weeks 29-30)
- [ ] **GDPR Compliance** (if serving EU users):
  - Privacy policy
  - Cookie consent
  - Data export functionality
  - Right to deletion
- [ ] **CCPA Compliance** (if serving California users):
  - Privacy disclosures
  - Opt-out mechanisms
- [ ] **Terms of Service**:
  - User agreement
  - Content moderation policies
- [ ] **Data Retention Policies**:
  - Define how long to keep user data
  - Implement data deletion

**Time**: 2 weeks (80 hours)

#### Time Required
- **4 weeks** (160 hours)
- 1 security engineer
- 1 legal consultant (part-time)

#### Technologies
- **Security Tools**: OWASP ZAP, Snyk, SonarQube
- **Encryption**: bcrypt, AES-256
- **Monitoring**: Sentry, LogRocket
- **Compliance Tools**: OneTrust, TrustArc

#### Cost
- **Development**: $8,000-12,000 (if hiring)
- **Security Tools (Monthly)**: $100-500/month
- **Legal Consultation**: $2,000-5,000 (one-time)
- **Compliance Tools (Monthly)**: $50-200/month

#### Key Deliverables
- Secure authentication system
- Encrypted data storage
- Privacy policy and terms of service
- GDPR/CCPA compliance
- Security audit report

---

### Phase 6: Mobile App Development (Weeks 31-38)
**Goal**: Create native mobile apps for iOS and Android

#### What is a Mobile App?
While the web app works in a browser, native mobile apps are downloaded from the App Store (iPhone) or Google Play (Android). They often run faster and can use phone features like push notifications and camera.

#### Tasks

##### 6.1 Mobile App Setup (Week 31)
- [ ] Choose framework:
  - **React Native** (recommended - shares code with web app)
  - Flutter
  - Native (Swift for iOS, Kotlin for Android)
- [ ] Set up development environment
- [ ] Create app icons and splash screens
- [ ] Set up app store accounts (Apple Developer, Google Play)

**Time**: 1 week (40 hours)

##### 6.2 Core Features (Weeks 32-35)
- [ ] Port web app features to mobile
- [ ] Implement native features:
  - Push notifications
  - Camera integration (for profile photos)
  - Location services
  - Biometric authentication (fingerprint/face ID)
- [ ] Optimize for mobile performance
- [ ] Implement offline mode

**Time**: 4 weeks (160 hours)

##### 6.3 Testing & Submission (Weeks 36-38)
- [ ] Device testing (multiple phones and tablets)
- [ ] App store submission
- [ ] Beta testing (TestFlight for iOS, Google Play Beta)
- [ ] Address feedback and resubmit

**Time**: 3 weeks (120 hours)

#### Time Required
- **8 weeks** (320 hours)
- 1-2 mobile developers

#### Technologies
- **Framework**: React Native (recommended)
- **Navigation**: React Navigation
- **State Management**: Redux or Zustand
- **Push Notifications**: Firebase Cloud Messaging, OneSignal
- **Maps**: React Native Maps
- **Camera**: React Native Camera or Expo Camera

#### Cost
- **Development**: $16,000-24,000 (if hiring)
- **App Store Fees**:
  - Apple Developer Program: $99/year
  - Google Play: $25 one-time
- **Services (Monthly)**:
  - Push notification service: $0-100/month
  - Mobile analytics: $0-200/month

#### Key Deliverables
- iOS app in App Store
- Android app in Google Play
- Push notifications working
- All core features functional

---

### Phase 7: Real-time Features (Weeks 39-42)
**Goal**: Add live features like chat and real-time updates

#### What is Real-time?
Real-time means information updates instantly. Like when you send a text message and the other person sees it immediately, or when you see "User is typing..." in a chat.

#### Tasks

##### 7.1 Chat System (Weeks 39-40)
- [ ] Implement real-time messaging
- [ ] Add typing indicators
- [ ] Message read receipts
- [ ] File/image sharing in chat
- [ ] Chat history

**Time**: 2 weeks (80 hours)

##### 7.2 Real-time Updates (Weeks 41-42)
- [ ] Live event updates
- [ ] Real-time match notifications
- [ ] Live gathering countdown
- [ ] Real-time location sharing (optional)

**Time**: 2 weeks (80 hours)

#### Time Required
- **4 weeks** (160 hours)
- 1 full-stack developer

#### Technologies
- **WebSockets**: Socket.io, WebSocket API
- **Real-time Database**: Firebase Realtime Database, Supabase Realtime
- **Message Queue**: Redis Pub/Sub, RabbitMQ

#### Cost
- **Development**: $8,000-12,000 (if hiring)
- **Services (Monthly)**: $50-300/month (scales with usage)

#### Key Deliverables
- Working chat system
- Real-time notifications
- Live updates for events

---

### Phase 8: Production Deployment (Weeks 43-46)
**Goal**: Launch the app to real users

#### What is Production?
Production is the "live" version of your app that real users interact with. Before this, you've been testing in "development" mode. Production needs to be fast, reliable, and handle many users at once.

#### Tasks

##### 8.1 Infrastructure Setup (Week 43)
- [ ] Set up production servers:
  - **Option 1**: Cloud platforms (AWS, Google Cloud, Azure)
  - **Option 2**: Platform-as-a-Service (Vercel, Netlify, Heroku)
- [ ] Configure CDN (Content Delivery Network) for fast loading
- [ ] Set up database backups
- [ ] Configure monitoring and logging
- [ ] Set up error tracking

**Time**: 1 week (40 hours)

##### 8.2 Performance Optimization (Week 44)
- [ ] Optimize database queries
- [ ] Implement caching (Redis)
- [ ] Optimize images and assets
- [ ] Code minification and bundling
- [ ] Load testing (simulate many users)

**Time**: 1 week (40 hours)

##### 8.3 Deployment & Launch (Weeks 45-46)
- [ ] Deploy backend to production
- [ ] Deploy frontend to production
- [ ] Set up CI/CD pipeline (automated deployments)
- [ ] Create launch checklist
- [ ] Soft launch (limited users)
- [ ] Monitor and fix issues
- [ ] Full public launch

**Time**: 2 weeks (80 hours)

#### Time Required
- **4 weeks** (160 hours)
- 1 DevOps engineer
- 1 backend developer

#### Technologies
- **Hosting**: AWS, Google Cloud, Azure, Vercel, Netlify
- **CDN**: Cloudflare, AWS CloudFront
- **Monitoring**: Datadog, New Relic, Sentry
- **CI/CD**: GitHub Actions, GitLab CI, Jenkins
- **Caching**: Redis, Memcached

#### Cost
- **Development**: $8,000-12,000 (if hiring)
- **Infrastructure (Monthly)**:
  - Server hosting: $100-1,000/month (scales with users)
  - CDN: $50-500/month
  - Monitoring: $50-300/month
  - Database: $50-500/month
- **Total Monthly**: $250-2,300/month (scales with growth)

#### Key Deliverables
- App live in production
- Monitoring and logging set up
- CI/CD pipeline working
- Performance optimized

---

### Phase 9: Marketing & User Acquisition (Weeks 47-52)
**Goal**: Get users to download and use the app

#### What is Marketing?
Marketing is how you tell people about your app and convince them to try it. This includes social media, ads, partnerships, and creating content that people want to share.

#### Tasks

##### 9.1 Branding & Content (Weeks 47-48)
- [ ] Finalize brand identity
- [ ] Create marketing website
- [ ] Write blog posts about cultural dining
- [ ] Create social media accounts
- [ ] Design marketing materials

**Time**: 2 weeks (80 hours)

##### 9.2 Launch Campaign (Weeks 49-50)
- [ ] Press release
- [ ] Social media campaign
- [ ] Influencer partnerships
- [ ] Community outreach (cultural organizations)
- [ ] Launch event (optional)

**Time**: 2 weeks (80 hours)

##### 9.3 Paid Advertising (Weeks 51-52)
- [ ] Set up Google Ads
- [ ] Set up Facebook/Instagram Ads
- [ ] Set up TikTok Ads (if targeting younger audience)
- [ ] A/B test ad creatives
- [ ] Optimize ad spend

**Time**: 2 weeks (80 hours)

#### Time Required
- **6 weeks** (240 hours)
- 1 marketing specialist
- 1 content creator (part-time)
- 1 designer (part-time)

#### Technologies
- **Analytics**: Google Analytics, Mixpanel, Amplitude
- **Ad Platforms**: Google Ads, Facebook Ads Manager, TikTok Ads
- **Email Marketing**: Mailchimp, SendGrid
- **Social Media**: Buffer, Hootsuite

#### Cost
- **Marketing Team**: $6,000-12,000 (if hiring)
- **Advertising Budget (Monthly)**: $2,000-10,000/month
  - Start with $2,000/month, scale up based on results
- **Tools (Monthly)**: $100-500/month
- **Total Monthly**: $2,100-10,500/month

#### Key Deliverables
- Marketing website
- Social media presence
- Launch campaign executed
- User acquisition funnel working

---

### Phase 10: Monetization (Weeks 53-56)
**Goal**: Generate revenue from the app

#### What is Monetization?
Monetization is how you make money from the app. Common ways include subscriptions, ads, taking a cut from bookings, or premium features.

#### Tasks

##### 10.1 Payment Integration (Week 53)
- [ ] Choose payment processor:
  - Stripe (recommended)
  - PayPal
  - Square
- [ ] Implement payment system
- [ ] Set up subscription billing (if offering premium)
- [ ] Test payment flows

**Time**: 1 week (40 hours)

##### 10.2 Revenue Models (Weeks 54-55)
**Option A: Freemium Model**
- [ ] Free tier: Basic features
- [ ] Premium tier: Advanced matching, priority support
- [ ] Pricing: $9.99/month or $99/year

**Option B: Commission Model**
- [ ] Take 10-15% commission on restaurant bookings
- [ ] Take 5-10% commission on event tickets
- [ ] Integrate with booking systems

**Option C: Advertising**
- [ ] Restaurant sponsored listings
- [ ] Banner ads
- [ ] Native advertising

**Option D: Hybrid** (Recommended)
- [ ] Free app with ads
- [ ] Premium subscription (ad-free + features)
- [ ] Commission on bookings

**Time**: 2 weeks (80 hours)

##### 10.3 Analytics & Optimization (Week 56)
- [ ] Set up revenue tracking
- [ ] A/B test pricing
- [ ] Analyze conversion rates
- [ ] Optimize revenue streams

**Time**: 1 week (40 hours)

#### Time Required
- **4 weeks** (160 hours)
- 1 full-stack developer
- 1 business analyst (consulting)

#### Technologies
- **Payments**: Stripe, PayPal, Square
- **Subscription Management**: Stripe Billing, RevenueCat
- **Analytics**: Mixpanel, Amplitude, Google Analytics

#### Cost
- **Development**: $8,000-12,000 (if hiring)
- **Payment Processing Fees**: 2.9% + $0.30 per transaction (Stripe)
- **Tools (Monthly)**: $50-200/month

#### Key Deliverables
- Payment system integrated
- Revenue model implemented
- Analytics dashboard
- Revenue tracking

---

### Phase 11: Scaling & Optimization (Ongoing)
**Goal**: Handle growth and improve the app continuously

#### What is Scaling?
Scaling means making your app handle more users without breaking or slowing down. Like adding more lanes to a highway when traffic increases.

#### Ongoing Tasks
- [ ] Monitor performance metrics
- [ ] Optimize database queries
- [ ] Add more servers as needed
- [ ] Implement caching strategies
- [ ] User feedback collection
- [ ] Regular feature updates
- [ ] Bug fixes and maintenance
- [ ] Security updates

#### Time Required
- **Ongoing**: 20-40 hours/week
- 1-2 developers (maintenance team)

#### Technologies
- **Monitoring**: Datadog, New Relic
- **Load Balancing**: AWS ELB, Google Cloud Load Balancing
- **Auto-scaling**: AWS Auto Scaling, Kubernetes

#### Cost
- **Team (Monthly)**: $8,000-16,000/month
- **Infrastructure (Monthly)**: Scales with users
  - 1,000 users: $500-1,000/month
  - 10,000 users: $2,000-5,000/month
  - 100,000 users: $10,000-30,000/month

---

## Codebase Structure

Here's how your project files should be organized. Think of it like organizing a filing cabinet - everything has its place.

```
mar-app/
├── frontend/                    # Web app (what users see)
│   ├── public/                 # Static files (images, icons)
│   ├── src/
│   │   ├── components/         # Reusable UI pieces
│   │   │   ├── common/         # Buttons, cards, modals
│   │   │   ├── discovery/      # Restaurant/event cards
│   │   │   ├── matching/       # Swipe cards, match screen
│   │   │   └── identity/       # Identity stack component
│   │   ├── pages/              # Full page components
│   │   │   ├── RootsPage.jsx
│   │   │   ├── ExpeditionPage.jsx
│   │   │   ├── ResonancePage.jsx
│   │   │   ├── GatheringsPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   ├── services/           # API calls to backend
│   │   │   ├── api.js
│   │   │   ├── auth.js
│   │   │   └── restaurants.js
│   │   ├── hooks/              # Custom React hooks
│   │   ├── utils/              # Helper functions
│   │   ├── store/              # State management (Redux/Zustand)
│   │   ├── styles/             # CSS files
│   │   ├── App.jsx             # Main app component
│   │   └── main.jsx            # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── backend/                     # Server (the "brain")
│   ├── src/
│   │   ├── controllers/        # Handle requests
│   │   │   ├── userController.js
│   │   │   ├── restaurantController.js
│   │   │   ├── eventController.js
│   │   │   └── matchController.js
│   │   ├── models/             # Database models
│   │   │   ├── User.js
│   │   │   ├── Restaurant.js
│   │   │   ├── Event.js
│   │   │   └── Match.js
│   │   ├── routes/             # API endpoints
│   │   │   ├── auth.js
│   │   │   ├── users.js
│   │   │   ├── restaurants.js
│   │   │   └── events.js
│   │   ├── middleware/          # Security, validation
│   │   │   ├── auth.js
│   │   │   └── validation.js
│   │   ├── services/           # Business logic
│   │   │   ├── matchingService.js
│   │   │   ├── scrapingService.js
│   │   │   └── emailService.js
│   │   ├── utils/              # Helper functions
│   │   ├── config/             # Configuration
│   │   │   ├── database.js
│   │   │   └── env.js
│   │   └── server.js           # Main server file
│   ├── tests/                  # Automated tests
│   ├── package.json
│   └── .env.example
│
├── mobile/                     # Mobile apps (iOS & Android)
│   ├── src/
│   │   ├── components/         # Shared with web (if using React Native)
│   │   ├── screens/            # Mobile-specific screens
│   │   ├── navigation/        # App navigation
│   │   └── services/          # API calls
│   ├── ios/                   # iOS-specific code
│   ├── android/               # Android-specific code
│   └── package.json
│
├── data-scraping/              # Scripts to collect data
│   ├── restaurants/
│   │   ├── googlePlaces.js
│   │   ├── yelp.js
│   │   └── foursquare.js
│   ├── events/
│   │   ├── eventbrite.js
│   │   └── meetup.js
│   └── utils/
│
├── infrastructure/            # Server setup files
│   ├── docker/                # Container configurations
│   ├── kubernetes/            # If using Kubernetes
│   └── terraform/             # Infrastructure as code
│
├── docs/                      # Documentation
│   ├── api/                   # API documentation
│   ├── database/              # Database schema
│   └── deployment/            # How to deploy
│
├── scripts/                    # Utility scripts
│   ├── setup.sh               # Initial setup
│   └── deploy.sh              # Deployment script
│
├── .github/                    # GitHub configurations
│   └── workflows/             # CI/CD pipelines
│
├── .gitignore                 # Files to ignore in Git
├── README.md                  # Project overview
└── PROJECT_PLAN.md            # This file!
```

---

## Technology Stack

### Frontend
- **Framework**: React (already using)
- **Styling**: Tailwind CSS (already using)
- **State Management**: Zustand or Redux
- **Routing**: React Router
- **HTTP Client**: Axios
- **Maps**: Google Maps API or Mapbox
- **Build Tool**: Vite (already using)

### Backend
- **Runtime**: Node.js (recommended) or Python
- **Framework**: Express.js (Node) or FastAPI (Python)
- **Database**: PostgreSQL
- **ORM**: Prisma (Node) or SQLAlchemy (Python)
- **Authentication**: JWT, Passport.js
- **File Storage**: AWS S3 or Cloudinary

### Mobile
- **Framework**: React Native (shares code with web)
- **Navigation**: React Navigation
- **State Management**: Redux or Zustand

### Infrastructure
- **Hosting**: AWS, Google Cloud, or Vercel
- **Database Hosting**: AWS RDS, Supabase, or PlanetScale
- **CDN**: Cloudflare
- **Monitoring**: Sentry, Datadog

### Development Tools
- **Version Control**: Git, GitHub
- **CI/CD**: GitHub Actions
- **Testing**: Jest, React Testing Library
- **Code Quality**: ESLint, Prettier

---

## Budget Breakdown

### One-Time Costs (First Year)

| Item | Cost Range |
|------|------------|
| Legal (Terms, Privacy Policy) | $2,000 - $5,000 |
| Design & Branding | $3,000 - $10,000 |
| App Store Fees | $124 (Apple $99 + Google $25) |
| Initial Security Audit | $5,000 - $10,000 |
| **Total One-Time** | **$10,124 - $25,124** |

### Development Costs (If Hiring)

| Phase | Duration | Cost Range |
|-------|----------|------------|
| Phase 1: Backend | 6 weeks | $12,000 - $18,000 |
| Phase 2: Data Collection | 6 weeks | $9,000 - $12,000 |
| Phase 3: Frontend | 8 weeks | $16,000 - $24,000 |
| Phase 4: Matching Algorithm | 4 weeks | $8,000 - $12,000 |
| Phase 5: Security | 4 weeks | $8,000 - $12,000 |
| Phase 6: Mobile | 8 weeks | $16,000 - $24,000 |
| Phase 7: Real-time | 4 weeks | $8,000 - $12,000 |
| Phase 8: Deployment | 4 weeks | $8,000 - $12,000 |
| Phase 9: Marketing | 6 weeks | $6,000 - $12,000 |
| Phase 10: Monetization | 4 weeks | $8,000 - $12,000 |
| **Total Development** | **52 weeks** | **$98,000 - $150,000** |

**Note**: If you're building it yourself, development costs are your time. If hiring freelancers, expect $50-150/hour depending on experience.

### Monthly Operating Costs

| Service | Low Usage | High Usage |
|---------|-----------|------------|
| Cloud Hosting | $100 | $1,000 |
| Database | $50 | $500 |
| File Storage | $20 | $200 |
| APIs (Google, Yelp) | $200 | $1,000 |
| Maps API | $100 | $500 |
| Monitoring | $50 | $300 |
| Push Notifications | $0 | $100 |
| **Infrastructure Total** | **$520** | **$3,600** |
| Marketing/Ads | $2,000 | $10,000 |
| **Total Monthly** | **$2,520** | **$13,600** |

### Total First Year Cost Estimate

- **If Building Yourself**: $10,000 - $30,000 (one-time + monthly costs)
- **If Hiring Team**: $108,000 - $175,000 (development + one-time + monthly)

---

## Resource Links

### Learning Resources

#### General Software Development
- **freeCodeCamp**: https://www.freecodecamp.org/ (Free coding courses)
- **MDN Web Docs**: https://developer.mozilla.org/ (Web development reference)
- **Stack Overflow**: https://stackoverflow.com/ (Q&A for developers)

#### React & Frontend
- **React Official Docs**: https://react.dev/
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **React Router**: https://reactrouter.com/

#### Backend Development
- **Node.js Docs**: https://nodejs.org/en/docs/
- **Express.js Guide**: https://expressjs.com/
- **PostgreSQL Tutorial**: https://www.postgresqltutorial.com/

#### Database Design
- **Database Design Basics**: https://www.lucidchart.com/pages/database-diagram/database-design
- **PostgreSQL Documentation**: https://www.postgresql.org/docs/

#### APIs & Integration
- **REST API Tutorial**: https://restfulapi.net/
- **Google Places API**: https://developers.google.com/maps/documentation/places
- **Yelp Fusion API**: https://www.yelp.com/developers/documentation/v3

#### Security
- **OWASP Top 10**: https://owasp.org/www-project-top-ten/ (Common security risks)
- **JWT.io**: https://jwt.io/ (Learn about JWT tokens)
- **OWASP Cheat Sheets**: https://cheatsheetseries.owasp.org/

#### Mobile Development
- **React Native Docs**: https://reactnative.dev/
- **Expo**: https://expo.dev/ (Easier React Native development)

#### DevOps & Deployment
- **AWS Getting Started**: https://aws.amazon.com/getting-started/
- **Docker Tutorial**: https://docs.docker.com/get-started/
- **GitHub Actions**: https://docs.github.com/en/actions

#### Testing
- **Jest Documentation**: https://jestjs.io/
- **React Testing Library**: https://testing-library.com/react

### Tools & Services

#### Development Tools
- **GitHub**: https://github.com/ (Code hosting)
- **VS Code**: https://code.visualstudio.com/ (Code editor)
- **Figma**: https://www.figma.com/ (Design tool)

#### Cloud Services
- **AWS**: https://aws.amazon.com/ (Cloud hosting)
- **Google Cloud**: https://cloud.google.com/ (Alternative cloud)
- **Vercel**: https://vercel.com/ (Easy frontend hosting)
- **Supabase**: https://supabase.com/ (Backend-as-a-Service)

#### APIs & Services
- **Stripe**: https://stripe.com/ (Payments)
- **Twilio**: https://www.twilio.com/ (SMS, phone)
- **SendGrid**: https://sendgrid.com/ (Email)
- **Cloudinary**: https://cloudinary.com/ (Image hosting)

#### Monitoring & Analytics
- **Sentry**: https://sentry.io/ (Error tracking)
- **Mixpanel**: https://mixpanel.com/ (Analytics)
- **Google Analytics**: https://analytics.google.com/

#### Marketing
- **Google Ads**: https://ads.google.com/
- **Facebook Ads**: https://www.facebook.com/business/ads
- **Mailchimp**: https://mailchimp.com/ (Email marketing)

### Communities & Forums
- **r/webdev**: https://www.reddit.com/r/webdev/
- **r/reactjs**: https://www.reddit.com/r/reactjs/
- **Dev.to**: https://dev.to/ (Developer community)
- **Stack Overflow**: https://stackoverflow.com/

### Documentation Templates
- **Privacy Policy Generator**: https://www.privacypolicygenerator.info/
- **Terms of Service Generator**: https://www.termsofservicegenerator.net/

---

## Timeline Summary

### Quick Reference

| Phase | Duration | Key Deliverable |
|-------|----------|-----------------|
| Phase 0: Foundation | 2 weeks | Project setup |
| Phase 1: Backend | 6 weeks | Working API |
| Phase 2: Data Collection | 6 weeks | Populated database |
| Phase 3: Frontend | 8 weeks | Functional web app |
| Phase 4: Matching | 4 weeks | Matching algorithm |
| Phase 5: Security | 4 weeks | Secure app |
| Phase 6: Mobile | 8 weeks | iOS & Android apps |
| Phase 7: Real-time | 4 weeks | Chat & live updates |
| Phase 8: Deployment | 4 weeks | Live app |
| Phase 9: Marketing | 6 weeks | User acquisition |
| Phase 10: Monetization | 4 weeks | Revenue streams |
| Phase 11: Scaling | Ongoing | Growth support |

**Total Timeline**: ~56 weeks (about 13 months) to full launch

### Critical Path
The fastest way to a working app:
1. Phase 0-1: Backend (8 weeks)
2. Phase 3: Frontend (8 weeks) - can start with mock data
3. Phase 8: Deploy (4 weeks)
4. **Minimum Viable Product (MVP)**: 20 weeks (~5 months)

Then add other features incrementally.

---

## Next Steps

1. **Review this plan** and adjust based on your priorities
2. **Start with Phase 0**: Set up your development environment
3. **Begin Phase 1**: Build the backend foundation
4. **Iterate**: Build, test, get feedback, improve

Remember: You don't need to build everything at once. Start with an MVP (Minimum Viable Product) - the simplest version that solves the core problem. Then add features based on user feedback.

Good luck building MAR! 🚀

---

*Last Updated: [Current Date]*
*Version: 1.0*
