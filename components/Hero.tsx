import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saya.jpg-GBc5xAsW5AsTuT46OvV3leVgfo2h23.jpeg"
          alt="Ade Nugraha"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-8 border-4 border-blue-500 object-cover"
          priority
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Ade Nugraha
        </h1>
        <p className="text-xl sm:text-2xl mb-8 animate-fade-in-up">
          Front-End Developer
        </p>
        <Button className="animate-bounce" onClick={() => window.open('https://weatrack-capstone-rizkielfaniprs-projects.vercel.app/', '_blank')}>
          View My Work <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

