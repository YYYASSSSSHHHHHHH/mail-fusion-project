const steps = [
  {
    number: 1,
    title: "Connect Accounts",
    description: "Link your Gmail accounts securely using official Google authentication.",
  },
  {
    number: 2,
    title: "View Dashboard",
    description: "See all your emails merge into one unified, intelligent dashboard.",
  },
  {
    number: 3,
    title: "Enjoy Clarity",
    description: "Focus on what matters with AI summaries and priority highlights.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white [background:linear-gradient(to_bottom_right,white,rgb(203_213_225),rgb(148_163_184))] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent] text-balance">
            Get started in seconds
          </h2>
          <p className="mt-4 text-lg text-slate-400 text-pretty">
            Effortlessly streamline your email workflow with MailFusion.
          </p>
        </div>
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12">
            <div className="absolute top-8 left-0 w-full h-0.5 hidden md:block">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            </div>
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex items-center justify-center size-16 rounded-full bg-slate-800 border-2 border-blue-500/30 text-blue-300 font-bold text-xl shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  {step.number}
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-slate-400 text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
