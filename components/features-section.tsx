const features = [
  {
    iconName: "link",
    title: "Multi-Account Sync",
    description:
      "Securely connect unlimited Gmail accounts. Switch between inboxes with a single click, without ever logging out.",
  },
  {
    iconName: "auto_awesome",
    title: "AI-Powered Summaries",
    description:
      "Leverage the power of Gemini to get instant, concise summaries of long emails and threads. Understand the gist without the noise.",
  },
  {
    iconName: "move_to_inbox",
    title: "Unified Priority Inbox",
    description:
      "See all your mail in a single, streamlined inbox. Our smart algorithm highlights the most important messages so you can focus.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-slate-950/20" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-300 text-balance">
            Everything you need, nothing you don't
          </h2>
          <p className="mt-4 text-lg text-slate-400 text-pretty">
            MailFusion helps you stay on top of your emails with powerful, intuitive features designed for modern
            productivity.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-blue-300 text-4xl">{feature.iconName}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
