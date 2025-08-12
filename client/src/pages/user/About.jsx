import React from 'react'

export default function About() {
  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '10K+', label: 'Products' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Customer Satisfaction' }
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Quality First',
      description: 'We never compromise on quality. Every product is carefully selected and tested to meet our high standards.'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Lightning-fast shipping with real-time tracking. Get your orders delivered when you need them.'
    },
    {
      icon: '💝',
      title: 'Customer Care',
      description: '24/7 customer support ready to help. Your satisfaction is our top priority.'
    },
    {
      icon: '🔒',
      title: 'Secure Shopping',
      description: 'Shop with confidence. Your data and payments are protected with enterprise-grade security.'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332ef04?w=400&h=400&fit=crop&crop=face',
      description: 'Visionary leader with 10+ years in e-commerce'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Operations expert ensuring smooth deliveries'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Dedicated to exceptional customer experiences'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-600 to-accent mx-4 my-8 rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10"></div>
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 px-6 py-16 lg:px-12 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              About
              <span className="block bg-gradient-to-r from-secondary via-secondary-300 to-white bg-clip-text text-transparent">
                KALIDAD
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              We're passionate about bringing you premium quality products with exceptional service. 
              Your satisfaction is our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019, KALIDAD started with a simple mission: to make high-quality products 
                  accessible to everyone. What began as a small startup has grown into a trusted e-commerce 
                  platform serving thousands of customers worldwide.
                </p>
                <p>
                  We believe that quality shouldn't be a luxury. That's why we work directly with 
                  manufacturers and carefully curate every product in our catalog. From electronics 
                  to fashion, home goods to beauty products - we ensure everything meets our strict 
                  quality standards.
                </p>
                <p>
                  Today, we're proud to be one of the fastest-growing e-commerce platforms, but our 
                  commitment remains the same: delivering exceptional products with outstanding service.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl">📦</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-2xl">
                ✨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4 text-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind KALIDAD who work tirelessly to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              To revolutionize online shopping by providing exceptional quality products, 
              outstanding customer service, and a seamless shopping experience that exceeds expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Shop Now
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-all duration-200 transform hover:scale-105">
                Join Our Journey
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}