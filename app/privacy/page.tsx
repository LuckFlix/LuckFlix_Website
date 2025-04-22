import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-amber-500 hover:text-amber-600 hover:bg-amber-500/10 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-white/80">
          <section>
            <h2 className="text-xl font-bold mb-4 text-amber-500">Introduction</h2>
            <p>
              At LuckFlix, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-amber-500">Information We Collect</h2>
            <p className="mb-4">We may collect information about you in various ways when you use our application:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Data:</strong> Name, email address, and other contact information you provide.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use the application, including viewing history
                and preferences.
              </li>
              <li>
                <strong>Device Information:</strong> Information about your mobile device, including device model,
                operating system, and unique device identifiers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-amber-500">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To personalize your experience and provide content recommendations</li>
              <li>To improve our application and develop new features</li>
              <li>To communicate with you about updates and changes</li>
              <li>To detect and prevent fraudulent activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-amber-500">Sharing Your Information</h2>
            <p>
              We may share your information with third parties in certain circumstances, such as with service providers
              who assist us in operating our application, when required by law, or in connection with a business
              transfer. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-amber-500">Your Choices</h2>
            <p>
              You can control certain information we collect by adjusting your device settings or by contacting us
              directly. You may also opt out of receiving promotional communications from us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-amber-500">Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from
              unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-amber-500">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-amber-500">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">
              <a href="mailto:privacy@luckflix.com" className="text-amber-500 hover:underline">
                privacy@luckflix.com
              </a>
            </p>
          </section>

          <div className="pt-4 text-sm text-white/50">Last Updated: April 22, 2025</div>
        </div>
      </div>
    </main>
  )
}
