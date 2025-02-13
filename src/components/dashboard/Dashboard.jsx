import Link from "next/link";
import { User, Lock, Globe, Key, CreditCard, FileText, LogOut } from "lucide-react";

function Dashboard() {
  const menuItems = [
    { name: "Profile", href: "/dashboard/profile", icon: <User size={18} /> },
    { name: "Security", href: "/dashboard/security", icon: <Lock size={18} /> },
    { name: "Branded Domains", href: "/branded-domains", icon: <Globe size={18} /> },
    { name: "API", href: "/api-settings", icon: <Key size={18} /> },
  ];

  const billingItems = [
    { name: "Subscription", href: "/subscription", icon: <CreditCard size={18} /> },
    { name: "Invoices", href: "/invoices", icon: <FileText size={18} /> },
  ];

  return (
    <div className="absolute w-[18%] z-50 top-20 h-[85%] bg-[#dee2e6] p-4">
      {/* Settings Section */}
      <h2 className=" font-bold text-3xl opacity-85 font-montserrat mb-4">Settings</h2>
      <ul className="space-y-3">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex z-50 items-center gap-3 font-medium text-lg font-montserrat cursor-pointer hover:text-blue-500"
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Billing Section */}
      <h2 className="text-xl font-bold mt-6 mb-4">Billing</h2>
      <ul className="space-y-3">
        {billingItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex items-center gap-3 font-medium text-lg font-montserrat cursor-pointer hover:text-blue-500"
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <button className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        <LogOut size={18} />
        Log Out
      </button>
    </div>
  );
}

export default Dashboard;
