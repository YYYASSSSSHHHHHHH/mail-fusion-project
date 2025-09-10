import { StarIcon } from "@/components/icons/star-icon"

const testimonials = [
  {
    rating: 5,
    text: "MailFusion has been a game-changer for managing my freelance and personal emails. The AI summaries save me at least an hour a day.",
    author: "Sarah L.",
    role: "Freelance Designer",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCL9a3y7wb-73sbE12obT6vpwOmYdYnn3jVat_8f88PS82RvKOrS6lIB3neZ1aHfJleFBmMFBmfBTSu4s_9_XPVhrgg8k2bCAOUxtbQ-g7I6mTE-zTKYA8DGEW1u_3EPlZBAMYJu6YvqHHtXS3Z-_koGdKa5RaLAWb7wpx-mSAXgiUK0VkXgYw-tYdRlMqBlnMuPUxpxp5fzRBcAmaPxyR-ep6yOYe13mhPIkd05W0A5RXTTeH0wv8pjPNktJ2wIe0TUifHNBqkxzkU",
  },
  {
    rating: 5,
    text: "As a founder, I'm drowning in emails. The priority inbox is brilliant—it surfaces exactly what I need to see. Highly recommended!",
    author: "Michael B.",
    role: "Startup Founder",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCw_xF08vlo4BE2jSCJrUH_fgqJ4_A1122NTCAh7rpVSS5sUs1ZAmHzuN_YGDTRk59ek0JjuVw9z1nMJdzNA6896Uo4voJ3cFqvgAEcycTdQuRYitOGdpSxPbnrD30RoTWPfNQ_1G719gzYWEaMKB3btgu18D33K_LlPQQ7JweGDyhYY3TSQVDJXqsQcY85ILMIaexgMDQzYtHBmPHGjhmK6J86Z4xBHWzm4b84tuZBcudj2Qbfo7KhB6ZGwlnrwQ-JDh3ZwuXeFehK",
  },
  {
    rating: 5,
    text: "Finally, a unified inbox that looks as good as it works. The dark mode is gorgeous and the interface is incredibly intuitive.",
    author: "Jessica T.",
    role: "Product Manager",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ilhJo2E_C8MZi5IjDjh_pBsF_M8e6OWQnVjmvsvimC60ft3MmbGNUwGFq04t2xx0DAHeOL2Kyt3_BW1G2lpGAYyXndTEesNK6hoAJkp17hrtctM0lqudJ5PG1ufJSyiIanvMsfcdW0Zg7XW8sGCbgDSQjcpGLRIgp0jN1t0I8K8hLbeJlKDuyFsQixlkdy0HqDutNwYw599V846hUfH-9qmClRdxlAoqPGC6trvCKi37BshqRSC0n8nOWFX3ZzXX13_emDOVK3_2",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-slate-950/20" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white text-balance">
            Loved by professionals worldwide
          </h2>
          <p className="mt-4 text-lg text-slate-400 text-pretty">
            Don't just take our word for it. Here's what our users are saying about MailFusion.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1a1d21] border border-[#2a2e33] rounded-2xl p-6 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center text-yellow-400 gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} className="text-base" />
                  ))}
                </div>
                <p className="mt-4 text-slate-300">{testimonial.text}</p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <img
                  alt={`${testimonial.author} photo`}
                  className="size-12 rounded-full object-cover"
                  src={testimonial.avatar || "/placeholder.svg"}
                />
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
