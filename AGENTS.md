# Agent Guidelines for Personal Portfolio

## Build & Commands
- **Dev**: `npm run dev` - Start Vite dev server
- **Build**: `npm run build` - TypeScript check + Vite build
- **Lint**: `npm run lint` - Run ESLint on all files
- **Preview**: `npm run preview` - Preview production build
- **Tests**: No test suite configured

## Code Style
- **Imports**: Group by external (react, react-icons) then internal (components, shared), no semicolons
- **Components**: Functional components with arrow functions, default exports, PascalCase names
- **Files**: `.tsx` for components, PascalCase for component files
- **Formatting**: Single quotes, no semicolons, 2-space indentation
- **Types**: TypeScript strict mode enabled, explicit types preferred, no `any`
- **Naming**: camelCase variables, SCREAMING_SNAKE_CASE for constants in shared/Strings.tsx
- **Styling**: TailwindCSS utility classes, responsive with `md:` prefix
- **Structure**: Components in `src/components/`, shared constants in `src/shared/`
- **React**: React 19, functional components only, hooks for state management
- **Error Handling**: No explicit error boundaries, handle errors inline
- **ESLint**: Follows recommended TypeScript + React Hooks rules, warn on react-refresh violations
