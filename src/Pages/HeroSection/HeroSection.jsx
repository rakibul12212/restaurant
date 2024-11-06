import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-red-700 text-white py-20 text-center relative">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Taste the Authentic Saudi Cuisine</h1>
          <p className="mb-8">Among the best Saudi chefs in the world, serving you something beyond flavor.</p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded">Explore Menu</button>
        </div>
      </section>
    );
};

export default HeroSection;