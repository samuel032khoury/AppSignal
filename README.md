# AppSignal - Real-Time SaaS Insights ✨

## Features 🔮

AppSignal is a SaaS platform that allows developers to monitor real-time events in their applications and receive notifications directly in their Discord accounts. This project includes an API for tracking events, a beautiful dashboard for managing and viewing data, and a complete quota tracking and subscription system.

### Core Functionality

- **Real-Time Event Notifications**
  Receive beautifully formatted Discord notifications for events in real time (e.g., sales, new user signups).
- **Event Tracking API**
  Flexible API for sending events with customizable data (e.g., category, amount, user ID) from any framework or language.

- **Dashboard for Insights**
  - View, manage, and customize events using a clean and intuitive interface.
  - Pre-built quick-start options to auto-create event categories (e.g., bugs, sales, questions).
  - Sortable and filterable event tables with real-time updates.

### User Experience

- **Interactive Landing Page**

  - Live demo showcasing the Discord UI for notifications.
  - Complex and visually appealing Bento grid design for presenting features.

- **Advanced Data Handling**
  - React Query-powered data fetching for a seamless user experience.
  - Beautiful loading states, animations, and functional tables.

### Subscription and Quotas

- **Plan Management**

  - Free plan with a limited number of events and categories.
  - Pro plan for expanded event tracking and advanced analytics.

- **Quota Tracking**

  - Real-time quota updates in the dashboard.
  - Automatic notifications to encourage plan upgrades.

- **Checkout and Payment System**
  - Professionally designed checkout and payment confirmation modals.
  - Pricing page with lifetime access options and advanced analytics.

## Tech Stack 🛠️

- **Frontend**: Next.js, Tailwind, shadcn-ui, React Query
- **API**: Hono.js, tRPC
- **Integration**: Discord for real-time notifications
- **Authentication**: Clerk for secure user authentication
- **Payment System**: Stripe for secure payments
- **UI/UX**: Clean, modern design with custom artworks by a professional illustrator

## Getting Started ▶️

### Prerequisites

- Node.js (v18 or higher)
- Next.js (v14)
- Discord account
- Stripe account for payment integration
- Clerk account for authentication setup

### Steps

1. Clone this repository:

   ```bash
   git clone https://github.com/samuel032khoury/AppSignal.git
   cd AppSignal
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Add the following variables to `.env.local`:

     ```env
     NEXT_PUBLIC_DISCORD_WEBHOOK_URL=<your_discord_webhook_url>
     STRIPE_API_KEY=<your_stripe_api_key>
     CLERK_FRONTEND_API=<your_clerk_frontend_api>
     CLERK_API_KEY=<your_clerk_api_key>
     ```
     
     - Get Clerk API [here](https://clerk.com).

4. Run the development server:

   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:3000`.

## AppSignal in Practice 🚀

1. **Startup SaaS Platforms**:

   A SaaS for financial management uses AppSignal to track subscription upgrades or new trial signups and sends the team a real-time Discord alert.

2. **E-Learning Platforms**:

   An online course provider monitors when a student completes a course and triggers an event to Discord for marketing follow-ups.

3. **E-commerce Platforms**:

   An e-commerce company uses AppSignal to track new orders for timely processing and receives alerts when stock for products is low to prompt reordering.

4. **Open Source Projects**:

   An open-source library team tracks their package downloads on platforms like npm or PyPI and uses AppSignal for updates.

5. **DevOps Teams**:

   A cloud infrastructure provider uses the platform to notify their team of infrastructure anomalies, such as exceeding predefined CPU or storage limits.

6. **Online Forum**:

An online forum uses AppSignal to monitor new posts and get notifications when a post goes viral.

7. **and MORE...**

Start monitoring your SaaS events in real time today with AppSignal!

## Acknowledgement 📜

This project is a variant of [pingpanda](https://github.com/joschan21/pingpanda) by [joschan21](https://github.com/joschan21). I would like to express my sincere gratitude to this [video](https://www.youtube.com/watch?v=vEQlN17miq8) for providing an insightful and well-structured tutorial that served as the foundation for this project. The content was instrumental in helping me understand and implement key concepts effectively. This project would not have been possible without the guidance and inspiration provided through their tutorial.
