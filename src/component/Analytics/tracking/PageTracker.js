import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TRACK_API_URL = "http://api.mfinindia.org/api/auth/track-page";

let startTime = Date.now();
let currentPath = window.location.pathname;


const getModuleFromPath = (pathname) => {
  const parts = pathname.split("/").filter(Boolean);

  return {
    module: window.__ACTIVE_PARENT_MODULE__ || "unknown",
    sub_module: parts[0] || "dashboard",
  };
};




const getUserContext = () => {
  try {
    const raw = localStorage.getItem("user");
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    const u =
      parsed.user ||
      (parsed.data && parsed.data.user) ||
      null;

    if (!u) return null;

    return {
      user_id: u.id || null,
      email: u.email || null,
      designation: u.designtion || null, // ⚠ backend spelling
    };
  } catch {
    return null;
  }
};

export default function PageTracker() {
  const location = useLocation();

  // 🔹 ROUTE CHANGE
  useEffect(() => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);

    if (timeSpent > 0) {
      const { module, sub_module } = getModuleFromPath(currentPath);
      const userCtx = getUserContext();

      navigator.sendBeacon(
        TRACK_API_URL,
        JSON.stringify({
          user_id: userCtx ? userCtx.user_id : null,
          email: userCtx ? userCtx.email : null,
          designation: userCtx ? userCtx.designation : null,
          page_url: currentPath,
          module,
          sub_module,
          time_spent: timeSpent,
        })
      );
    }

    startTime = Date.now();
    currentPath = location.pathname;
  }, [location.pathname]);

  // 🔹 TAB CLOSE / REFRESH
  useEffect(() => {
    const handleUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);

      if (timeSpent > 0) {
        const { module, sub_module } = getModuleFromPath(currentPath);
        const userCtx = getUserContext();

        navigator.sendBeacon(
          TRACK_API_URL,
          JSON.stringify({
            user_id: userCtx ? userCtx.user_id : null,
            email: userCtx ? userCtx.email : null,
            designation: userCtx ? userCtx.designation : null,
            page_url: currentPath,
            module,
            sub_module,
            time_spent: timeSpent,
          })
        );
      }
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  return null;
}
