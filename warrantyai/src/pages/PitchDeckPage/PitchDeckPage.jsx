import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import AnimatedText from '../../components/animations/AnimatedText';
import ParticleBackground from '../../components/animations/ParticleBackground';

const PitchDeckPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef([]);

  const slides = [
    {
      id: 'problem',
      title: 'The Problem',
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Every year, consumers lose billions in potential warranty claims due to:
          </p>
          <ul className="space-y-4">
            {[
              'Forgotten warranty periods and missed claim windows',
              'Lost or faded receipts and proof of purchase',
              'Scattered warranty information across emails, drawers, and digital files',
              'Complex and time-consuming claim processes',
              'No centralized system to track warranties across different brands and retailers',
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex items-start"
              >
                <svg
                  className="h-6 w-6 text-accent-500 mt-0.5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'solution',
      title: 'Our Solution',
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            WarrantyAI is an intelligent warranty assistant that automatically:
          </p>
          <ul className="space-y-4">
            {[
              'Extracts warranty information from receipts, invoices, product photos, and emails',
              'Organizes all warranties in one searchable, secure dashboard',
              'Sends timely alerts before warranties expire',
              'Guides users through claims with all necessary documentation',
              'Stores proof of purchase securely for when it is needed most',
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex items-start"
              >
                <svg
                  className="h-6 w-6 text-primary-500 mt-0.5 mr-3"
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
        </div>
      ),
    },
    {
      id: 'market',
      title: 'Market Opportunity',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                $1.73B
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Global warranty management market size (2022)
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                9.8%
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                CAGR from 2023 to 2030
              </p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                $3.64B
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Projected market size by 2030
              </p>
            </Card>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300">
            Key market trends driving growth:
          </p>
          <ul className="space-y-2">
            {[
              'Digital Transformation: Shift from paper to digital warranty management',
              'Mobile-First Approach: Increasing demand for mobile warranty management solutions',
              'AI Integration: Growing adoption of AI for automated data extraction and insights',
              'Sustainability: Consumer preference for extended product lifecycles through warranty utilization',
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-gray-700 dark:text-gray-300"
              >
                • {item}
              </motion.li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'business-model',
      title: 'Business Model',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Freemium Model
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Free Tier:</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Up to 10 warranties, basic reminders, manual uploads
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Premium Tier:</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    $4.99/month or $49.99/year - Unlimited warranties, advanced AI extraction, email integration, claim assistance, cloud backup
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Family Plan:</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    $7.99/month for up to 5 users
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Business Plan:</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    $12.99/month per user (minimum 3 users)
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Revenue Projections
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Year 1:</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    $250,000 (5,000 premium users)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Year 2:</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    $1.2M (20,000 premium users + business accounts)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Year 3:</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    $3.5M (50,000 premium users + expanded business accounts + API partnerships)
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Future Revenue Streams
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {[
                'Extended Warranty Marketplace',
                'Product Reliability Insights',
                'Retailer/Manufacturer API',
                'International Expansion',
                'Smart Home Integration',
                'Premium Support Services',
              ].map((item, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'roadmap',
      title: 'Roadmap',
      content: (
        <div className="space-y-6">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

            {/* Phase 1 */}
            <div className="relative pl-12 pb-8">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Phase 1: MVP (Current)
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Manual upload of receipts, invoices, and warranty documents</li>
                <li>• AI extraction of key warranty information</li>
                <li>• Basic dashboard with expiry tracking</li>
                <li>• Simple reminder system</li>
                <li>• Document storage and retrieval</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="relative pl-12 pb-8">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Phase 2: Enhanced Intelligence
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Email integration for automatic warranty detection</li>
                <li>• Improved AI with broader document recognition</li>
                <li>• Advanced filtering and organization</li>
                <li>• Expanded notification options</li>
                <li>• Warranty value insights</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="relative pl-12 pb-8">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Phase 3: Claim Automation
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Guided claim submission process</li>
                <li>• Claim form auto-completion</li>
                <li>• Support ticket integration</li>
                <li>• Claim status tracking</li>
                <li>• Success rate analytics</li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div className="relative pl-12">
              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Phase 4: Business Integration
              </h3>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Retailer and manufacturer API</li>
                <li>• Automatic warranty registration at purchase</li>
                <li>• Business dashboard for warranty verification</li>
                <li>• Extended warranty marketplace</li>
                <li>• B2B warranty management solutions</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'team',
      title: 'Our Team',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Co-Founder',
                bio: 'Former Product Lead at Dropbox with 10+ years experience in document management solutions.',
                image: 'https://randomuser.me/api/portraits/women/32.jpg',
              },
              {
                name: 'Michael Chen',
                role: 'CTO & Co-Founder',
                bio: 'AI specialist with background at Google. Led machine learning teams for document recognition.',
                image: 'https://randomuser.me/api/portraits/men/46.jpg',
              },
              {
                name: 'Aisha Patel',
                role: 'Head of Product',
                bio: 'Consumer tech expert from Apple. Passionate about creating intuitive user experiences.',
                image: 'https://randomuser.me/api/portraits/women/65.jpg',
              },
            ].map((person, index) => (
              <Card key={index} className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {person.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 mb-2">
                  {person.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {person.bio}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Backed by leading investors in consumer tech and AI
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {['Acme Ventures', 'TechStars', 'Innovation Capital', 'Future Fund'].map(
                (investor, index) => (
                  <div
                    key={index}
                    className="text-lg font-semibold text-gray-400 dark:text-gray-600"
                  >
                    {investor}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ask',
      title: 'Investment Opportunity',
      content: (
        <div className="space-y-6">
          <Card className="p-6 bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Seed Round Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-medium">Raising:</span> $1.5M
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-medium">Pre-money Valuation:</span> $6M
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Minimum Investment:</span> $50K
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-medium">Use of Funds:</span>
                </p>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• 40% - Engineering & Product Development</li>
                  <li>• 30% - Marketing & User Acquisition</li>
                  <li>• 20% - Operations & Team Expansion</li>
                  <li>• 10% - Legal & Administrative</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Invest Now
            </h3>
            <ul className="space-y-3">
              {[
                'Proven MVP with strong user feedback and engagement metrics',
                'Rapidly growing market with clear pain points and willingness to pay',
                'Proprietary AI technology with improving accuracy rates',
                'Clear path to revenue with multiple monetization channels',
                'Experienced founding team with domain expertise and previous exits',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-start"
                >
                  <svg
                    className="h-6 w-6 text-accent-500 mt-0.5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Button variant="primary" size="lg" magnetic>
              Request Investor Deck
            </Button>
          </div>
        </div>
      ),
    },
  ];

  // Handle slide navigation
  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);

      // Scroll to the top of the slide
      if (slidesRef.current[index]) {
        slidesRef.current[index].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  // Initialize slide refs
  useEffect(() => {
    slidesRef.current = slidesRef.current.slice(0, slides.length);
  }, [slides.length]);

  return (
    <div className="pt-16">
      <Section
        padding="lg"
        className="relative"
        background="transparent"
      >
        {/* Background Effects */}
        <ParticleBackground color="#F97316" count={30} />

        <div className="text-center mb-12">
          <AnimatedText
            text="WarrantyAI Pitch Deck"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h1"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Smart warranty assistant that automatically tracks, manages, and reminds users of product warranties
          </p>
        </div>

        {/* Slide Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="inline-flex space-x-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentSlide === index
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onClick={() => goToSlide(index)}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>

        {/* Slides */}
        <div className="max-w-4xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              ref={(el) => (slidesRef.current[index] = el)}
              className={`transition-opacity duration-500 ${
                currentSlide === index ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <Card className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {slide.title}
                </h2>
                {slide.content}
              </Card>

              {/* Navigation Controls */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() => goToSlide(currentSlide - 1)}
                  disabled={currentSlide === 0}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  }
                  iconPosition="left"
                >
                  Previous
                </Button>
                <Button
                  variant="primary"
                  onClick={() => goToSlide(currentSlide + 1)}
                  disabled={currentSlide === slides.length - 1}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  }
                  iconPosition="right"
                >
                  Next
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default PitchDeckPage;
