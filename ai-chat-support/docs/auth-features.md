# Authentication Features

This document outlines the authentication system implemented in this React application.

## Overview

The authentication system includes login, registration, and profile pages with proper routing using React Router. It follows a single-page application (SPA) architecture to ensure smooth navigation without page refreshes.

## Components

### Pages

1. **LoginPage**: 
   - User login form with email and password fields
   - Form validation using Zod and react-hook-form
   - Navigation links to registration page
   - Error handling for login failures

2. **RegisterPage**:
   - User registration form with name, email, and password fields  
   - Form validation using Zod and react-hook-form
   - Navigation links to login page
   - Error handling for registration failures
   - Password visibility toggle

3. **ProfilePage** (not implemented in this codebase but referenced in routes)

### Layouts

1. **AuthLayout**:
   - Provides consistent styling for authentication pages
   - Centers content vertically and horizontally
   - Uses dark theme background suitable for login/registration forms

## Routing

The application uses React Router with the following paths:

- `/login` - Login page
- `/register` - Registration page  
- `/dashboard` - Main dashboard (redirects from root)
- `/profile` - User profile page

## Features Implemented

1. **Form Validation**: Zod schema validation for all forms using react-hook-form
2. **Responsive Design**: Uses Material UI components for responsive layouts
3. **Client-Side Navigation**: Uses React Router Links to prevent full page refreshes
4. **Dark Theme UI**: Consistent dark theme styling throughout authentication pages
5. **Loading States**: Proper loading indicators during API calls
6. **Error Handling**: Graceful error messages for form validation and API failures

## Usage

To navigate between auth pages:
1. Click "Don't have an account? Sign Up" on the login page to go to registration
2. Click "Already have an account? Sign In" on the registration page to go to login
3. All navigation uses client-side routing without page refreshes

## Requirements for Functionality

- React 18+
- React Router DOM v6+
- Material UI v5+
- react-hook-form + zod resolver
- Axios for API requests