# 💎 Nexus UI Core

&nbsp;

**Nexus UI** is a high-end, production-ready React component library designed with a focus on **Glassmorphism**, performance, and modularity. Built specifically for modern dashboard interfaces and developer tools that require a sophisticated "Dark Mode" aesthetic.

---

## 🚀 Architectural Overview

Nexus UI follows an **Atomic Design** philosophy. Each component is built to be "stateless" where possible, allowing the consuming application to control behavior while the library handles the heavy lifting of accessibility and complex styling.

&nbsp;

### Key Technical Features:

- **Frosted Glass Aesthetics**: Utilizing `backdrop-blur` and translucent RGBA layers for premium layered depth.
- **React Portals**: The Modal system is rendered via `createPortal` to ensure it exists outside the DOM parent hierarchy, preventing `z-index` and `overflow: hidden` conflicts.
- **Emerald/Slate Design System**: A custom color palette designed for high legibility in low-light environments.
- **Prop-Driven Customization**: Fully typed with `PropTypes` for strict development-time error checking.

---

## 📦 Component API Reference

&nbsp;

### 1. Button Component

The core interaction element with built-in loading states and icon support.

| Prop        | Type      | Options                       | Default   | Description                             |
| :---------- | :-------- | :---------------------------- | :-------- | :-------------------------------------- |
| `variant`   | `string`  | `primary`, `outline`, `ghost` | `primary` | Visual style preset                     |
| `size`      | `string`  | `sm`, `md`, `lg`              | `md`      | Padding and font scale                  |
| `isLoading` | `boolean` | `true`, `false`               | `false`   | Disables button and shows loading state |
| `icon`      | `element` | React Element                 | `null`    | Optional icon slot                      |

&nbsp;

### 2. Card System

A compound component for structured content.

```jsx
<Card>
  <CardHeader>Title</CardHeader>
  <CardBody>Content goes here...</CardBody>
  <CardFooter>Actions</CardFooter>
</Card>

3. Modal (Overlay)

A robust dialog system with background scroll-locking.

Backdrop: 80% opacity Slate-950 with heavy blur.

Dismissal: Supports backdrop-click closure and escape-key handling.

🛠️ Installation & Setup

Install Dependencies:

Bash
npm install
Run Development Environment:

Bash
npm run dev

🎨 Design Philosophy: "Nexus Emerald"
Nexus UI moves away from standard "flat" design. By combining linear gradients (Primary Buttons) with inner borders (ring-1 ring-white/10), we achieve a hardware-like tactile feel. The background uses a deep slate-950 with radial glows to prevent visual fatigue while maintaining a high-contrast ratio for text.


📄 License
Distributed under the MIT License. See LICENSE for more information.
```
