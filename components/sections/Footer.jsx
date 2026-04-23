// components/ui/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-800 bg-black pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tighter text-white"
            >
              QUIZ<span className="text-green-500">MAST</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-stone-500">
              The ultimate platform for developers to test their knowledge and
              master new technologies through AI-driven challenges.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold text-white">Resources</h4>
            <ul className="mt-4 space-y-2 text-sm text-stone-500">
              <li>
                <Link href="/docs" className="hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/kritmanrao/react-quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          {/* Legal Section in Footer */}
          <div>
            <h4 className="text-sm font-bold text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-stone-500">
              <li>
                <Link
                  href="/legal#privacy"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#terms"
                  className="transition-colors hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#cookies"
                  className="transition-colors hover:text-white"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          {/* Support Section in Footer */}
          <div>
            <h4 className="text-sm font-bold text-white">Support</h4>
            <ul className="mt-4 space-y-2 text-sm text-stone-500">
              <li>
                <Link
                  href="/support#contact"
                  className="transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/support#contact"
                  className="transition-colors hover:text-white"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="/support#status"
                  className="transition-colors hover:text-white"
                >
                  System Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-stone-900 pt-8 md:flex-row">
          <p className="text-xs text-stone-600">
            © {new Date().getFullYear()} QuizMast Inc. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            {/* Social Icons could go here */}
            <div className="h-4 w-4 rounded-full bg-stone-800" />
            <div className="h-4 w-4 rounded-full bg-stone-800" />
          </div>
        </div>
      </div>
    </footer>
  );
}
