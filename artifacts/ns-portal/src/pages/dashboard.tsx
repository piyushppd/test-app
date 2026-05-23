import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { LayoutDashboard, FileText, Award, LogOut } from "lucide-react";

const navItems = [
  { label: "My Dashboard", icon: LayoutDashboard, id: "dashboard" },
  { label: "G50 Submission", icon: FileText, id: "g50" },
  { label: "Scholarship Award", icon: Award, id: "scholarship" },
];

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleLogout = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen flex" style={{ background: "#1a1a1a" }}>
      <aside
        className="w-64 flex flex-col shrink-0 border-r border-white/10"
        style={{ background: "#111111" }}
        data-testid="sidebar"
      >
        <div className="px-6 py-5 border-b border-white/10">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-extrabold tracking-tighter lowercase" style={{ color: "#C0272D" }}>
              ns
            </span>
            <span className="text-lg font-bold text-white">.gov.sg</span>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1" data-testid="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                data-testid={`nav-${item.id}`}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors text-left"
                style={{
                  background: isActive ? "#C0272D" : "transparent",
                  color: isActive ? "#ffffff" : "#a0a0a0",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = "#a0a0a0";
                  }
                }}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="px-3 pb-6">
          <button
            onClick={handleLogout}
            data-testid="button-logout"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors"
            style={{ color: "#a0a0a0" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(192,39,45,0.15)";
              (e.currentTarget as HTMLButtonElement).style.color = "#C0272D";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#a0a0a0";
            }}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            LOG OUT
          </button>
        </div>
      </aside>

      <main className="flex-1 flex items-center justify-center" data-testid="main-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h1
            className="text-7xl font-extrabold tracking-tight"
            style={{ color: "#C0272D" }}
            data-testid="text-hello"
          >
            Hello!
          </h1>
          <p className="mt-4 text-base" style={{ color: "#6b6b6b" }}>
            Welcome to the NS Portal. Select a service from the menu.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
