import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="text-green-500 hover:text-green-600 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, such as when
              you create an account, use our services, or contact us for
              support.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Personal Information
            </h3>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Email address</li>
              <li>Name (if provided)</li>
              <li>Photos and media content you share</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and display photos and media content</li>
              <li>Filter inappropriate content using AI technology</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze usage and trends</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Content Filtering and AI
            </h2>
            <p className="text-muted-foreground mb-4">
              We use AI-powered content filtering to maintain appropriate
              standards on our platform. This includes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Automated analysis of uploaded photos and media</li>
              <li>Filtering of inappropriate or offensive content</li>
              <li>Protection of user privacy and safety</li>
              <li>Compliance with community standards</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Our AI systems are designed to respect privacy while maintaining
              content quality. We do not use your content to train AI models
              without explicit consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Information Sharing
            </h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>
                To trusted service providers who assist us in operating our
                platform
              </li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Data Security
            </h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Data Retention
            </h2>
            <p className="text-muted-foreground mb-4">
              We retain your information for as long as necessary to provide our
              services and fulfill the purposes outlined in this privacy policy.
              You may request deletion of your data at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Cookies and Tracking
            </h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar tracking technologies to enhance your
              experience, analyze usage patterns, and provide personalized
              content. You can control cookie settings through your browser
              preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Third-Party Services
            </h2>
            <p className="text-muted-foreground mb-4">
              Our service may contain links to third-party websites or services.
              We are not responsible for the privacy practices of these third
              parties. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-muted-foreground mb-4">
              Our service is not intended for children under 13. We do not
              knowingly collect personal information from children under 13. If
              we become aware that we have collected such information, we will
              take steps to delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Your Rights
            </h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and data</li>
              <li>Opt out of certain communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. Changes to This Policy
            </h2>
            <p className="text-muted-foreground mb-4">
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Contact Information
            </h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:privacy@partix.xyz"
                className="text-green-500 hover:text-green-600"
              >
                privacy@partix.xyz
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
