'use client'

import { Flame, Instagram, Linkedin, Star } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function LandingPage() {
  const [, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Flame className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-2xl font-bold text-orange-500" style={{color:'#f85e44'}}>Flamme</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-orange-500">Home</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Flamme AI</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Blog</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">FAQ</a>
            <button className="px-4 py-2 rounded-full transition duration-300"
  style={{ backgroundColor: '#f85e44', color: 'white' }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#d64d39')}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f85e44')}
>
  Get Flamme App
</button>

          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
              Connect with your Partner Everyday!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Grow your love by engaging daily with your partner with personalized guidance, expert recommended questions and fun games.
            </p>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                <Image src="/assets/images/app_store.png" alt="App Store" width={150} height={200} className="mr-2" />
               
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                <Image src="/assets/images/download.png" alt="Google Play" width={150} height={2} className="mr-2" />
              
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image src="/webp/hero.webp" alt="App Screenshot" width={600} height={600} className="rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Featured On Section */}
        <section className="bg-gray-50 py-16">
          
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              
              <span className="text-orange-500" style={{color: '#f85e44'}}>Featured</span> <span className="text-gray-800">on</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              <Image src="/webp/tech_crunch.webp" alt="TechCrunch" width={150} height={50} className="mx-auto" />
              <Image src="/webp/digital_frontier.webp" alt="Digital Frontier" width={150} height={50} className="mx-auto" />
              <Image src="/webp/guardian.webp" alt="The Guardian" width={150} height={50} className="mx-auto" />
              <Image src="/webp/gdi.webp" alt="GDI" width={150} height={50} className="mx-auto" />
              <Image src="/webp/nyw.webp" alt="New York Weekly" width={150} height={50} className="mx-auto" />
              <Image src="/webp/harvard.webp" alt="The Harvard Crimson" width={150} height={50} className="mx-auto" />
            </div>
          </div>
        </section>

        {/* Experience the Flamme Connection Section */}
        <section>
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-3xl p-8 text-white" style={{background: '#f1e6e6'}}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="bg-white rounded-lg p-4 mb-4 md:mb-0">
            <img
              src="/assets/images/girl.jpg"
              alt="Girl placeholder"
              className="w-32 h-32 object-cover"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/assets/images/fire1.png"
              alt="Fire illustration placeholder"
              className="w-40 h-40 object-cover"
            />
          </div>
          <div className="bg-white rounded-lg p-4">
            <img
              src="/webp/boy.webp"
              alt="Boy placeholder"
              className="w-32 h-32 object-cover"
            />
          </div>
        </div>
        <h2 className="text-4xl font-bold text-center mb-12" style={{color:'black'}}>
              Experience the <span className="text-orange-500" style={{color: '#f85e44'}}>Flamme</span> connection 🔥?
            </h2>
        <p className="text-center text-lg" style={{color:'black'}}>
          Bring the spark back to your relationship with our innovative app
          designed for couples.
        </p>
      </div>
    </div>
        </section>

        {/* Ready to take your Relationship to the next level? Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
          <Image 
            src="/webp/couple1.webp" 
            alt="Couple indoors" 
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="relative aspect-square rounded-3xl overflow-hidden mb-8">
            <Image 
              src="/webp/couple2.webp" 
              alt="Couple with rainbow" 
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image 
              src="/webp/couple3.webp" 
              alt="Couple at sunset" 
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center max-w-2xl mx-auto">
        <h3 className="text-lg text-gray-700">
          Flamme is an app for couples who feel disconnected due to busy work schedules or long distance, helping them connect better with gamified healthy habits and an AI coach.
        </h3>
      </div>
    </section>

        {/* Founder and App Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
              <div>
                <h3 className="text-4xl font-bold text-orange-500" style={{color:'#f85e44'}}>500+</h3>
                <p className="text-xl text-gray-600">Discovery Questions</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-orange-500" style={{color:'#f85e44'}}>15K+</h3>
                <p className="text-xl text-gray-600">Happy Couples</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-orange-500" style={{color:'#f85e44'}}>2M+</h3>
                <p className="text-xl text-gray-600">Emotions Exchanged</p>
              </div>
            </div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{color: 'black'}}>
                Falling in <span className="text-orange-500"style={{color: '#f85e44'}}>love</span> is the easy part!
              </h2>
              <p className="text-xl text-gray-600">
                It is the <span className="font-semibold">staying in love</span> that needs work.
              </p>
            </div>
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-3xl p-8 text-white" style={{background: '#f85e44'}}>
              <div className="flex flex-col md:flex-row items-center" >
                <div className="md:w-3/4 mb-8 md:mb-0 md:pr-8">
                  <p className="mb-4">
                    That iss why we are dedicated to helping you cultivate a happy and long lasting relationship by offering tools and resources which aid in actively shifting your mindset and pursuing activities to strengthen your relationship - We call it Relationship Wellness!
                  </p>
                  <p className="mb-8">
                    And Relationship Wellness isn not just for couples with issues—just like gyms aren npt only for those out of shape. Every couple should practice relationship wellness, and Flamme makes it easy and fun!
                  </p>
                  <button className="bg-white text-orange-500 px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300">
                    Free Trial: Love is on Us!
                  </button>
                </div>
                <div className="md:w-1/4 text-center">
                  <Image src="/webp/ankit.webp" alt="Ankit Nayal" width={150} height={150} className="rounded-full mx-auto mb-4" />
                  <p className="font-semibold">Ankit Nayal</p>
                  <p>Flamme Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How we add value Section */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4" style={{color: 'black'}}>
              How we add <span className="text-orange-500" style={{color: '#f85e44'}}>value</span> to your relationship?
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              We provide the tools. You and your partner commit to using them and reaping the benefits.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4" style={{color: '#f85e44'}}>Daily Questions</h3>
                <p className="text-gray-600 mb-4">
                  Our expertly crafted questions spark meaningful conversations, helping you and your partner explore the deeper layers of your relationship, fostering understanding and connection.
                </p>
                <Image src="/webp/question.webp" alt="Daily Questions" width={300} height={150} className="rounded-lg shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4" style={{color: '#f85e44'}}>Relationship Tools</h3>
                <p className="text-gray-600 mb-4">
                  Strengthen your bond with interactive quizzes designed to enhance your knowledge of each other, habit-building exercises, and creative ideas for quality time together.
                </p>
                <Image src="/webp/Relationship_Tools.webp" alt="Relationship Tools" width={300} height={150} className="rounded-lg shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4" style={{color: '#f85e44'}}>Engagement Features</h3>
                <p className="text-gray-600 mb-4">
                Stay connected effortlessly with our quick engagement features. Share how you you are feeling, send fun emojis, and react to your partner updates. These small yet meaningful interactions keep the love flowing and the connection strong.                </p>
                <Image src="/webp/engagement_feat.webp" alt="Engagement Features" width={300} height={150} className="rounded-lg shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4" style={{color: '#f85e44'}}>AI Love Coach</h3>
                <p className="text-gray-600 mb-4">
                  Get personalized advice and insights from our AI-powered relationship coach. It analyzes your interactions and provides tailored suggestions to help you navigate challenges and strengthen your bond.
                </p>
                <div className="flex justify-center">
                  <div className="relative">
                    <Image src="/webp/flamme.webp" alt="AI Love Coach" width={300} height={150} className="rounded-lg shadow-lg" />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Flammers say about us? Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12" style={{color: 'black'}}>
              What <span className="text-orange-500" style={{color: '#f85e44'}}>Flammers</span> say about us?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Emily & Mario", review: "Flamme has truly transformed our relationship! The daily questions spark such meaningful conversations.",image:"/webp/emily.webp" },
                { name: "Yingzi & Jack", review: "The AI coach provides incredibly insightful advice. It is like having a relationship expert on call 24/7!",image:"/webp/margo.webp"  },
                { name: "Susan & Tiago", review: "We love the emotional tracking feature. It is helped us understand and support each other so much better.",image:"/webp/susan.webp"  }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg" style={{color: 'black'}}>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.review}</p>
                  <div className="flex items-center">
                    <Image src={testimonial.image} alt={testimonial.name} width={40} height={40} className="rounded-full mr-3" />
                    <span className="font-semibold">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Let's start mingling Section */}
        <section className="py-16 bg-gradient-to-r from-orange-400 to-orange-500" style={{background:'white'}}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8" style={{color:'black'}}>
              Lets start <span className="text-orange-500" style={{color: '#f85e44'}}>mingling</span>
            </h2>
            <p className="text-xl text-white mb-8">Download the App Now</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
              <Image src="/assets/images/app_store.png" alt="App Store" width={150} height={200} className="mr-2" />

                
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
              <Image src="/assets/images/download.png" alt="Google Play" width={150} height={2} className="mr-2" />
              </button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4" style={{color:'black'}}>
              Have you read our <span className="text-orange-500" style={{color:'#f85e44'}}>blogs</span> yet?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { title: "The Evolution of Love Stories", image: "/webp/blog1.webp" },
                { title: "The True Cost of Divorce: Emotional and Financial Burdens You...", image: "/webp/blog2.webp" },
                { title: "Paired vs. Flamme vs. Agape: Top Couples Apps Reviewed", image: "/webp/blog3.webp" }
              ].map((blog, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image src={blog.image} alt={blog.title} width={300} height={200} className="w-full" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2" style={{color:'black'}}>{blog.title}</h3>
                    <a href="#" className="text-orange-500 hover:underline" style={{color:'#f85e44'}}>Read more</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 px-4" style={{color:'black'}}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <Flame className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-2xl font-bold text-orange-500" style={{color:'#f85e44'}}>Flamme</span>
          </div>
          <div>
            
          </div>
                   <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                <Image src="/assets/images/app_store.png" alt="App Store" width={150} height={200} className="mr-2" />
               
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                <Image src="/assets/images/download.png" alt="Google Play" width={150} height={2} className="mr-2" />
              
              </button>
            </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">About</h3>
          <ul className="space-y-2 text-sm">
            <li>Press</li>
            <li>Careers</li>
            <li>About Us</li>
            <li>Romantic AI Q&A</li>
            <li>Dates for Couples</li>
            <li>Games for Couples</li>
            <li>Questions for Couples</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Writings</h3>
          <ul className="space-y-2 text-sm">
            <li>Research</li>
            <li>Date Ideas</li>
            <li>Couple Tech</li>
            <li>Love Musings</li>
            <li>Relationship Advice</li>
            <li>Questions for Couples</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>Support</li>
            <li>Disclaimer</li>
            <li>Contact Us</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Data Deletion Request</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-8 flex justify-between items-center">
        <p className="text-sm text-gray-500">©2024 Flamme Inc.</p>
        <div className="flex space-x-4">
          <h3 className="font-bold">Social</h3>
          <Instagram size={24} />
          <Linkedin size={24} />
        </div>
      </div>
    </footer>
    
    </div>
  )
  
}