import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Section from '../../components/common/Section';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import AnimatedText from '../../components/animations/AnimatedText';
import ScanningEffect from '../../components/animations/ScanningEffect';
import WarrantyTimeline from '../../components/animations/WarrantyTimeline';
import ParticleBackground from '../../components/animations/ParticleBackground';

import { warranties } from '../../data/warranties';
import { getAssetPath } from '../../utils/paths';

const DemoPage = () => {
  const [activeTab, setActiveTab] = useState('scan');
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [extractedWarranty, setExtractedWarranty] = useState(null);
  const [userWarranties, setUserWarranties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Sample receipts for demo
  const sampleReceipts = [
    {
      id: 1,
      name: 'Tech Store - Laptop',
      image: getAssetPath('assets/images/receipt-1.svg'),
      date: '05/14/2023',
    },
    {
      id: 2,
      name: 'Home Depot - Refrigerator',
      image: getAssetPath('assets/images/receipt-2.svg'),
      date: '04/22/2023',
    },
    {
      id: 3,
      name: 'Camera World - DSLR',
      image: getAssetPath('assets/images/receipt-3.svg'),
      date: '03/15/2023',
    },
  ];

  // Handle receipt selection
  const handleReceiptSelect = (receipt) => {
    setSelectedReceipt(receipt);
    setExtractedWarranty(null);
  };

  // Handle scan completion
  const handleScanComplete = (data) => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      // Find the corresponding warranty from our sample data
      const matchedWarranty = warranties.find(w =>
        w.receiptImage === selectedReceipt.image
      );

      setExtractedWarranty(matchedWarranty);
      setIsLoading(false);
    }, 1000);
  };

  // Handle adding warranty to dashboard
  const handleAddWarranty = () => {
    if (extractedWarranty && !userWarranties.some(w => w.id === extractedWarranty.id)) {
      setUserWarranties([...userWarranties, extractedWarranty]);
      setActiveTab('dashboard');
      setSelectedReceipt(null);
      setExtractedWarranty(null);
    }
  };

  // Load saved warranties from localStorage on initial render
  useEffect(() => {
    const savedWarranties = localStorage.getItem('userWarranties');
    if (savedWarranties) {
      setUserWarranties(JSON.parse(savedWarranties));
    }
  }, []);

  // Save warranties to localStorage when they change
  useEffect(() => {
    if (userWarranties.length > 0) {
      localStorage.setItem('userWarranties', JSON.stringify(userWarranties));
    }
  }, [userWarranties]);

  return (
    <div className="pt-16">
      <Section
        padding="lg"
        className="relative"
        background="transparent"
      >
        {/* Background Effects */}
        <ParticleBackground color="#8B5CF6" count={30} />

        <div className="text-center mb-12">
          <AnimatedText
            text="Interactive Demo"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            tag="h1"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience how WarrantyAI works with this interactive demonstration
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'scan'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('scan')}
            >
              Scan Receipt
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'dashboard'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              Warranty Dashboard
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'claim'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('claim')}
            >
              Claim Assistant
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* Scan Receipt Tab */}
          {activeTab === 'scan' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Receipt Selection */}
              <Card className="p-6 md:col-span-1">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Select a Receipt
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Choose a sample receipt to scan or upload your own.
                </p>

                <div className="space-y-4">
                  {sampleReceipts.map((receipt) => (
                    <div
                      key={receipt.id}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        selectedReceipt?.id === receipt.id
                          ? 'bg-primary-50 border border-primary-200 dark:bg-primary-900/20 dark:border-primary-800'
                          : 'bg-white hover:bg-gray-50 border border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700'
                      }`}
                      onClick={() => handleReceiptSelect(receipt)}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-16 w-12 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
                          <img
                            src={receipt.image}
                            alt={receipt.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                            {receipt.name}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {receipt.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="mt-6">
                    <Button
                      variant="outline"
                      className="w-full"
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
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                          />
                        </svg>
                      }
                    >
                      Upload Your Receipt
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Scanning Area */}
              <Card className="p-6 md:col-span-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Warranty Scanner
                </h2>

                {selectedReceipt ? (
                  <div>
                    <ScanningEffect
                      image={selectedReceipt.image}
                      onComplete={handleScanComplete}
                    />

                    {extractedWarranty && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 flex justify-end"
                      >
                        <Button
                          variant="primary"
                          onClick={handleAddWarranty}
                          magnetic
                        >
                          Add to My Warranties
                        </Button>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-gray-400 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      No Receipt Selected
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                      Please select a receipt from the list or upload your own to begin scanning.
                    </p>
                  </div>
                )}
              </Card>
            </div>
          )}

          {/* Warranty Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  My Warranties
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveTab('scan')}
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  }
                >
                  Add Warranty
                </Button>
              </div>

              {userWarranties.length > 0 ? (
                <div className="space-y-8">
                  <WarrantyTimeline warranties={userWarranties} />

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {userWarranties.map((warranty) => (
                      <Card
                        key={warranty.id}
                        variant="outline"
                        className="p-4"
                        hover="lift"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {warranty.product}
                          </h3>
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium text-white ${
                              warranty.status === 'active'
                                ? 'bg-primary-500'
                                : warranty.status === 'expiring-soon'
                                ? 'bg-accent-500'
                                : 'bg-gray-500'
                            }`}
                          >
                            {warranty.status === 'active'
                              ? 'Active'
                              : warranty.status === 'expiring-soon'
                              ? 'Expiring Soon'
                              : 'Expired'}
                          </span>
                        </div>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                          {warranty.brand}
                        </p>

                        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Purchase Date
                            </p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {new Date(warranty.purchaseDate).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Expiry Date
                            </p>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {new Date(warranty.expiryDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => setActiveTab('claim')}
                          >
                            Claim
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-gray-400 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No Warranties Yet
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
                    Start by scanning a receipt or uploading a warranty document to build your warranty dashboard.
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => setActiveTab('scan')}
                    magnetic
                  >
                    Scan Your First Receipt
                  </Button>
                </div>
              )}
            </Card>
          )}

          {/* Claim Assistant Tab */}
          {activeTab === 'claim' && (
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Warranty Claim Assistant
              </h2>

              <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <span className="text-primary-600 dark:text-primary-400 font-medium">1</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        Select Product for Claim
                      </h3>
                    </div>
                  </div>

                  <Card variant="outline" className="p-4 ml-14">
                    <div className="grid grid-cols-1 gap-4">
                      {userWarranties.length > 0 ? (
                        userWarranties.map((warranty) => (
                          <div
                            key={warranty.id}
                            className="flex items-center p-3 rounded-lg cursor-pointer border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <input
                              type="radio"
                              name="warranty"
                              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                            />
                            <div className="ml-3">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                {warranty.product}
                              </h4>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                Expires: {new Date(warranty.expiryDate).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-4">
                          <p className="text-gray-500 dark:text-gray-400">
                            No warranties available. Please add warranties first.
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2"
                            onClick={() => setActiveTab('scan')}
                          >
                            Add Warranty
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">2</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-400 dark:text-gray-500">
                        Describe the Issue
                      </h3>
                    </div>
                  </div>

                  <Card variant="outline" className="p-4 ml-14 opacity-50">
                    <textarea
                      className="w-full h-32 p-3 border border-gray-300 dark:border-gray-700 rounded-md"
                      placeholder="Describe the issue you're experiencing with the product..."
                      disabled
                    ></textarea>
                  </Card>
                </div>

                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">3</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-400 dark:text-gray-500">
                        Upload Evidence (Optional)
                      </h3>
                    </div>
                  </div>

                  <Card variant="outline" className="p-4 ml-14 opacity-50">
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-md p-6 text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Drag and drop files, or click to upload
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="flex justify-end">
                  <Button variant="primary" disabled={userWarranties.length === 0}>
                    Continue to Next Step
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </Section>
    </div>
  );
};

export default DemoPage;
