# Backend Structure

This backend now follows a modular feature-based pattern with shared config and middleware layers.

## Top-level `src` folders

- `config`: environment loading and validation
- `middlewares`: centralized Express middleware such as error handling
- `modules`: feature modules such as `contact` and `mail`
- `shared`: reusable app-wide helpers and error classes

## Current modules

- `contact`: request validation, controller, service, and email template
- `mail`: reusable NodeMailer transport and send helper

## Recommended module pattern

Each future feature module can grow with files like:

- `<feature>.route.ts`
- `<feature>.controller.ts`
- `<feature>.service.ts`
- `<feature>.validation.ts`
- `<feature>.template.ts`
- `interfaces/`
