# Products Components

This folder contains components specific to product pages.

## Current Structure

### CopMap Components
- `CopMapHero.jsx` - Hero section for CopMap page
- `CopMapFeatures.jsx` - Main features and demo section
- `CopMapStats.jsx` - Impact statistics section
- `CopMapCTA.jsx` - Call-to-action section

## Adding New Products

When adding a new product (e.g., "NewProduct"), follow this pattern:

### 1. Create Product Components
```
src/components/Products/
├── NewProductHero.jsx
├── NewProductFeatures.jsx
├── NewProductStats.jsx
└── NewProductCTA.jsx
```

### 2. Create Product Page
```
src/pages/Products/NewProductPage.jsx
```

### 3. Update Main Products Page
Replace the redirect in `src/pages/Products.jsx` with a proper products listing page.

### 4. Update Routing
Add the new route in `src/App.jsx`:
```jsx
<Route path="/products/newproduct" element={<NewProductPage />} />
```

### 5. Update Navigation
Update the dropdown in `src/components/Navbar/Navbar.jsx` to include the new product.

## Component Naming Convention
- Use PascalCase for component names
- Prefix with product name (e.g., `CopMapHero`, `NewProductHero`)
- Keep components focused on single responsibility
- Use shared components from `../shared/` when possible