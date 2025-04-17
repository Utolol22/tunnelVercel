import Image from "next/image"

export function LiberationSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dégradé de fond */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5E6D3]/10 to-[#F5E6D3] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A1A1A]">Une nouvelle vie t'attend</h2>

          <div className="relative rounded-xl overflow-hidden shadow-xl mb-10">
            <Image
              src="/img/liberation.png"
              alt="Libération et nouvelle vie sans alcool"
              width={1200}
              height={800}
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F5E6D3]/30 to-transparent"></div>
          </div>

          <p className="text-xl text-[#2A2A2A] mb-6">
            Imagine-toi te réveiller chaque matin avec clarté, énergie et sérénité.
          </p>
          <p className="text-lg text-[#4A4A4A] mb-10">
            Sans regrets, sans honte, sans cette bataille constante contre toi-même.
            <br />
            C'est possible, et c'est plus accessible que tu ne le penses.
          </p>
        </div>
      </div>

      {/* Transition subtile vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-[#F5E6D3] to-[#F5E6D3] pointer-events-none"></div>
    </section>
  )
}
