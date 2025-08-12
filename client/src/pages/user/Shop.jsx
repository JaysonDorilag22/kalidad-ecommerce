import React, { useState } from 'react'

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 1000])

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'electronics', name: 'Electronics', count: 8 },
    { id: 'fashion', name: 'Fashion', count: 6 },
    { id: 'home', name: 'Home & Garden', count: 5 },
    { id: 'beauty', name: 'Beauty', count: 3 },
    { id: 'sports', name: 'Sports', count: 2 }
  ]

  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 299,
      originalPrice: 399,
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 128,
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: 'Premium Cotton T-Shirt',
      price: 49,
      originalPrice: 79,
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 89,
      isNew: false,
      isSale: true
    },
    {
      id: 3,
      name: 'Smart Watch Series 9',
      price: 599,
      originalPrice: null,
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 256,
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: 'Luxury Skincare Set',
      price: 149,
      originalPrice: 199,
      category: 'beauty',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 67,
      isNew: false,
      isSale: true
    },
    {
      id: 5,
      name: 'Modern Floor Lamp',
      price: 199,
      originalPrice: null,
      category: 'home',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      rating: 4.3,
      reviews: 45,
      isNew: false,
      isSale: false
    },
    {
      id: 6,
      name: 'Running Shoes Pro',
      price: 179,
      originalPrice: 229,
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 134,
      isNew: false,
      isSale: true
    },
    {
      id: 7,
      name: 'Wireless Charging Pad',
      price: 79,
      originalPrice: null,
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
      rating: 4.4,
      reviews: 92,
      isNew: true,
      isSale: false
    },
    {
      id: 8,
      name: 'Designer Handbag',
      price: 399,
      originalPrice: 499,
      category: 'fashion',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 156,
      isNew: false,
      isSale: true
    }
  ]

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  )

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative overflow-hidden rounded-t-xl">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
              NEW
            </span>
          )}
          {product.isSale && (
            <span className="bg-danger text-white text-xs font-semibold px-2 py-1 rounded-full">
              SALE
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          {product.originalPrice && (
            <span className="text-sm font-semibold text-danger">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-600 transition-all duration-200 transform hover:scale-[1.02]">
          Add to Cart
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Shop</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover premium quality products carefully curated for you
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-primary text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Sort By</h3>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-primary"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <div className="flex gap-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-primary to-primary-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Load More Products
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}