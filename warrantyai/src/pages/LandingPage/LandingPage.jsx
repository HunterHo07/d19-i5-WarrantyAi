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
import ScanningEffect from '../../components/animations/ScanningEffect';
import WarrantyTimeline from '../../components/animations/WarrantyTimeline';

import { warranties } from '../../data/warranties';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const pricingRef = useRef(null);
  const featuresRef = useRef(null);
  const faqRef = useRef(null);
  
  // Sample warranties for demo
  const sampleWarranties = warranties.slice(0, 3);
  
  useEffect(() => {
    // Animate the pricing section
    if (pricingRef.current) {
      const pricingCards = pricingRef.current.querySelectorAll('.pricing-card');
      
      gsap.fromTo(
        pricingCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: pricingRef.current,
            start: 'top 80%',
          },
        }
      );
    }
    
    // Animate the features section
    if (featuresRef.current) {
      const features = featuresRef.current.querySelectorAll('.feature-item');
      
      gsap.fromTo(
        features,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
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
    
    // Animate the FAQ section
    if (faqRef.current) {
      const faqs = faqRef.current.querySelectorAll('.faq-item');
      
      gsap.fromTo(
        faqs,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: faqRef.current,
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
        <ParticleBackground color="#0EA5E9" count={50} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AnimatedText
                text="Never Lose Track of Your Warranties Again"
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                tag="h1"
              />
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                WarrantyAI uses advanced AI to automatically track, manage, and remind you of product warranties. Save time, money, and frustration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/demo">
                  <Button variant="primary" size="lg" magnetic>
                    Try for Free
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Watch Demo Video
                </Button>
              </div>
              
              <div className="mt-8 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg
                  className="h-5 w-5 text-primary-500 mr-2"
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
                <span>No credit card required</span>
                
                <svg
                  className="h-5 w-5 text-primary-500 mx-2"
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
                <span>Free plan available</span>
                
                <svg
                  className="h-5 w-5 text-primary-500 mx-2"
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
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-xl opacity-30 transform -rotate-6"></div>
              <Card className="relative p-6">
                <ScanningEffect
                  image="/assets/images/receipt-1.svg"
                  showExtractedData={false}
                />
              </Card>
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Features Section */}
      <Section background="gray" ref={featuresRef}>
        <div className="text-center mb-16">
          <AnimatedText
            text="Powerful Features"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to manage your warranties effectively
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: 'AI-Powered Extraction',
              description: 'Our advanced AI recognizes and extracts critical warranty information from receipts, invoices, and emails.',
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
            },
            {
              title: 'Unified Warranty Dashboard',
              description: 'View all your warranties in one place with a visual timeline, sorting options, and detailed information.',
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
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              ),
            },
            {
              title: 'Smart Notification System',
              description: 'Receive timely alerts before warranties expire, reminders for extended warranty opportunities, and maintenance notifications.',
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              ),
            },
            {
              title: 'Claim Assistant',
              description: 'Step-by-step guidance through the claim process with auto-filled forms and all required documentation at your fingertips.',
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
            },
            {
              title: 'Secure Storage',
              description: 'All your warranty documents and receipts are securely stored in the cloud, accessible whenever you need them.',
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
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              ),
            },
            {
              title: 'Family Sharing',
              description: 'Share warranty information with family members or colleagues to ensure everyone has access when needed.',
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
          ].map((feature, index) => (
            <div key={index} className="feature-item flex">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Timeline Demo Section */}
      <Section>
        <div className="text-center mb-16">
          <AnimatedText
            text="Visual Warranty Timeline"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See all your warranties at a glance with our intuitive timeline view
          </p>
        </div>
        
        <Card className="p-6">
          <WarrantyTimeline warranties={sampleWarranties} />
        </Card>
      </Section>
      
      {/* Pricing Section */}
      <Section background="gray" ref={pricingRef}>
        <div className="text-center mb-16">
          <AnimatedText
            text="Simple, Transparent Pricing"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the plan that's right for you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <Card className="pricing-card p-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Free
              </h3>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                $0
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Perfect for getting started
              </p>
            </div>
            
            <ul className="space-y-3 mb-6">
              {[
                'Up to 10 warranties',
                'Basic reminders',
                'Manual uploads',
                'Standard support',
                '1 device',
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="outline" className="w-full">
              Get Started
            </Button>
          </Card>
          
          {/* Premium Plan */}
          <Card
            className="pricing-card p-6 relative border-2 border-primary-500 dark:border-primary-400"
            hover="glow"
          >
            <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
              POPULAR
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Premium
              </h3>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                $4.99
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Or $49.99/year (save 17%)
              </p>
            </div>
            
            <ul className="space-y-3 mb-6">
              {[
                'Unlimited warranties',
                'Advanced AI extraction',
                'Email integration',
                'Claim assistance',
                'Cloud backup',
                'Priority support',
                'Up to 3 devices',
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="primary" className="w-full" magnetic>
              Start Free Trial
            </Button>
          </Card>
          
          {/* Family Plan */}
          <Card className="pricing-card p-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Family
              </h3>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                $7.99
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Or $79.99/year (save 17%)
              </p>
            </div>
            
            <ul className="space-y-3 mb-6">
              {[
                'All Premium features',
                'Up to 5 users',
                'Shared warranty dashboard',
                'Family member permissions',
                'Unlimited devices',
                'Premium support',
                'Early access to new features',
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="outline" className="w-full">
              Start Free Trial
            </Button>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need a solution for your business?
          </p>
          <Button variant="secondary">
            View Business Plans
          </Button>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section ref={faqRef}>
        <div className="text-center mb-16">
          <AnimatedText
            text="Frequently Asked Questions"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Got questions? We've got answers
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {[
            {
              question: 'How does WarrantyAI extract warranty information?',
              answer: 'WarrantyAI uses advanced AI and machine learning algorithms to scan and analyze receipts, invoices, and warranty documents. It automatically identifies and extracts key information such as product details, purchase date, warranty duration, and terms.',
            },
            {
              question: 'Can I use WarrantyAI on multiple devices?',
              answer: 'Yes! The Free plan allows usage on 1 device, the Premium plan supports up to 3 devices, and the Family plan offers unlimited devices for up to 5 users. Your warranty data syncs seamlessly across all your devices.',
            },
            {
              question: 'Is my warranty information secure?',
              answer: 'Absolutely. We use bank-level encryption to protect your data both in transit and at rest. Your privacy is our priority, and we never sell your data to third parties. You can export or delete your data at any time.',
            },
            {
              question: 'What happens when a warranty is about to expire?',
              answer: 'WarrantyAI sends you timely notifications before your warranties expire. You can customize when and how you receive these alerts (email, push notifications, or in-app). This ensures you never miss a claim window again.',
            },
            {
              question: 'Can I share warranties with family members?',
              answer: 'Yes! Our Family plan allows you to share warranties with up to 5 family members. You can control permissions and decide which warranties are shared with specific family members.',
            },
            {
              question: 'Is there a limit to how many warranties I can store?',
              answer: 'The Free plan allows up to 10 warranties. Premium and Family plans offer unlimited warranty storage, so you can track all your products in one place.',
            },
          ].map((faq, index) => (
            <div key={index} className="faq-item mb-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="aurora" className="text-white">
        <div className="text-center">
          <AnimatedText
            text="Start Managing Your Warranties Today"
            className="text-3xl md:text-4xl font-bold mb-6"
            tag="h2"
          />
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of users who have transformed how they manage warranties. Try WarrantyAI for free and see the difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/demo">
              <Button
                variant="accent"
                size="lg"
                magnetic
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Get Started for Free
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default LandingPage;
