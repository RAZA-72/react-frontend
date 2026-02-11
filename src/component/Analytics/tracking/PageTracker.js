// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const TRACK_API_URL = "http://api.mfinindia.org/api/auth/track-page";

// let startTime = Date.now();
// let currentPath = window.location.pathname;


// const getModuleFromPath = (pathname) => {
//   const parts = pathname.split("/").filter(Boolean);

//   return {
//     module: window.__ACTIVE_PARENT_MODULE__ || "unknown",
//     sub_module: parts[0] || "dashboard",
//   };
// };




// const getUserContext = () => {
//   try {
//     const raw = localStorage.getItem("user");
//     if (!raw) return null;

//     const parsed = JSON.parse(raw);
//     const u =
//       parsed.user ||
//       (parsed.data && parsed.data.user) ||
//       null;

//     if (!u) return null;

//     return {
//       user_id: u.id || null,
//       email: u.email || null,
//       designation: u.designtion || null, // ⚠ backend spelling
//     };
//   } catch {
//     return null;
//   }
// };

// export default function PageTracker() {
//   const location = useLocation();

//   // 🔹 ROUTE CHANGE
//   useEffect(() => {
//     const timeSpent = Math.floor((Date.now() - startTime) / 1000);

//     if (timeSpent > 0) {
//       const { module, sub_module } = getModuleFromPath(currentPath);
//       const userCtx = getUserContext();

//       navigator.sendBeacon(
//         TRACK_API_URL,
//         JSON.stringify({
//           user_id: userCtx ? userCtx.user_id : null,
//           email: userCtx ? userCtx.email : null,
//           designation: userCtx ? userCtx.designation : null,
//           page_url: currentPath,
//           module,
//           sub_module,
//           time_spent: timeSpent,
//         })
//       );
//     }

//     startTime = Date.now();
//     currentPath = location.pathname;
//   }, [location.pathname]);

//   // 🔹 TAB CLOSE / REFRESH
//   useEffect(() => {
//     const handleUnload = () => {
//       const timeSpent = Math.floor((Date.now() - startTime) / 1000);

//       if (timeSpent > 0) {
//         const { module, sub_module } = getModuleFromPath(currentPath);
//         const userCtx = getUserContext();

//         navigator.sendBeacon(
//           TRACK_API_URL,
//           JSON.stringify({
//             user_id: userCtx ? userCtx.user_id : null,
//             email: userCtx ? userCtx.email : null,
//             designation: userCtx ? userCtx.designation : null,
//             page_url: currentPath,
//             module,
//             sub_module,
//             time_spent: timeSpent,
//           })
//         );
//       }
//     };

//     window.addEventListener("beforeunload", handleUnload);
//     return () => window.removeEventListener("beforeunload", handleUnload);
//   }, []);

//   return null;
// }



import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * API endpoint
 */
const TRACK_API_URL = "http://api.mfinindia.org/api/auth/track-page";

/**
 * Allowed URLs only
 */
const ALLOWED_ROUTES = [
  {
    match: function (path) {
      return path.indexOf("/micro-finance-universe") === 0;
    },
    module: "Microfinance Universe",
    sub_module: "Overview",
  },
  {
    match: function (path) {
      return path.indexOf("/mfinmembersmodule") === 0;
    },
    module: "MFIN Members",
    sub_module: "Listing",
  },
  {
    match: function (path) {
      return path.indexOf("/dri-pincode") === 0;
    },
    module: "DRI-State",
    sub_module: "Map",
  },
  {
    match: function (path) {
      return path.indexOf("/customize-report") === 0;
    },
    module: "Custom Reports",
    sub_module: "Main",
  },
  {
    match: function (path) {
      return path.indexOf("/benchmark") === 0;
    },
    module: "Benchmark",
    sub_module: "Dashboard",
  },


  {
    match: function (path) {
      return path.indexOf("/sro") === 0;
    },
    module: "SRO",
    sub_module: "Listing",
  },
  {
    // Only Micrometer publications
    match: function (path) {
      return (
        path.indexOf("/datapublicationcard") === 0 &&
        path.indexOf("publication") !== -1
      );
    },
    module: "Publications",
    sub_module: "Micrometer",
  },
];

/**
 * Resolve module from URL
 */
function getModuleFromPath(pathname) {
  for (var i = 0; i < ALLOWED_ROUTES.length; i++) {
    if (ALLOWED_ROUTES[i].match(pathname)) {
      return {
        module: ALLOWED_ROUTES[i].module,
        sub_module: ALLOWED_ROUTES[i].sub_module,
      };
    }
  }
  return null;
}

/**
 * Get user data safely
 */
function getUserContext() {
  try {
    var raw = localStorage.getItem("user");
    if (!raw) return null;

    var parsed = JSON.parse(raw);
    var user = null;

    if (parsed && parsed.data && parsed.data.user) {
      user = parsed.data.user;
    } else if (parsed && parsed.user) {
      user = parsed.user;
    }

    if (!user) return null;

    return {
      user_id: user.id || null,
      email: user.email || null,
      designation:
        parsed && parsed.data ? parsed.data.role_name : null,
    };
  } catch (e) {
    return null;
  }
}

/**
 * Global timers
 */
var startTime = Date.now();
var currentPath = window.location.pathname;

/**
 * PageTracker Component
 */
export default function PageTracker() {
  var location = useLocation();

  /**
   * On route change
   */
  useEffect(
    function () {
      var timeSpent = Math.floor(
        (Date.now() - startTime) / 1000
      );

      if (timeSpent > 0) {
        var moduleInfo = getModuleFromPath(currentPath);
        if (moduleInfo) {
          var userCtx = getUserContext();

          navigator.sendBeacon(
            TRACK_API_URL,
            JSON.stringify({
              user_id: userCtx ? userCtx.user_id : null,
              email: userCtx ? userCtx.email : null,
              designation: userCtx ? userCtx.designation : null,
              page_url: currentPath,
              module: moduleInfo.module,
              sub_module: moduleInfo.sub_module,
              time_spent: timeSpent,
            })
          );
        }
      }

      startTime = Date.now();
      currentPath = location.pathname;
    },
    [location.pathname]
  );

  /**
   * On tab close / refresh
   */
  useEffect(function () {
    function handleUnload() {
      var timeSpent = Math.floor(
        (Date.now() - startTime) / 1000
      );
      if (timeSpent <= 0) return;

      var moduleInfo = getModuleFromPath(currentPath);
      if (!moduleInfo) return;

      var userCtx = getUserContext();

      navigator.sendBeacon(
        TRACK_API_URL,
        JSON.stringify({
          user_id: userCtx ? userCtx.user_id : null,
          email: userCtx ? userCtx.email : null,
          designation: userCtx ? userCtx.designation : null,
          page_url: currentPath,
          module: moduleInfo.module,
          sub_module: moduleInfo.sub_module,
          time_spent: timeSpent,
        })
      );
    }

    window.addEventListener("beforeunload", handleUnload);
    return function () {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return null;
}