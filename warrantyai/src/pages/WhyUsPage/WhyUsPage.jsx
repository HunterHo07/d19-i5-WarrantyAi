import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import AnimatedText from '../../components/animations/AnimatedText';
import ParticleBackground from '../../components/animations/ParticleBackground';
import Scene3D from '../../components/animations/Scene3D';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const WhyUsPage = () => {
  const featuresRef = useRef(null);
  const comparisonRef = useRef(null);
  
  useEffect(() => {
    // Animate the features section
    if (featuresRef.current) {
      const features = featuresRef.current.querySelectorAll('.feature-card');
      
      gsap.fromTo(
        features,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
          },
        }
      );
    }
    
    // Animate the comparison section
    if (comparisonRef.current) {
      const rows = comparisonRef.current.querySelectorAll('tr');
      
      gsap.fromTo(
        rows,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: comparisonRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section
        padding="lg"
        className="relative"
        background="transparent"
      >
        {/* Background Effects */}
        <ParticleBackground color="#8B5CF6" count={40} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AnimatedText
                text="Why Choose WarrantyAI"
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                tag="h1"
              />
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                We're revolutionizing warranty management with cutting-edge AI technology and a user-centric approach.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/demo">
                  <Button variant="primary" size="lg" magnetic>
                    Try the Demo
                  </Button>
                </Link>
                <Link to="/pitch">
                  <Button variant="outline" size="lg">
                    View Pitch Deck
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Scene3D
              modelType="document"
              height="400px"
              className="w-full max-w-md"
              autoRotate
            />
          </motion.div>
        </div>
      </Section>
      
      {/* Key Features Section */}
      <Section background="gray" ref={featuresRef}>
        <div className="text-center mb-16">
          <AnimatedText
            text="Our Competitive Advantages"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            What sets WarrantyAI apart from traditional warranty management solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Advanced AI Extraction',
              description: 'Our proprietary AI technology automatically extracts warranty information from various document types with industry-leading accuracy.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary-600 dark:text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              ),
              color: 'bg-primary-100 dark:bg-primary-900/30',
              textColor: 'text-primary-600 dark:text-primary-400',
            },
            {
              title: 'Unified Platform',
              description: 'A single source for all warranty information across brands and retailers, eliminating the need for multiple systems or manual tracking.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-secondary-600 dark:text-secondary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              ),
              color: 'bg-secondary-100 dark:bg-secondary-900/30',
              textColor: 'text-secondary-600 dark:text-secondary-400',
            },
            {
              title: 'Proactive Notifications',
              description: 'Smart alert system that notifies you before warranties expire, ensuring you never miss a claim window again.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-accent-600 dark:text-accent-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              ),
              color: 'bg-accent-100 dark:bg-accent-900/30',
              textColor: 'text-accent-600 dark:text-accent-400',
            },
            {
              title: 'Claim Assistance',
              description: 'Guided process for warranty claims with all necessary documentation automatically prepared and organized.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary-600 dark:text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
              color: 'bg-primary-100 dark:bg-primary-900/30',
              textColor: 'text-primary-600 dark:text-primary-400',
            },
            {
              title: 'No Manual Entry',
              description: 'Fully automated system requiring minimal user input, saving you time and reducing the risk of human error.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-secondary-600 dark:text-secondary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              ),
              color: 'bg-secondary-100 dark:bg-secondary-900/30',
              textColor: 'text-secondary-600 dark:text-secondary-400',
            },
            {
              title: 'Secure Cloud Storage',
              description: 'All your warranty documents and receipts are securely stored in the cloud, accessible whenever you need them.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-accent-600 dark:text-accent-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              ),
              color: 'bg-accent-100 dark:bg-accent-900/30',
              textColor: 'text-accent-600 dark:text-accent-400',
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="feature-card p-6 flex flex-col items-center text-center"
              delay={index * 0.1}
            >
              <div
                className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold ${feature.textColor} mb-2`}>
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Comparison Table Section */}
      <Section>
        <div className="text-center mb-16">
          <AnimatedText
            text="How We Compare"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See how WarrantyAI stacks up against other warranty management solutions
          </p>
        </div>
        
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full" ref={comparisonRef}>
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                    WarrantyAI
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Warranty Keeper
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Warrantify
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Manual Tracking
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                {[
                  {
                    feature: 'AI Data Extraction',
                    warrantyai: true,
                    warrantykeeper: false,
                    warrantify: false,
                    manual: false,
                  },
                  {
                    feature: 'Email Integration',
                    warrantyai: true,
                    warrantykeeper: false,
                    warrantify: true,
                    manual: false,
                  },
                  {
                    feature: 'Expiry Notifications',
                    warrantyai: true,
                    warrantykeeper: true,
                    warrantify: true,
                    manual: false,
                  },
                  {
                    feature: 'Claim Assistance',
                    warrantyai: true,
                    warrantykeeper: false,
                    warrantify: false,
                    manual: false,
                  },
                  {
                    feature: 'Document Storage',
                    warrantyai: true,
                    warrantykeeper: true,
                    warrantify: true,
                    manual: false,
                  },
                  {
                    feature: 'Mobile App',
                    warrantyai: true,
                    warrantykeeper: true,
                    warrantify: false,
                    manual: false,
                  },
                  {
                    feature: 'Family Sharing',
                    warrantyai: true,
                    warrantykeeper: false,
                    warrantify: false,
                    manual: true,
                  },
                  {
                    feature: 'Business Integration',
                    warrantyai: true,
                    warrantykeeper: false,
                    warrantify: false,
                    manual: false,
                  },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      {row.warrantyai ? (
                        <span className="text-primary-600 dark:text-primary-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      {row.warrantykeeper ? (
                        <span className="text-green-600 dark:text-green-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      {row.warrantify ? (
                        <span className="text-green-600 dark:text-green-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      {row.manual ? (
                        <span className="text-green-600 dark:text-green-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </Section>
      
      {/* Testimonials Section */}
      <Section background="primary">
        <div className="text-center mb-16">
          <AnimatedText
            text="What Our Users Say"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied users
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "WarrantyAI has saved me so much time and hassle. I used to lose track of warranties all the time, but now everything is organized in one place.",
              author: "Michael T.",
              role: "Tech Enthusiast",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              quote: "The AI extraction is mind-blowing! I just snap a photo of my receipt and it automatically pulls all the important warranty information.",
              author: "Sarah L.",
              role: "Small Business Owner",
              image: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              quote: "As someone who manages warranties for my entire family, WarrantyAI has been a game-changer. The reminders have already saved us money on claims.",
              author: "David K.",
              role: "Family Manager",
              image: "https://randomuser.me/api/portraits/men/67.jpg",
            },
          ].map((testimonial, index) => (
            <Card
              key={index}
              className="p-6"
              hover="lift"
              delay={index * 0.1}
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <svg
                    className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="aurora" className="text-white">
        <div className="text-center">
          <AnimatedText
            text="Ready to Experience the Difference?"
            className="text-3xl md:text-4xl font-bold mb-6"
            tag="h2"
          />
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of users who have transformed how they manage warranties. Try WarrantyAI today and see the difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/demo">
              <Button
                variant="accent"
                size="lg"
                magnetic
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Try the Demo
              </Button>
            </Link>
            <Link to="/landing">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WhyUsPage;
