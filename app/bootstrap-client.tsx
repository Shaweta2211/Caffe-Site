// app/bootstrap-client.tsx
"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import bootstrap JS only on client side
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
