import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// CURRENT BEHAVIOR: Redirects to CopMap (our only product)
// FUTURE EXPANSION: When adding more products, replace this file with:
// 1. Products listing page showing all products
// 2. Product cards with links to individual product pages
// 3. Keep individual product pages in /pages/Products/ folder
// 4. Keep product-specific components in /components/Products/ folder
export default function Products() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to CopMap page since it's currently our only product
    navigate("/products/copmap", { replace: true });
  }, [navigate]);

  // This component will never render because of the immediate redirect
  // But we include a fallback just in case
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Redirecting to our products...
        </h2>
        <p className="text-gray-600">
          If you're not redirected automatically, 
          <a href="/products/copmap" className="text-blue-600 hover:underline ml-1">
            click here
          </a>
        </p>
      </div>
    </div>
  );
}