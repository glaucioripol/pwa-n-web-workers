import { useRegisterSW } from "virtual:pwa-register/react";

export const usePWA = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("SW Registered: " + r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  const updateSW = () => {
    updateServiceWorker(true);
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return {
    isInstalled: offlineReady,
    shouldUpdate: needRefresh,
    updateSW,
  };
};
