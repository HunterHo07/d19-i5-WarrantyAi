import { useEffect, useRef, useState } from 'react';
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
import ScanningEffect from '../../components/animations/ScanningEffect';
import WarrantyTimeline from '../../components/animations/WarrantyTimeline';

import { warranties } from '../../data/warranties';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const ShowcasePage = () => {
  const [activeFeature, setActiveFeature] = useState('scan');
  const featuresRef = useRef(null);
  const showcaseRef = useRef(null);

  // Sample warranties for demo
  const sampleWarranties = warranties.slice(0, 3);

  // Features data
  const features = [
    {
      id: 'scan',
      title: 'AI Receipt Scanning',
      description: 'Upload receipts, invoices, or warranty documents and let our AI automatically extract all relevant warranty information.',
      image: '/assets/images/receipt-1.svg',
      component: (
        <ScanningEffect
          image="/assets/images/receipt-1.svg"
          className="max-w-md mx-auto"
        />
      ),
    },
    {
      id: 'dashboard',
      title: 'Warranty Dashboard',
      description: 'View all your warranties in one place with a visual timeline, sorting options, and detailed information.',
      image: null,
      component: (
        <Card className="p-4 max-w-md mx-auto">
          <WarrantyTimeline warranties={sampleWarranties} />
        </Card>
      ),
    },
    {
      id: 'notifications',
      title: 'Smart Notifications',
      description: 'Receive timely alerts before warranties expire, reminders for extended warranty opportunities, and maintenance notifications.',
      image: null,
      component: (
        <div className="max-w-md mx-auto space-y-4">
          {[
            {
              title: 'Warranty Expiring Soon',
              message: 'Your warranty for Smartphone Galaxy S23 expires in 30 days.',
              date: 'Dec 20, 2023',
              type: 'expiry',
            },
            {
              title: 'Maintenance Reminder',
              message: 'Schedule your 6-month maintenance check for Smart Refrigerator X7000.',
              date: 'Oct 22, 2023',
              type: 'maintenance',
            },
            {
              title: 'Warranty Extension Opportunity',
              message: 'Last chance to extend your warranty for Smart TV OLED 65".',
              date: 'Oct 25, 2023',
              type: 'extension',
            },
          ].map((notification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-lg border ${
                notification.type === 'expiry'
                  ? 'bg-accent-50 border-accent-200 dark:bg-accent-900/20 dark:border-accent-800'
                  : notification.type === 'maintenance'
                  ? 'bg-secondary-50 border-secondary-200 dark:bg-secondary-900/20 dark:border-secondary-800'
                  : 'bg-primary-50 border-primary-200 dark:bg-primary-900/20 dark:border-primary-800'
              }`}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {notification.title}
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {notification.date}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {notification.message}
              </p>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      id: 'claim',
      title: 'Claim Assistant',
      description: 'Step-by-step guidance through the claim process with auto-filled forms and all required documentation at your fingertips.',
      image: null,
      component: (
        <div className="max-w-md mx-auto">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-medium">1</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Select Product for Claim
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    UltraBook Pro X1
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-medium">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Describe the Issue
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Screen flickering and battery draining quickly
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-medium">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Warranty Information
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Valid until May 14, 2027
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-medium">4</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Contact Information
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Auto-filled from your profile
                  </p>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button variant="primary">Submit Claim</Button>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
  ];

  // Get current feature
  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  useEffect(() => {
    // Animate the features section
    if (featuresRef.current) {
      const featureItems = featuresRef.current.querySelectorAll('.feature-item');

      gsap.fromTo(
        featureItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Animate the showcase section
    if (showcaseRef.current) {
      const showcaseItems = showcaseRef.current.querySelectorAll('.showcase-item');

      gsap.fromTo(
        showcaseItems,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: showcaseRef.current,
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

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedText
              text="Product Showcase"
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              tag="h1"
            />

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore the powerful features of WarrantyAI that make warranty management effortless
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/demo">
                <Button variant="primary" size="lg" magnetic>
                  Try the Demo
                </Button>
              </Link>
              <Link to="/landing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Interactive Features Showcase */}
      <Section background="gray">
        <div className="text-center mb-16">
          <AnimatedText
            text="Interactive Features"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience our key features in action
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature Selector */}
          <div>
            <div className="space-y-4">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    activeFeature === feature.id
                      ? 'bg-primary-50 border border-primary-200 dark:bg-primary-900/20 dark:border-primary-800'
                      : 'bg-white hover:bg-gray-50 border border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700'
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <h3 className={`text-lg font-semibold mb-1 ${
                    activeFeature === feature.id
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Display */}
          <div>
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {currentFeature.title}
              </h3>
              {currentFeature.component}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Key Benefits Section */}
      <Section ref={showcaseRef}>
        <div className="text-center mb-16">
          <AnimatedText
            text="Key Benefits"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            How WarrantyAI transforms your warranty management experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Save Money',
              description: 'Never miss a valid warranty claim again. Our users save an average of $240 per year by claiming warranties they would have otherwise forgotten.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-primary-600 dark:text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
            },
            {
              title: 'Save Time',
              description: 'Eliminate manual tracking and searching for documents. Our AI automation saves you hours of tedious work managing warranties.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-secondary-600 dark:text-secondary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
            },
            {
              title: 'Reduce Stress',
              description: 'Know exactly when warranties expire and how to claim them. No more uncertainty or frustration when something breaks.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-accent-600 dark:text-accent-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
            },
          ].map((benefit, index) => (
            <Card
              key={index}
              className="showcase-item p-6 flex flex-col items-center text-center"
              delay={index * 0.1}
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section background="primary" ref={featuresRef}>
        <div className="text-center mb-16">
          <AnimatedText
            text="Real-World Use Cases"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            How our users are getting the most out of WarrantyAI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Home Electronics Management',
              description: 'Keep track of warranties for all your home electronics, from TVs and computers to kitchen appliances and smart home devices.',
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              ),
            },
            {
              title: 'Family Warranty Hub',
              description: 'Create a central hub for your family warranties, ensuring everyone has access to important warranty information when needed.',
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
            },
            {
              title: 'New Home Setup',
              description: 'When moving into a new home, easily track warranties for all new appliances, furniture, and home systems in one place.',
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              ),
            },
            {
              title: 'Small Business Equipment',
              description: 'Manage warranties for all your business equipment, from computers and printers to specialized machinery.',
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              ),
            },
          ].map((useCase, index) => (
            <Card
              key={index}
              className="feature-item p-6"
              delay={index * 0.1}
            >
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center">
                    {useCase.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 3D Demo Section */}
      <Section>
        <div className="text-center mb-16">
          <AnimatedText
            text="Visualize Your Warranties"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Interactive 3D visualization of your warranty management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 flex flex-col items-center text-center">
            <Scene3D
              modelType="receipt"
              height="200px"
              className="w-full mb-4"
              autoRotate
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Receipt Scanning
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Upload any receipt and our AI will automatically extract warranty information
            </p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center">
            <Scene3D
              modelType="document"
              height="200px"
              className="w-full mb-4"
              autoRotate
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Document Storage
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Securely store all your warranty documents in one place for easy access
            </p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center">
            <Scene3D
              modelType="shield"
              height="200px"
              className="w-full mb-4"
              autoRotate
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Warranty Protection
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get peace of mind knowing your warranties are protected and managed
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="aurora" className="text-white">
        <div className="text-center">
          <AnimatedText
            text="Ready to Transform Your Warranty Management?"
            className="text-3xl md:text-4xl font-bold mb-6"
            tag="h2"
          />
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of users who have simplified their warranty management with WarrantyAI. Try it today and experience the difference.
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
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ShowcasePage;
