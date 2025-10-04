//** Third party imports */
import {
    SquareTerminal,
    BarChart4,
    Zap,
    Clock,
    Bell,
    Package,
    Package2,
    ArrowLeftRight,
    Warehouse,
    FileBarChart,
    Users,
    UserCheck,
    ShoppingBag,
    Truck,
    ClipboardList,
    CreditCard,
    Calculator,
    DollarSign,
    FileSpreadsheet,
    Factory,
    Hammer,
    Settings,
    PieChart,
    LineChart,
    BarChart,
    UserCog,
    Store,
    Building,
    Sliders,
    Barcode,
    ListChecks,
    BookOpen as BookOpenIcon,
    Video,
    HelpCircle,
    TicketCheck,
    RefreshCw
} from "lucide-react";

export const sidebarMenu = [
    {
        mainHead: "Dashboard",
        menu: [
            {
                title: "Summary Statistics",
                url: "#",
                icon: SquareTerminal,
                isSubmenu: false
            },
            {
                title: "Visual Analytics",
                url: "#",
                icon: BarChart4,
                isSubmenu: false
            },
            {
                title: "Quick Actions",
                url: "#",
                icon: Zap,
                isSubmenu: false
            },
            {
                title: "Recent Activity",
                url: "#",
                icon: Clock,
                isSubmenu: false
            },
            {
                title: "Alerts & Notifications",
                url: "#",
                icon: Bell,
                isSubmenu: false
            },
        ],
    },

    {
        mainHead: "Inventory Management",
        menu: [
            {
                title: "Products",
                url: "#",
                icon: Package,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Product List",
                        url: "#",
                    },
                    {
                        title: "Categories",
                        url: "#",
                    },
                    {
                        title: "Tags",
                        url: "#",
                    },
                    {
                        title: "Attributes",
                        url: "#",
                    },
                    {
                        title: "Units of Measure",
                        url: "#",
                    },
                    {
                        title: "Variants",
                        url: "#",
                    },
                ],
            },
            {
                title: "Stock Control",
                url: "#",
                icon: Package2,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Current Stock",
                        url: "#",
                    },
                    {
                        title: "Low Stock Items",
                        url: "#",
                    },
                    {
                        title: "Stock Adjustments",
                        url: "#",
                    },
                    {
                        title: "Stock Transfers",
                        url: "#",
                    },
                    {
                        title: "Stock History",
                        url: "#",
                    },
                    {
                        title: "Batch/Lot Tracking",
                        url: "#",
                    },
                ],
            },
            {
                title: "Warehousing",
                url: "#",
                icon: Warehouse,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Warehouse List",
                        url: "#",
                    },
                    {
                        title: "Storage Locations",
                        url: "#",
                    },
                    {
                        title: "Bin Management",
                        url: "#",
                    },
                    {
                        title: "Warehouse Transfer",
                        url: "#",
                    },
                    {
                        title: "Warehouse Reports",
                        url: "#",
                    },
                ],
            },
        ],
    },
    {
        mainHead: "Purchasing",
        menu: [
            {
                title: "Suppliers",
                url: "#",
                icon: Users,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Supplier List",
                        url: "#",
                    },
                    {
                        title: "Supplier Categories",
                        url: "#",
                    },
                    {
                        title: "Supplier Performance",
                        url: "#",
                    },
                ],
            },
            {
                title: "Purchase Orders",
                url: "#",
                icon: ShoppingBag,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Create Order",
                        url: "#",
                    },
                    {
                        title: "Order List",
                        url: "#",
                    },
                    {
                        title: "Order Approval",
                        url: "#",
                    },
                    {
                        title: "Backorders",
                        url: "#",
                    },
                ],
            },
            {
                title: "Receiving",
                url: "#",
                icon: Truck,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Goods Receipt",
                        url: "#",
                    },
                    {
                        title: "Quality Control",
                        url: "#",
                    },
                    {
                        title: "Return to Supplier",
                        url: "#",
                    },
                    {
                        title: "Purchase History",
                        url: "#",
                    },
                ],
            },
        ],
    },
    {
        mainHead: "Sales Management",
        menu: [
            {
                title: "Customers",
                url: "#",
                icon: UserCheck,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Customer List",
                        url: "#",
                    },
                    {
                        title: "Customer Groups",
                        url: "#",
                    },
                    {
                        title: "Customer History",
                        url: "#",
                    },
                ],
            },
            {
                title: "Orders",
                url: "#",
                icon: ClipboardList,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Sales Orders",
                        url: "#",
                    },
                    {
                        title: "Quotations",
                        url: "#",
                    },
                    {
                        title: "Invoices",
                        url: "#",
                    },
                    {
                        title: "Delivery Notes",
                        url: "#",
                    },
                    {
                        title: "Returns & Refunds",
                        url: "#",
                    },
                ],
            },
            {
                title: "Point of Sale",
                url: "#",
                icon: CreditCard,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "POS Terminal",
                        url: "#",
                    },
                    {
                        title: "Sales Register",
                        url: "#",
                    },
                    {
                        title: "Shift Management",
                        url: "#",
                    },
                    {
                        title: "Cash Management",
                        url: "#",
                    },
                ],
            },
        ],
    },
    {
        mainHead: "Manufacturing",
        menu: [
            {
                title: "Bill of Materials",
                url: "#",
                icon: FileSpreadsheet,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "BOM List",
                        url: "#",
                    },
                    {
                        title: "Component Management",
                        url: "#",
                    },
                ],
            },
            {
                title: "Production",
                url: "#",
                icon: Factory,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Production Orders",
                        url: "#",
                    },
                    {
                        title: "Work Centers",
                        url: "#",
                    },
                    {
                        title: "Production Planning",
                        url: "#",
                    },
                    {
                        title: "Production Reporting",
                        url: "#",
                    },
                ],
            },
            {
                title: "Work Order Management",
                url: "#",
                icon: Hammer,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Create Work Order",
                        url: "#",
                    },
                    {
                        title: "Work Order List",
                        url: "#",
                    },
                    {
                        title: "Work Order Tracking",
                        url: "#",
                    },
                ],
            },
        ],
    },
    {
        mainHead: "Reporting & Analytics",
        menu: [
            {
                title: "Inventory Reports",
                url: "#",
                icon: BarChart,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Stock Value Report",
                        url: "#",
                    },
                    {
                        title: "Inventory Aging",
                        url: "#",
                    },
                    {
                        title: "Inventory Movement",
                        url: "#",
                    },
                    {
                        title: "Inventory Forecasting",
                        url: "#",
                    },
                ],
            },
            {
                title: "Sales Reports",
                url: "#",
                icon: LineChart,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Sales by Product",
                        url: "#",
                    },
                    {
                        title: "Sales by Customer",
                        url: "#",
                    },
                    {
                        title: "Sales by Region",
                        url: "#",
                    },
                    {
                        title: "Profit Margin Analysis",
                        url: "#",
                    },
                ],
            },
            {
                title: "Purchase Reports",
                url: "#",
                icon: PieChart,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Purchase by Supplier",
                        url: "#",
                    },
                    {
                        title: "Purchase by Product",
                        url: "#",
                    },
                    {
                        title: "Cost Analysis",
                        url: "#",
                    },
                ],
            },
            {
                title: "Custom Reports",
                url: "#",
                icon: FileBarChart,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Report Builder",
                        url: "#",
                    },
                    {
                        title: "Saved Reports",
                        url: "#",
                    },
                    {
                        title: "Scheduled Reports",
                        url: "#",
                    },
                ],
            },
        ],
    },
    {
        mainHead: "Integrations",
        menu: [
            {
                title: "E-commerce Platforms",
                url: "#",
                icon: Store,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Shopify",
                        url: "#",
                    },
                    {
                        title: "WooCommerce",
                        url: "#",
                    },
                    {
                        title: "Amazon",
                        url: "#",
                    },
                    {
                        title: "eBay",
                        url: "#",
                    },
                ],
            },
            {
                title: "Accounting Software",
                url: "#",
                icon: Calculator,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "QuickBooks",
                        url: "#",
                    },
                    {
                        title: "Xero",
                        url: "#",
                    },
                    {
                        title: "Sage",
                        url: "#",
                    },
                ],
            },
            {
                title: "Shipping & Logistics",
                url: "#",
                icon: Truck,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Shipping Carriers",
                        url: "#",
                    },
                    {
                        title: "Tracking Integration",
                        url: "#",
                    },
                    {
                        title: "Shipping Labels",
                        url: "#",
                    },
                ],
            },
            {
                title: "Payment Gateways",
                url: "#",
                icon: DollarSign,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Payment Provider Setup",
                        url: "#",
                    },
                    {
                        title: "Transaction History",
                        url: "#",
                    },
                ],
            },
        ],
    },
    {
        mainHead: "System Settings",
        menu: [
            {
                title: "User Management",
                url: "#",
                icon: UserCog,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Users",
                        url: "#",
                    },
                    {
                        title: "Roles & Permissions",
                        url: "#",
                    },
                    {
                        title: "Activity Logs",
                        url: "#",
                    },
                ],
            },
            {
                title: "Business Settings",
                url: "#",
                icon: Building,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Company Details",
                        url: "#",
                    },
                    {
                        title: "Branches/Locations",
                        url: "#",
                    },
                    {
                        title: "Fiscal Year",
                        url: "#",
                    },
                    {
                        title: "Currency",
                        url: "#",
                    },
                    {
                        title: "Tax Settings",
                        url: "#",
                    },
                ],
            },
            {
                title: "System Configuration",
                url: "#",
                icon: Settings,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "General Settings",
                        url: "#",
                    },
                    {
                        title: "Email Configuration",
                        url: "#",
                    },
                    {
                        title: "Backup & Restore",
                        url: "#",
                    },
                    {
                        title: "System Logs",
                        url: "#",
                    },
                ],
            },
            {
                title: "Customization",
                url: "#",
                icon: Sliders,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Field Customization",
                        url: "#",
                    },
                    {
                        title: "Workflow Management",
                        url: "#",
                    },
                    {
                        title: "Document Templates",
                        url: "#",
                    },
                ],
            },
        ],
    },
    {
        mainHead: "Tools",
        menu: [
            {
                title: "Import/Export",
                url: "#",
                icon: ArrowLeftRight,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Data Import",
                        url: "#",
                    },
                    {
                        title: "Data Export",
                        url: "#",
                    },
                    {
                        title: "Templates",
                        url: "#",
                    },
                ],
            },
            {
                title: "Barcode Management",
                url: "#",
                icon: Barcode,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Generate Barcodes",
                        url: "#",
                    },
                    {
                        title: "Print Labels",
                        url: "#",
                    },
                    {
                        title: "Scan Settings",
                        url: "#",
                    },
                ],
            },
            {
                title: "Batch Processing",
                url: "#",
                icon: ListChecks,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Batch Updates",
                        url: "#",
                    },
                    {
                        title: "Batch Deletion",
                        url: "#",
                    },
                    {
                        title: "Scheduled Tasks",
                        url: "#",
                    },
                ],
            },
            {
                title: "Notifications",
                url: "#",
                icon: Bell,
                isActive: false,
                isSubmenu: true,
                items: [
                    {
                        title: "Email Alerts",
                        url: "#",
                    },
                    {
                        title: "SMS Notifications",
                        url: "#",
                    },
                    {
                        title: "In-App Notifications",
                        url: "#",
                    },
                ],
            },
        ],
    },
    {
        mainHead: "Help & Support",
        menu: [
            {
                title: "Documentation",
                url: "#",
                icon: BookOpenIcon,
                isSubmenu: false
            },
            {
                title: "Video Tutorials",
                url: "#",
                icon: Video,
                isSubmenu: false
            },
            {
                title: "FAQs",
                url: "#",
                icon: HelpCircle,
                isSubmenu: false
            },
            {
                title: "Support Tickets",
                url: "#",
                icon: TicketCheck,
                isSubmenu: false
            },
            {
                title: "System Updates",
                url: "#",
                icon: RefreshCw,
                isSubmenu: false
            },
        ],
    }
];