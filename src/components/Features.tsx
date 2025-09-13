import React from 'react';
import { Film, Users, Heart, Star, Music, Coffee } from 'lucide-react';

const features = [
  {
    icon: <Film className="h-12 w-12" />,
    title: 'Premium Private Theaters',
    description: 'State-of-the-art projection and surround sound systems for an immersive experience.'
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: 'Intimate Celebrations',
    description: 'Perfect for small groups up to 20 people. Create memories with your closest friends and family.'
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: 'Romantic Ambiance',
    description: 'Specially designed lighting and decor to create the perfect romantic atmosphere.'
  },
  {
    icon: <Star className="h-12 w-12" />,
    title: 'Luxury Amenities',
    description: 'Premium seating, climate control, and personalized service for your comfort.'
  },
  {
    icon: <Music className="h-12 w-12" />,
    title: 'Custom Entertainment',
    description: 'Choose your own movies, music, and entertainment for a personalized experience.'
  },
  {
    icon: <Coffee className="h-12 w-12" />,
    title: 'Gourmet Refreshments',
    description: 'Delicious snacks, beverages, and custom cake options for your celebration.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Why Choose BINGE'N CELEBRATIONS?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
            >
              <div className="text-indigo-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}