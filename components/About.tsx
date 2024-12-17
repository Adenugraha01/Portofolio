import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About Me</h2>
        <Card className="bg-gray-700">
          <CardContent className="prose prose-invert max-w-none p-6 text-justify">
            <p>
              Halo! Saya Ade Nugraha, seorang lulusan Universitas Islam Nusantara dengan minat dan keahlian di bidang Front-End Development. Sebagai Front-End Developer Junior, saya memiliki keterampilan dalam membangun antarmuka pengguna yang responsif, menarik, dan fungsional menggunakan teknologi seperti HTML, CSS, JavaScript, dan framework modern seperti React atau Bootstrap.
            </p>
            <p>
              Saya selalu bersemangat untuk belajar hal baru, menghadapi tantangan teknis, dan memberikan solusi kreatif untuk meningkatkan pengalaman pengguna dalam sebuah aplikasi atau website.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

