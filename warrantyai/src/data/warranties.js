import { getAssetPath } from '../utils/paths';

// Sample warranty data for demonstration purposes
export const warranties = [
  {
    id: 1,
    product: 'UltraBook Pro X1',
    brand: 'TechCorp',
    category: 'Electronics',
    purchaseDate: '2023-05-14',
    warrantyPeriod: '4 years',
    expiryDate: '2027-05-14',
    retailer: 'Tech Store',
    price: 1299.99,
    serialNumber: 'UBP-X1-2023-789456123',
    receiptImage: getAssetPath('assets/images/receipt-1.svg'),
    extendedWarranty: {
      price: 249.99,
      duration: '3 years'
    },
    notes: 'Extended warranty purchased for additional 3 years',
    status: 'active',
    claimHistory: [],
    reminders: [
      {
        id: 1,
        type: 'expiry',
        date: '2027-04-14',
        message: 'Your warranty for UltraBook Pro X1 expires in 30 days',
        isRead: false,
      },
    ],
  },
  {
    id: 2,
    product: 'Smart Refrigerator X7000',
    brand: 'CoolTech',
    category: 'Appliances',
    purchaseDate: '2023-04-22',
    warrantyPeriod: '7 years',
    expiryDate: '2030-04-22',
    retailer: 'Home Depot',
    price: 1899.99,
    serialNumber: 'SR-X7000-2023-456789123',
    receiptImage: getAssetPath('assets/images/receipt-2.svg'),
    notes: 'Premium Protection Plan includes parts and labor',
    status: 'active',
    claimHistory: [],
    reminders: [
      {
        id: 2,
        type: 'maintenance',
        date: '2023-10-22',
        message: 'Schedule your 6-month maintenance check for Smart Refrigerator X7000',
        isRead: true,
      },
    ],
  },
  {
    id: 3,
    product: 'Pro DSLR Camera EOS R5',
    brand: 'CanonTech',
    category: 'Photography',
    purchaseDate: '2023-03-15',
    warrantyPeriod: '2 years',
    expiryDate: '2025-03-15',
    retailer: 'Camera World',
    price: 3899.99,
    serialNumber: 'EOS-R5-123456789',
    receiptImage: getAssetPath('assets/images/receipt-3.svg'),
    notes: 'Accidental damage protection included',
    status: 'active',
    claimHistory: [
      {
        id: 1,
        date: '2023-06-10',
        issue: 'Lens autofocus malfunction',
        resolution: 'Repaired under warranty',
        cost: 0,
      },
    ],
    reminders: [
      {
        id: 3,
        type: 'expiry',
        date: '2025-02-15',
        message: 'Your warranty for Pro DSLR Camera EOS R5 expires in 30 days',
        isRead: false,
      },
    ],
  },
  {
    id: 4,
    product: 'Smartphone Galaxy S23',
    brand: 'Samsung',
    category: 'Electronics',
    purchaseDate: '2023-01-20',
    warrantyPeriod: '1 year',
    expiryDate: '2024-01-20',
    retailer: 'Mobile World',
    price: 999.99,
    serialNumber: 'SG-S23-2023-987654321',
    receiptImage: null,
    notes: 'Standard manufacturer warranty',
    status: 'expiring-soon',
    claimHistory: [],
    reminders: [
      {
        id: 4,
        type: 'expiry',
        date: '2023-12-20',
        message: 'Your warranty for Smartphone Galaxy S23 expires in 30 days',
        isRead: false,
      },
    ],
  },
  {
    id: 5,
    product: 'Smart TV OLED 65"',
    brand: 'LG',
    category: 'Electronics',
    purchaseDate: '2022-11-25',
    warrantyPeriod: '2 years',
    expiryDate: '2024-11-25',
    retailer: 'Electronics Superstore',
    price: 2499.99,
    serialNumber: 'LG-OLED65-2022-123789456',
    receiptImage: null,
    notes: 'Extended warranty available for purchase until 2023-11-25',
    status: 'active',
    claimHistory: [],
    reminders: [
      {
        id: 5,
        type: 'extension',
        date: '2023-10-25',
        message: 'Last chance to extend your warranty for Smart TV OLED 65"',
        isRead: false,
      },
    ],
  },
  {
    id: 6,
    product: 'Washing Machine Pro',
    brand: 'Whirlpool',
    category: 'Appliances',
    purchaseDate: '2022-08-10',
    warrantyPeriod: '3 years',
    expiryDate: '2025-08-10',
    retailer: 'Appliance Center',
    price: 899.99,
    serialNumber: 'WM-PRO-2022-456123789',
    receiptImage: null,
    notes: 'Parts warranty: 3 years, Labor warranty: 1 year',
    status: 'active',
    claimHistory: [
      {
        id: 2,
        date: '2023-02-15',
        issue: 'Water pump failure',
        resolution: 'Replaced under warranty',
        cost: 0,
      },
    ],
    reminders: [],
  },
  {
    id: 7,
    product: 'Gaming Console XS',
    brand: 'Microsoft',
    category: 'Electronics',
    purchaseDate: '2022-06-05',
    warrantyPeriod: '1 year',
    expiryDate: '2023-06-05',
    retailer: 'Game Stop',
    price: 499.99,
    serialNumber: 'GC-XS-2022-789123456',
    receiptImage: null,
    notes: 'Standard manufacturer warranty',
    status: 'expired',
    claimHistory: [],
    reminders: [],
  },
];

// Get warranties by status
export const getWarrantiesByStatus = (status) => {
  return warranties.filter(warranty => warranty.status === status);
};

// Get warranties by category
export const getWarrantiesByCategory = (category) => {
  return warranties.filter(warranty => warranty.category === category);
};

// Get warranty by ID
export const getWarrantyById = (id) => {
  return warranties.find(warranty => warranty.id === id);
};

// Get all reminders
export const getAllReminders = () => {
  return warranties.flatMap(warranty => warranty.reminders);
};

// Get unread reminders
export const getUnreadReminders = () => {
  return warranties.flatMap(warranty =>
    warranty.reminders.filter(reminder => !reminder.isRead)
  );
};

// Get warranty statistics
export const getWarrantyStatistics = () => {
  const total = warranties.length;
  const active = warranties.filter(w => w.status === 'active').length;
  const expiringSoon = warranties.filter(w => w.status === 'expiring-soon').length;
  const expired = warranties.filter(w => w.status === 'expired').length;

  const categoryCounts = warranties.reduce((acc, warranty) => {
    acc[warranty.category] = (acc[warranty.category] || 0) + 1;
    return acc;
  }, {});

  const totalValue = warranties.reduce((sum, warranty) => sum + warranty.price, 0);

  return {
    total,
    active,
    expiringSoon,
    expired,
    categoryCounts,
    totalValue,
  };
};
