import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAssetPath } from '../../utils/paths';
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

const HomePage = () => {
  const timelineRef = useRef(null);
  const stepsRef = useRef(null);
  const comparisonRef = useRef(null);

  // Sample warranties for demo
  const sampleWarranties = warranties.slice(0, 3);

  useEffect(() => {
    // Animate the steps section
    if (stepsRef.current) {
      const steps = stepsRef.current.querySelectorAll('.step-item');

      gsap.fromTo(
        steps,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Animate the comparison section
    if (comparisonRef.current) {
      const columns = comparisonRef.current.querySelectorAll('.comparison-column');

      gsap.fromTo(
        columns,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: comparisonRef.current,
            start: 'top 70%',
          },
        }
      );
    }
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section
        fullWidth
        padding="none"
        className="relative min-h-screen flex items-center overflow-hidden"
        background="gradient"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-800 to-secondary-900 opacity-90"></div>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${getAssetPath('assets/images/grid-pattern.svg')})`, opacity: 0.2 }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedText
                  text="Never Miss a Warranty Claim Again"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                  tag="h1"
                />

                <p className="text-xl text-gray-100 mb-8">
                  WarrantyAI automatically tracks, manages, and reminds you of product warranties by scanning receipts and documents.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/demo">
                    <Button
                      variant="accent"
                      size="lg"
                      magnetic
                      className="bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold border-2 border-white"
                    >
                      Try Instantly
                    </Button>
                  </Link>
                  <Link to="/why-us">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white/10"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center relative"
            >
              <div className="relative w-full max-w-md -mt-16">
                {/* Receipt Stack */}
                <motion.div
                  className="absolute top-0 -left-4 w-64 h-80 bg-white rounded-lg shadow-xl p-4 transform rotate-[-8deg] z-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="border-b-2 border-primary-200 pb-2 mb-2">
                    <div className="text-lg font-bold text-gray-800">Electronics Store</div>
                    <div className="text-xs text-gray-500">Receipt #A80392</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Smartphone X12</span>
                      <span className="text-sm font-medium">$899.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Protection Plan</span>
                      <span className="text-sm font-medium">$129.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Accessories</span>
                      <span className="text-sm font-medium">$49.99</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>$1,079.97</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.9, scale: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                      className="text-4xl font-bold text-green-500 border-4 border-green-500 rounded-lg px-3 py-1 shadow-lg"
                    >
                      PROTECTED
                    </motion.div>
                  </div>
                </motion.div>

                {/* Second Receipt */}
                <motion.div
                  className="absolute -top-6 left-4 w-64 h-80 bg-white rounded-lg shadow-xl p-4 transform rotate-[5deg] z-20"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="border-b-2 border-secondary-200 pb-2 mb-2">
                    <div className="text-lg font-bold text-gray-800">Home Appliances</div>
                    <div className="text-xs text-gray-500">Receipt #B72051</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Smart TV 55"</span>
                      <span className="text-sm font-medium">$1,299.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Extended Warranty</span>
                      <span className="text-sm font-medium">$199.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Installation</span>
                      <span className="text-sm font-medium">$79.99</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>$1,579.97</span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                  >
                    3 YEAR WARRANTY
                  </motion.div>
                </motion.div>

                {/* Scanning Effect */}
                <motion.div
                  className="absolute -top-10 left-12 w-64 h-80 bg-white rounded-lg shadow-xl p-4 z-30"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="border-b-2 border-accent-200 pb-2 mb-2">
                    <div className="text-lg font-bold text-gray-800">Tech World</div>
                    <div className="text-xs text-gray-500">Receipt #C45109</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Laptop Pro</span>
                      <span className="text-sm font-medium">$1,499.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Premium Care</span>
                      <span className="text-sm font-medium">$249.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Software Bundle</span>
                      <span className="text-sm font-medium">$99.99</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>$1,849.97</span>
                      </div>
                    </div>
                  </div>

                  {/* Scanning Animation */}
                  <motion.div
                    className="absolute inset-0 bg-primary-500/20 z-40 pointer-events-none"
                    initial={{ top: "0%" }}
                    animate={{
                      top: ["0%", "100%", "0%"],
                      opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "linear"
                    }}
                  >
                    <div className="h-1 w-full bg-primary-500"></div>
                  </motion.div>

                  {/* AI Processing Animation */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ delay: 2, duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <div className="bg-primary-900/80 rounded-lg p-4 text-white text-center">
                      <div className="text-lg font-bold mb-1">AI Processing</div>
                      <div className="text-sm">Extracting warranty information...</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section background="gray" ref={stepsRef}>
        <div className="text-center mb-16">
          <AnimatedText
            text="How WarrantyAI Works"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Three simple steps to never worry about warranties again
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="step-item p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
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
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Upload Your Receipt
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Simply take a photo of your receipt, invoice, or warranty document and upload it to WarrantyAI.
            </p>
          </Card>

          {/* Step 2 */}
          <Card className="step-item p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center mb-4">
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              AI Extracts Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our AI automatically identifies and extracts product details, purchase date, and warranty terms.
            </p>
          </Card>

          {/* Step 3 */}
          <Card className="step-item p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mb-4">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Get Timely Reminders
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Receive notifications before warranties expire and get guidance on how to make claims when needed.
            </p>
          </Card>
        </div>
      </Section>

      {/* Feature Preview Section */}
      <Section>
        <div className="text-center mb-16">
          <AnimatedText
            text="See WarrantyAI in Action"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience how easy it is to manage your warranties
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScanningEffect
              image="/assets/images/receipt-1.svg"
              className="max-w-md mx-auto"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Intelligent Receipt Scanning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our advanced AI technology automatically extracts key information from your receipts and warranty documents, including:
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Product name and model',
                'Purchase date and retailer',
                'Warranty duration and terms',
                'Serial numbers and unique identifiers',
                'Extended warranty information',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
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
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link to="/demo">
              <Button variant="primary" magnetic>
                Try the Demo
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section background="primary" ref={timelineRef}>
        <div className="text-center mb-16">
          <AnimatedText
            text="Track All Your Warranties in One Place"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Visual timeline of all your product warranties
          </p>
        </div>

        <Card className="p-6">
          <WarrantyTimeline warranties={sampleWarranties} />
        </Card>
      </Section>

      {/* Comparison Section */}
      <Section background="gray" ref={comparisonRef}>
        <div className="text-center mb-16">
          <AnimatedText
            text="Why Choose WarrantyAI"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See the difference our smart warranty assistant makes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Without WarrantyAI */}
          <Card className="comparison-column p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Without WarrantyAI
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                'Forgotten warranty periods',
                'Lost or faded receipts',
                'Missing claim opportunities',
                'Manual tracking in spreadsheets',
                'Scattered warranty information',
                'No reminders for expiring warranties',
                'Stressful claim process',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-red-500 mt-0.5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* With WarrantyAI */}
          <Card className="comparison-column p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                With WarrantyAI
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                'Automatic warranty tracking',
                'Secure digital receipt storage',
                'Never miss a valid claim',
                'All warranties in one dashboard',
                'Centralized information access',
                'Timely expiration alerts',
                'Guided claim assistance',
              ].map((item, index) => (
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
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 opacity-90"></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          <ParticleBackground color="#FFFFFF" count={30} speed={0.5} />
        </div>

        <div className="relative z-10 text-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimatedText
              text="Ready to Take Control of Your Warranties?"
              className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg"
              tag="h2"
            />
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white font-medium drop-shadow">
              Join thousands of users who never miss a warranty claim again. Try WarrantyAI today and experience the peace of mind that comes with organized warranty management.
            </p>
            <Link to="/demo">
              <Button
                variant="accent"
                size="xl"
                magnetic
                className="bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-600 hover:to-accent-700 shadow-xl hover:shadow-2xl transition-all duration-300 font-bold px-8 py-4 text-lg border-2 border-white"
              >
                Get Started for Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
