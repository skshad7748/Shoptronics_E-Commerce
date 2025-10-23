import { FooterColumn } from "@molecules/FooterColumn";
import { NewsletterForm } from "@molecules/NewsletterForm";

export interface SiteFooterProps {
  logoSrc?: string;
  logoAlt?: string;
  year?: number;
}

export function SiteFooter({
  logoSrc = "/images/logo/Shoptronics.png",
  logoAlt = "Shoptronics",
  year = new Date().getFullYear(),
}: SiteFooterProps) {
  return (
    <footer className="mt-16 bg-[#F7F0EC]">
      {/* thin brand line like the mock */}
      <div className="h-0.5 bg-linear-to-r" />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand + blurb */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={logoSrc}
                alt={logoAlt}
                className="h-6 w-auto select-none object-contain"
                draggable={false}
              />
            </div>
            <p className="max-w-xs text-sm leading-6 text-gray-600">
              Elegant pink origami design three dimensional view and decoration
              co-exist. Great for adding a decorative touch to any room’s decor.
            </p>
          </div>

          {/* Information */}
          <FooterColumn title="Information">
            <ul className="space-y-2">
              <li>
                <a className="hover:text-gray-900" href="#">
                  Custom Service
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#">
                  Ordering Tracking
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#">
                  Contacts
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#">
                  Events
                </a>
              </li>
            </ul>
          </FooterColumn>

          {/* My Account */}
          <FooterColumn title="My Account">
            <ul className="space-y-2">
              <li>
                <a className="hover:text-gray-900" href="#">
                  Delivery Information
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#">
                  Discount
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#">
                  Custom Service
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900" href="#">
                  Terms &amp; Condition
                </a>
              </li>
            </ul>
          </FooterColumn>

          {/* Newsletter */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-800">
              Get Newsletter
            </h4>
            <NewsletterForm
              onSubmit={(email) => console.log("subscribe:", email)}
            />
          </div>
        </div>

        <div className="mt-10 border-t border-black/5 pt-6">
          <p className="text-center text-xs text-gray-500">
            Copyright ©{year} @Ninja. All rights reserved. Powered by Ninja.
          </p>
        </div>
      </div>
    </footer>
  );
}
