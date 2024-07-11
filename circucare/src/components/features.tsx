import React from 'react';
import { Clock, Repeat, Activity } from 'lucide-react';

const Features = () => {
  const features = [
    {
      name: 'Continuous Monitoring',
      description: 'Our devices provide 24/7 real-time monitoring for comprehensive patient care.',
      icon: Activity,
    },
    {
      name: 'High Reproducibility',
      description: 'Consistent and reliable results across multiple scans and users.',
      icon: Repeat,
    },
    {
      name: 'Time Saving',
      description: 'Streamlined processes that significantly reduce diagnosis and treatment times.',
      icon: Clock,
    },
  ];

  return (
    <div className="bg-fountain-blue py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Key Features
          </h2>
        </div>
        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-steel-blue">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                <dd className="mt-2 ml-16 text-base text-gray-100">{feature.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;