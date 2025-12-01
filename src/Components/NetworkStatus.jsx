import { useState, useEffect } from "react";

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Show offline message if currently offline
    if (!navigator.onLine) {
      setShowOfflineMessage(true);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!showOfflineMessage) return null;

  return (
    <div
      className="alert alert-warning alert-dismissible fade show position-fixed"
      style={{
        top: "20px",
        right: "20px",
        zIndex: 1050,
        minWidth: "300px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      role="alert"
    >
      <div className="d-flex align-items-center">
        <i className="bi bi-wifi-off me-2"></i>
        <div>
          <strong>You're offline!</strong>
          <div className="small">Some features may not work properly.</div>
        </div>
      </div>
      <button
        type="button"
        className="btn-close"
        onClick={() => setShowOfflineMessage(false)}
        aria-label="Close"
      ></button>
    </div>
  );
};

export default NetworkStatus;
