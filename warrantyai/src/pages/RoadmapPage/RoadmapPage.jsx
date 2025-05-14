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

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const RoadmapPage = () => {
  const timelineRef = useRef(null);
  const milestonesRef = useRef(null);

  // Roadmap phases data
  const phases = [
    {
      id: 'phase1',
      title: 'Phase 1: MVP (Current)',
      description: 'The foundation of WarrantyAI with core functionality.',
      status: 'current',
      features: [
        'Manual upload of receipts, invoices, and warranty documents',
        'AI extraction of key warranty information',
        'Basic dashboard with expiry tracking',
        'Simple reminder system',
        'Document storage and retrieval',
      ],
      timeline: 'Q1-Q2 2023',
    },
    {
      id: 'phase2',
      title: 'Phase 2: Enhanced Intelligence',
      description: 'Expanding AI capabilities and improving user experience.',
      status: 'upcoming',
      features: [
        'Email integration for automatic warranty detection',
        'Improved AI with broader document recognition',
        'Advanced filtering and organization',
        'Expanded notification options',
        'Warranty value insights',
      ],
      timeline: 'Q3-Q4 2023',
    },
    {
      id: 'phase3',
      title: 'Phase 3: Claim Automation',
      description: 'Streamlining the warranty claim process.',
      status: 'planned',
      features: [
        'Guided claim submission process',
        'Claim form auto-completion',
        'Support ticket integration',
        'Claim status tracking',
        'Success rate analytics',
      ],
      timeline: 'Q1-Q2 2024',
    },
    {
      id: 'phase4',
      title: 'Phase 4: Business Integration',
      description: 'Expanding to business users and partnerships.',
      status: 'planned',
      features: [
        'Retailer and manufacturer API',
        'Automatic warranty registration at purchase',
        'Business dashboard for warranty verification',
        'Extended warranty marketplace',
        'B2B warranty management solutions',
      ],
      timeline: 'Q3-Q4 2024',
    },
    {
      id: 'phase5',
      title: 'Phase 5: Ecosystem Expansion',
      description: 'Creating a comprehensive warranty ecosystem.',
      status: 'vision',
      features: [
        'Product reliability insights',
        'Community-driven warranty tips',
        'Smart home device integration',
        'International warranty support',
        'Predictive maintenance recommendations',
      ],
      timeline: '2025',
    },
  ];

  // Milestone achievements data
  const milestones = [
    {
      date: 'January 2023',
      title: 'Project Inception',
      description: 'WarrantyAI project started with initial concept development and market research.',
    },
    {
      date: 'March 2023',
      title: 'Alpha Release',
      description: 'First internal alpha version with basic receipt scanning and warranty tracking.',
    },
    {
      date: 'May 2023',
      title: 'Beta Launch',
      description: 'Limited beta release to 500 early users with core functionality.',
    },
    {
      date: 'July 2023',
      title: 'Public MVP Launch',
      description: 'Official public launch of WarrantyAI MVP with essential features.',
    },
    {
      date: 'September 2023',
      title: '5,000 Users Milestone',
      description: 'Reached 5,000 active users tracking over 25,000 warranties.',
    },
  ];

  useEffect(() => {
    // Animate the timeline section
    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');

      gsap.fromTo(
        timelineItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Animate the milestones section
    if (milestonesRef.current) {
      const milestoneItems = milestonesRef.current.querySelectorAll('.milestone-item');

      gsap.fromTo(
        milestoneItems,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: milestonesRef.current,
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
        <ParticleBackground color="#F97316" count={40} />

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedText
              text="Product Roadmap"
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              tag="h1"
            />

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Our vision for the future of WarrantyAI and the exciting features we're building
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/demo">
                <Button variant="primary" size="lg" magnetic>
                  Try Current Version
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
      </Section>

      {/* Timeline Section */}
      <Section background="gray" ref={timelineRef}>
        <div className="text-center mb-16">
          <AnimatedText
            text="Development Timeline"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our phased approach to building the ultimate warranty management solution
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:translate-x-px"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                className={`timeline-item relative ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
                }`}
                style={{ maxWidth: '100%', width: '100%', '@media (min-width: 768px)': { maxWidth: '50%' } }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[-8px] md:left-auto ${
                    index % 2 === 0 ? 'md:right-[-8px]' : 'md:left-[-8px]'
                  } top-6 w-4 h-4 rounded-full ${
                    phase.status === 'current'
                      ? 'bg-primary-500'
                      : phase.status === 'upcoming'
                      ? 'bg-secondary-500'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                ></div>

                <Card
                  className={`p-6 ${
                    phase.status === 'current'
                      ? 'border-2 border-primary-500 dark:border-primary-400'
                      : ''
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {phase.title}
                    </h3>
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                        phase.status === 'current'
                          ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300'
                          : phase.status === 'upcoming'
                          ? 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                      }`}
                    >
                      {phase.timeline}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {phase.description}
                  </p>

                  <ul className="space-y-2">
                    {phase.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start"
                      >
                        <svg
                          className={`h-5 w-5 mt-0.5 mr-2 ${
                            phase.status === 'current'
                              ? 'text-primary-600 dark:text-primary-400'
                              : phase.status === 'upcoming'
                              ? 'text-secondary-600 dark:text-secondary-400'
                              : 'text-gray-500 dark:text-gray-400'
                          }`}
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
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Milestone Achievements Section */}
      <Section ref={milestonesRef}>
        <div className="text-center mb-16">
          <AnimatedText
            text="Milestone Achievements"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Key achievements in our journey so far
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-900/30"></div>

          {/* Milestone items */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="milestone-item relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400"></div>
                </div>

                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {milestone.title}
                    </h3>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {milestone.date}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400">
                    {milestone.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Future Vision Section */}
      <Section background="primary">
        <div className="text-center mb-16">
          <AnimatedText
            text="Future Vision"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our long-term vision for WarrantyAI and the warranty management industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Ecosystem Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We envision a future where WarrantyAI is seamlessly integrated with the entire product lifecycle:
            </p>
            <ul className="space-y-2">
              {[
                'Automatic warranty registration at point of purchase',
                'Integration with smart home devices for real-time monitoring',
                'Partnerships with manufacturers for direct claim processing',
                'Retail integration for instant warranty information',
                'Service provider network for streamlined repairs',
              ].map((item, index) => (
                <li
                  key={index}
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
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              AI-Powered Insights
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our AI will evolve to provide valuable insights beyond basic warranty management:
            </p>
            <ul className="space-y-2">
              {[
                'Product reliability predictions based on warranty claim data',
                'Personalized recommendations for product maintenance',
                'Cost-saving opportunities through warranty optimization',
                'Predictive alerts for potential product failures',
                'Comparative analysis of warranty value across brands',
              ].map((item, index) => (
                <li
                  key={index}
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
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Feature Request Section */}
      <Section>
        <div className="text-center mb-16">
          <AnimatedText
            text="Help Shape Our Future"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h2"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We value your input in determining which features to prioritize next
          </p>
        </div>

        <Card className="p-8 max-w-3xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Vote on Upcoming Features
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Help us prioritize our development by voting on the features that matter most to you.
              </p>

              <div className="space-y-4">
                {[
                  {
                    feature: 'Mobile App with Offline Mode',
                    votes: 127,
                    percentage: 85,
                  },
                  {
                    feature: 'Integration with Email Providers',
                    votes: 98,
                    percentage: 65,
                  },
                  {
                    feature: 'Family Sharing Capabilities',
                    votes: 76,
                    percentage: 50,
                  },
                  {
                    feature: 'Dark Mode Support',
                    votes: 54,
                    percentage: 36,
                  },
                  {
                    feature: 'Export to PDF/CSV',
                    votes: 42,
                    percentage: 28,
                  },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">
                        {item.feature}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.votes} votes
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-primary-600 h-2.5 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Suggest a Feature
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Have an idea for a feature that would make WarrantyAI even better? We'd love to hear it!
              </p>

              <Button variant="primary" className="w-full" magnetic>
                Submit Feature Request
              </Button>
            </div>
          </div>
        </Card>
      </Section>

      {/* CTA Section */}
      <Section background="aurora" className="text-white">
        <div className="text-center">
          <AnimatedText
            text="Join Us on This Journey"
            className="text-3xl md:text-4xl font-bold mb-6"
            tag="h2"
          />
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of the WarrantyAI story from the beginning. Try our current version today and help shape the future of warranty management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/demo">
              <Button
                variant="accent"
                size="lg"
                magnetic
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Try Current Version
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

export default RoadmapPage;
