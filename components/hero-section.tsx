import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white [background:linear-gradient(to_bottom_right,white,rgb(203_213_225),rgb(148_163_184))] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent] max-w-4xl mx-auto text-balance">
          MailFusion – All Your Emails, One Smart Dashboard
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 text-pretty">
          Connect multiple Gmail accounts, get AI summaries, and never miss what's important.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            size="lg"
            className="group relative h-14 px-8 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 font-bold text-lg shadow-lg shadow-blue-500/20 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-1"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/0 to-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-8 rounded-2xl bg-slate-800/50 border border-slate-700 text-white font-bold text-lg shadow-[0_4px_14px_0_rgb(0,0,0,0.25)] hover:bg-slate-700/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Learn More
          </Button>
        </div>
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto">
          <div className="aspect-[16/9] bg-slate-900/50 rounded-2xl ring-1 ring-white/10 shadow-2xl hero-glow">
            <img
              alt="MailFusion Dashboard"
              className="w-full h-full object-cover rounded-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwo1SCUmSm7HwhBrKzaoZKHZAhgURnxhwlxpdbeBsD_UFpcCjbZCzj2J7IAtOypCokK31vK2sMnfBUk7kWE7iSIDi28Sep7GNLmSZ_7Et_KrL-d_XEJHSYeT12OdLqbbUi5tLmyJVNwBThseGLUzcJ9RYrhFHbPYHmhP1igTnsySdnq-kZajl-5d97-_dGEBfsybSTwqviz_F92a_4ZUhRExgvuXN6lx4EjlyHAnEGnL8xBIk_Dp6Td0EBwZ3tIHXTJXbUwG3yZegf"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
