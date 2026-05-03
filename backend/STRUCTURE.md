# Backend Structure

This backend follows a modular feature-based pattern.

## Top-level `src` folders

- `config`: environment setup, app config, third-party config
- `middlewares`: reusable Express middlewares
- `modules`: feature modules such as `contact`, `auth`, `mail`, `blog`
- `shared`: app-wide helpers, constants, types, errors, and utilities

## Module pattern

Each feature module can grow with files like:

- `<feature>.route.ts`
- `<feature>.controller.ts`
- `<feature>.service.ts`
- `<feature>.validation.ts`
- `interfaces/`

## Current module

- `contact`: contact form request validation and placeholder queue flow
