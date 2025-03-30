"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <RecipesSection />
      <CtaSection />
      <FeaturesSection />
    </main>
  )
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-gray-900/90 backdrop-blur-sm">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-yellow-400">
          <Image src="/logo.svg" alt="NutriVision Logo" width={120} height={30} className="h-8 w-auto" />
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
          About
        </Link>
        <Link href="#plans" className="text-gray-300 hover:text-white transition-colors">
          Plans
        </Link>
        <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
          Features
        </Link>
      </div>
      <Link
        href="#contact"
        className="px-4 py-1.5 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-colors"
      >
        Contact
      </Link>
    </nav>
  )
}

function AnimatedSection({ children, className = "" }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 md:px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <AnimatedSection className="z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-400">NutriVision</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            An <span className="text-yellow-400">AI-powered</span> web application that revolutionizes the way users
            interact with food. With its cutting-edge technology at the forefront, NutriVision allows for instant
            ingredient recognition, recipes, and nutrition insights.
          </p>
          <Link
            href="#try-now"
            className="inline-block px-6 py-3 bg-yellow-500 text-gray-900 font-medium rounded-md hover:bg-yellow-400 transition-colors"
          >
            Try now
          </Link>
        </AnimatedSection>

        <AnimatedSection className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Food plate"
              width={500}
              height={400}
              className="rounded-lg shadow-2xl object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="absolute -bottom-16 -left-8 z-0 hidden md:block"
          >
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Fresh vegetables"
              width={300}
              height={200}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-800">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-yellow-400">How it works</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                Whether you're craving a small snack or a large feast, we've got you covered! Provide us with the
                ingredients you have and we'll supply you a list of delicious, healthy, and easy-to-make meals.
              </p>

              <p className="text-lg">
                On a <span className="text-yellow-400">diet</span>? Don't worry, we still got you covered! Our
                state-of-the-art AI allows us to provide personalized recipes, along with nutritional information for
                every meal given. Just snap a quick <span className="text-blue-400">photo</span> and upload it!
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/placeholder.svg?height=350&width=450"
                alt="Food ingredients"
                width={450}
                height={350}
                className="rounded-lg shadow-xl mx-auto"
              />
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function RecipesSection() {
  const recipes = [
    {
      id: 1,
      title: "Roasted steak cooked to delicious perfection",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      id: 2,
      title: "Spaghetti with fresh tomato sauce",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      id: 3,
      title: "Salad with fresh, organic ingredients",
      image: "/placeholder.svg?height=250&width=250",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-900">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12">Previously generated recipes...</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {recipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">{recipe.title}</h3>
                  <button className="text-sm text-gray-300 hover:text-white flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-indigo-900">
      <div className="container mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Start looking out for your health, now.</h2>

          <Link
            href="#try-now"
            className="inline-block px-6 py-3 bg-yellow-500 text-gray-900 font-medium rounded-md hover:bg-yellow-400 transition-colors"
          >
            Try now
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Healthier diet, happier life",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      title: "More nutrition, easier weight loss",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      title: "Unique and delicious food",
      icon: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-900">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={feature.icon || "/placeholder.svg"}
                  alt={feature.title}
                  width={60}
                  height={60}
                  className="text-yellow-400"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-400">Explore...</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

