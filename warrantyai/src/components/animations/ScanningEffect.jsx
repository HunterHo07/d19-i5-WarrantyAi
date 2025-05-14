import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
// Import scanning animation dynamically
const scanningAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 300,
  h: 300,
  nm: "Scanning Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Scan Line",
      sr: 1,
      ks: {
        o: { a: 0, k: 80, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            { i: { x: 0.5, y: 0 }, o: { x: 0.5, y: 1 }, t: 0, s: [150, 50, 0], to: [0, 33.333, 0], ti: [0, -33.333, 0] },
            { i: { x: 0.5, y: 0 }, o: { x: 0.5, y: 1 }, t: 45, s: [150, 250, 0], to: [0, 0, 0], ti: [0, 0, 0] },
            { i: { x: 0.5, y: 0 }, o: { x: 0.5, y: 1 }, t: 90, s: [150, 50, 0], to: [0, 0, 0], ti: [0, 0, 0] }
          ],
          ix: 2,
          l: 2
        },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "rc", d: 1, s: { a: 0, k: [200, 4], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, r: { a: 0, k: 0, ix: 4 }, nm: "Rectangle Path 1", mn: "ADBE Vector Shape - Rect", hd: false },
            { ty: "fl", c: { a: 0, k: [0.054901960784, 0.647058823529, 0.913725490196, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false },
            { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }
          ],
          nm: "Scan Line",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 0,
      op: 90,
      st: 0,
      bm: 0
    }
  ],
  markers: []
};

const ScanningEffect = ({
  image,
  onComplete,
  duration = 3000,
  showExtractedData = true,
  className = '',
}) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [extractedData, setExtractedData] = useState(null);
  const [highlightedFields, setHighlightedFields] = useState([]);
  const scannerRef = useRef(null);
  const imageRef = useRef(null);

  // Mock data extraction
  const extractData = () => {
    // This would be replaced with actual AI extraction in a real implementation
    return {
      product: 'UltraBook Pro X1',
      brand: 'Tech Store',
      purchaseDate: '05/14/2023',
      warrantyPeriod: '4 Years',
      warrantyExpiry: '05/14/2027',
      retailer: 'Tech Store',
      price: '$1,299.99',
      serialNumber: 'UBP-X1-2023-789456123',
    };
  };

  // Simulate scanning process
  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          const newProgress = prev + 2;
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              const data = extractData();
              setExtractedData(data);

              // Simulate field highlighting
              const fields = [
                { name: 'product', delay: 300 },
                { name: 'purchaseDate', delay: 600 },
                { name: 'warrantyPeriod', delay: 900 },
                { name: 'serialNumber', delay: 1200 },
                { name: 'price', delay: 1500 },
              ];

              fields.forEach(field => {
                setTimeout(() => {
                  setHighlightedFields(prev => [...prev, field.name]);
                }, field.delay);
              });

              // Complete the scanning process
              setTimeout(() => {
                if (onComplete) onComplete(data);
              }, 2000);
            }, 500);
            return 100;
          }
          return newProgress;
        });
      }, duration / 50);

      return () => clearInterval(interval);
    }
  }, [isScanning, duration, onComplete]);

  const startScanning = () => {
    setIsScanning(true);
    setHighlightedFields([]);
    setExtractedData(null);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Image container */}
      <div className="relative rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700">
        {image && (
          <img
            ref={imageRef}
            src={image}
            alt="Document to scan"
            className="w-full h-auto"
          />
        )}

        {/* Scanning overlay */}
        {isScanning && (
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <Lottie
                animationData={scanningAnimation}
                loop={true}
                className="w-full h-full"
              />
            </div>

            {/* Scanning line */}
            <motion.div
              className="absolute left-0 right-0 h-1 bg-secondary-500 opacity-70"
              initial={{ top: 0 }}
              animate={{ top: '100%' }}
              transition={{
                duration: duration / 1000,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </div>
        )}

        {/* Field highlighting */}
        {extractedData && showExtractedData && (
          <div className="absolute inset-0">
            {highlightedFields.includes('product') && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-[25%] left-[20%] right-[20%] h-8 border-2 border-primary-500 rounded bg-primary-500/20"
              />
            )}

            {highlightedFields.includes('purchaseDate') && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-[30%] left-[60%] w-24 h-6 border-2 border-secondary-500 rounded bg-secondary-500/20"
              />
            )}

            {highlightedFields.includes('warrantyPeriod') && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-[80%] left-[20%] w-32 h-6 border-2 border-accent-500 rounded bg-accent-500/20"
              />
            )}

            {highlightedFields.includes('serialNumber') && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute bottom-[10%] left-[20%] w-40 h-6 border-2 border-primary-500 rounded bg-primary-500/20"
              />
            )}

            {highlightedFields.includes('price') && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-[40%] right-[20%] w-20 h-6 border-2 border-secondary-500 rounded bg-secondary-500/20"
              />
            )}
          </div>
        )}
      </div>

      {/* Progress indicator */}
      {isScanning && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <motion.div
              className="bg-primary-600 h-2.5 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${scanProgress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {scanProgress < 100
              ? `Scanning document... ${scanProgress}%`
              : extractedData
              ? 'Extracting warranty information...'
              : 'Processing...'}
          </p>
        </div>
      )}

      {/* Scan button */}
      {!isScanning && !extractedData && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startScanning}
          className="mt-4 btn btn-primary w-full"
        >
          Start Scanning
        </motion.button>
      )}

      {/* Extracted data */}
      {extractedData && showExtractedData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Extracted Warranty Information
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(extractedData).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ScanningEffect;
