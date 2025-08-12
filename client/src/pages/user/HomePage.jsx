import React from "react";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-600 to-accent mx-4 my-8 rounded-3xl">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10"></div>
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 px-6 py-20 lg:px-12 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">
                ✨ Premium Quality • Fast Delivery
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Discover
                <span className="block bg-gradient-to-r from-secondary via-secondary-300 to-white bg-clip-text text-transparent">
                  KALIDAD
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-medium text-white/90">
                  Excellence
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Shop premium products with unmatched quality. From electronics to fashion, 
              we deliver excellence to your doorstep with lightning-fast shipping.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group relative px-8 py-4 bg-white text-primary font-semibold rounded-2xl transition-all duration-300 hover:bg-gray-50 hover:scale-105 shadow-xl hover:shadow-2xl">
                <span className="relative z-10 flex items-center gap-2">
                  🛍️ Start Shopping
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <button className="group px-8 py-4 border-2 border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-white hover:text-primary hover:scale-105 shadow-lg">
                <span className="flex items-center gap-2">
                  📱 Browse Categories
                  <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">50K+</div>
                <div className="text-white/70 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
                <div className="text-white/70 text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                <div className="text-white/70 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-secondary rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
      </section>
    </div>
  );
}