import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const WarrantyTimeline = ({
  warranties = [],
  className = '',
  interactive = true,
  showDetails = true,
}) => {
  const [selectedWarranty, setSelectedWarranty] = useState(null);
  const [timelineWidth, setTimelineWidth] = useState(0);

  // Calculate the timeline width based on the longest warranty
  useEffect(() => {
    if (warranties.length > 0) {
      const longestWarranty = warranties.reduce((longest, current) => {
        const currentEnd = new Date(current.expiryDate).getTime();
        const longestEnd = new Date(longest.expiryDate).getTime();
        return currentEnd > longestEnd ? current : longest;
      }, warranties[0]);

      const startDate = new Date(longestWarranty.purchaseDate).getTime();
      const endDate = new Date(longestWarranty.expiryDate).getTime();
      const duration = endDate - startDate;

      // Set a minimum width and scale based on duration
      const minWidth = 300;
      const maxWidth = 800;
      const scaleFactor = 0.00000001; // Adjust based on typical warranty durations

      setTimelineWidth(Math.min(Math.max(duration * scaleFactor, minWidth), maxWidth));
    }
  }, [warranties]);

  // Calculate the position and width of a warranty on the timeline
  const calculateWarrantyPosition = (warranty) => {
    if (warranties.length === 0) return { left: 0, width: 0 };

    const earliestDate = new Date(
      Math.min(...warranties.map(w => new Date(w.purchaseDate).getTime()))
    );

    const latestDate = new Date(
      Math.max(...warranties.map(w => new Date(w.expiryDate).getTime()))
    );

    const timelineStart = earliestDate.getTime();
    const timelineEnd = latestDate.getTime();
    const timelineDuration = timelineEnd - timelineStart;

    const warrantyStart = new Date(warranty.purchaseDate).getTime();
    const warrantyEnd = new Date(warranty.expiryDate).getTime();

    const left = ((warrantyStart - timelineStart) / timelineDuration) * 100;
    const width = ((warrantyEnd - warrantyStart) / timelineDuration) * 100;

    return { left: `${left}%`, width: `${width}%` };
  };

  // Calculate days remaining for a warranty
  const calculateDaysRemaining = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Get status color based on days remaining
  const getStatusColor = (daysRemaining) => {
    if (daysRemaining < 0) return 'bg-gray-400 dark:bg-gray-600'; // Expired
    if (daysRemaining < 30) return 'bg-accent-500'; // Expiring soon
    if (daysRemaining < 90) return 'bg-secondary-500'; // Approaching expiration
    return 'bg-primary-500'; // Active
  };

  // Get status text based on days remaining
  const getStatusText = (daysRemaining) => {
    if (daysRemaining < 0) return 'Expired';
    if (daysRemaining < 30) return 'Expiring Soon';
    if (daysRemaining < 90) return 'Approaching Expiration';
    return 'Active';
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Handle warranty click
  const handleWarrantyClick = (warranty) => {
    if (!interactive) return;

    setSelectedWarranty(warranty.id === selectedWarranty?.id ? null : warranty);

    // Animate the timeline
    gsap.to('.warranty-item', {
      opacity: warranty.id === selectedWarranty?.id ? 1 : 0.5,
      scale: 1,
      duration: 0.3,
    });

    gsap.to(`.warranty-item-${warranty.id}`, {
      opacity: 1,
      scale: 1.05,
      duration: 0.3,
    });
  };

  return (
    <div className={`${className}`}>
      {/* Timeline */}
      <div
        className="relative h-24 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
        style={{ width: '100%' }}
      >
        {/* Timeline background grid */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
          <div className="absolute inset-0 grid grid-cols-12 gap-0">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-full border-l border-gray-200 dark:border-gray-700"></div>
            ))}
          </div>
        </div>

        {/* Timeline markers */}
        <div className="absolute top-0 left-0 right-0 h-full">
          {[0, 25, 50, 75, 100].map((position) => (
            <div
              key={position}
              className="absolute h-full border-l-2 border-gray-300 dark:border-gray-600"
              style={{ left: `${position}%` }}
            >
              <div className="absolute bottom-2 -left-4 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full shadow-sm">
                {position === 0 ? 'Start' : position === 100 ? 'End' : `${position}%`}
              </div>
            </div>
          ))}
        </div>

        {/* Warranty bars */}
        {warranties.map((warranty) => {
          const position = calculateWarrantyPosition(warranty);
          const daysRemaining = calculateDaysRemaining(warranty.expiryDate);
          const statusColor = getStatusColor(daysRemaining);

          return (
            <motion.div
              key={warranty.id}
              className={`warranty-item warranty-item-${warranty.id} absolute h-10 top-8 rounded-lg cursor-pointer shadow-md ${statusColor}`}
              style={{
                left: position.left,
                width: position.width,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleWarrantyClick(warranty)}
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white truncate px-2">
                <span className="drop-shadow-md">{warranty.product}</span>
              </div>

              {/* Warranty duration label */}
              {parseFloat(position.width) > 15 && (
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 dark:text-gray-300 whitespace-nowrap">
                  {warranty.warrantyPeriod}
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Current date marker */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-red-500 z-10 shadow-md"
          style={{ left: '20%' }}
        >
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
            Today
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
        </div>

        {/* Timeline labels */}
        <div className="absolute top-2 left-0 right-0 flex justify-between px-4">
          <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">Warranty Timeline</div>
          <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            {warranties.length} Active Warranties
          </div>
        </div>
      </div>

      {/* Selected warranty details */}
      {selectedWarranty && showDetails && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {selectedWarranty.product}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {selectedWarranty.brand}
              </p>
            </div>
            <div className="text-right">
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(
                  calculateDaysRemaining(selectedWarranty.expiryDate)
                )}`}
              >
                {getStatusText(calculateDaysRemaining(selectedWarranty.expiryDate))}
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {calculateDaysRemaining(selectedWarranty.expiryDate) > 0
                  ? `${calculateDaysRemaining(selectedWarranty.expiryDate)} days remaining`
                  : `Expired ${Math.abs(calculateDaysRemaining(selectedWarranty.expiryDate))} days ago`}
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Purchase Date</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {formatDate(selectedWarranty.purchaseDate)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Expiry Date</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {formatDate(selectedWarranty.expiryDate)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Retailer</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {selectedWarranty.retailer}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Serial Number</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {selectedWarranty.serialNumber}
              </p>
            </div>
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <button className="btn btn-secondary text-xs">View Details</button>
            <button className="btn btn-primary text-xs">Claim Warranty</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default WarrantyTimeline;
