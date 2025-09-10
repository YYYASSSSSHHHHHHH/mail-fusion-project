import { MailIcon } from "@/components/icons/mail-icon"
import { TwitterIcon, GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Pricing", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-950/40 border-t border-white/10 mt-auto pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <MailIcon className="text-blue-400" />
              <span className="text-xl font-bold tracking-tight text-white">MailFusion</span>
            </div>
            <p className="mt-4 text-sm text-slate-400">One smart dashboard for all your emails.</p>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a className="text-slate-400 hover:text-white transition-colors text-sm" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a className="text-slate-400 hover:text-white transition-colors text-sm" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a className="text-slate-400 hover:text-white transition-colors text-sm" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <a className="text-slate-400 hover:text-white transition-colors" href="#">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a className="text-slate-400 hover:text-white transition-colors" href="#">
                <GitHubIcon className="h-6 w-6" />
              </a>
              <a className="text-slate-400 hover:text-white transition-colors" href="#">
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-slate-400">
          <p>© 2024 MailFusion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
