import Link from "next/link";

export default function TermsOfService() {
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
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using Partix (&quot;the Service&quot;), you
              accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Use License
            </h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily use Partix for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>modify or copy the materials</li>
              <li>
                use the materials for any commercial purpose or for any public
                display
              </li>
              <li>
                attempt to reverse engineer any software contained on the
                website
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Content Policy
            </h2>
            <p className="text-muted-foreground mb-4">
              Users are responsible for the content they share through Partix.
              We use AI-powered content filtering to maintain appropriate
              standards, but users must:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Not share inappropriate, offensive, or illegal content</li>
              <li>Respect the privacy and rights of others</li>
              <li>
                Not share content that violates intellectual property rights
              </li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Privacy
            </h2>
            <p className="text-muted-foreground mb-4">
              Your privacy is important to us. Please review our Privacy Policy,
              which also governs your use of the Service, to understand our
              practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Disclaimer
            </h2>
            <p className="text-muted-foreground mb-4">
              The materials on Partix are provided on an &apos;as is&apos;
              basis. Partix makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Limitations
            </h2>
            <p className="text-muted-foreground mb-4">
              In no event shall Partix or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on Partix, even if Partix or a
              Partix authorized representative has been notified orally or in
              writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Accuracy of Materials
            </h2>
            <p className="text-muted-foreground mb-4">
              The materials appearing on Partix could include technical,
              typographical, or photographic errors. Partix does not warrant
              that any of the materials on its website are accurate, complete,
              or current.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Links
            </h2>
            <p className="text-muted-foreground mb-4">
              Partix has not reviewed all of the sites linked to our website and
              is not responsible for the contents of any such linked site. The
              inclusion of any link does not imply endorsement by Partix of the
              site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Modifications
            </h2>
            <p className="text-muted-foreground mb-4">
              Partix may revise these terms of service for its website at any
              time without notice. By using this website you are agreeing to be
              bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Governing Law
            </h2>
            <p className="text-muted-foreground mb-4">
              These terms and conditions are governed by and construed in
              accordance with the laws of the United States and you irrevocably
              submit to the exclusive jurisdiction of the courts in that state
              or location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Contact Information
            </h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:legal@partix.xyz"
                className="text-green-500 hover:text-green-600"
              >
                legal@partix.xyz
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
