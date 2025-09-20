import Link from "next/link";

interface PricingTier {
  name: string;
  price: string;
  guestRange: string;
  mediaLimit: string;
  positioning: string;
  features: string[];
  cta: string;
  ctaLink: string;
  popular?: boolean;
  addOns?: string[];
}

export default function Pricing() {
  const tiers: PricingTier[] = [
    {
      name: "Free",
      price: "$0",
      guestRange: "0–8 guests",
      mediaLimit: "~60 photos",
      positioning: "For testing, personal events",
      features: ["Watermark", "No export", "Max 720p"],
      cta: "Get Started",
      ctaLink: "https://app.partix.xyz/admin",
    },
    {
      name: "Intimate",
      price: "$4.89",
      guestRange: "8–25 guests",
      mediaLimit: "~1GB",
      positioning: "Birthdays, dinners, small family",
      features: ["1080p unlock", "Minimal UI edits", "No watermark"],
      cta: "Start Intimate",
      ctaLink: "https://app.partix.xyz/admin",
      popular: true,
    },
    {
      name: "Social",
      price: "$19.99",
      guestRange: "25–70 guests",
      mediaLimit: "~3GB",
      positioning: "Team events, class parties",
      features: ["Add-on: Invite flow", "Extra media", "Custom backgrounds"],
      cta: "Go Social",
      ctaLink: "https://app.partix.xyz/admin",
    },
    {
      name: "Formal",
      price: "$49.99",
      guestRange: "70–250 guests",
      mediaLimit: "~10GB",
      positioning: "Weddings, major celebrations",
      features: [
        "AI video + export bundle",
        "Priority support",
        "Advanced analytics",
      ],
      cta: "Plan Formal",
      ctaLink: "https://app.partix.xyz/admin",
      addOns: ["Add AI video + export bundle for $24.99 extra = $74.98"],
    },
    {
      name: "Showcase",
      price: "$149.99",
      guestRange: "250+ guests",
      mediaLimit: "25GB+",
      positioning: "Public launches, brand events",
      features: ["Multi-timeline", "Branding", "White-label options"],
      cta: "Showcase Event",
      ctaLink: "https://app.partix.xyz/admin",
    },
    {
      name: "Contact",
      price: "Custom",
      guestRange: "500+ guests",
      mediaLimit: "Unlimited",
      positioning: "Conferences, org-wide rollouts",
      features: ["Whitelabel", "SSO", "Analytics", "Custom integrations"],
      cta: "Contact Sales",
      ctaLink: "mailto:sales@partix.xyz",
    },
  ];

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate gatherings to large-scale events, we have the right
            plan for your party needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-background p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-lg relative ${
                tier.popular
                  ? "border-green-500 shadow-lg scale-105"
                  : "border-border hover:border-green-300"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <div className="text-4xl font-bold text-green-500 mb-2">
                  {tier.price}
                </div>
                <p className="text-muted-foreground text-sm">
                  {tier.guestRange}
                </p>
                <p className="text-muted-foreground text-sm">
                  {tier.mediaLimit}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-foreground font-medium mb-4">
                  {tier.positioning}
                </p>
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {tier.addOns && (
                <div className="mb-6 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                    {tier.addOns[0]}
                  </p>
                </div>
              )}

              <Link
                href={tier.ctaLink}
                target={
                  tier.ctaLink.startsWith("mailto:") ? undefined : "_blank"
                }
                rel={
                  tier.ctaLink.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  tier.popular
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transform hover:scale-105"
                    : "bg-muted text-foreground hover:bg-green-500 hover:text-white"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need help choosing? Contact our team for personalized
            recommendations.
          </p>
          <Link
            href="mailto:support@partix.xyz"
            className="text-green-500 hover:text-green-600 font-medium"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </section>
  );
}
