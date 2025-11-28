Questionnaire Application

A modern, fully-typed React + TypeScript questionnaire application built with Vite. This application collects structured feedback from users across 15 questions to help improve organizational insights and job-related data.

Features

Multi-stage Form: Name entry → Questions → Success confirmation
15 Comprehensive Questions: Mix of different input types for varied data collection
Full TypeScript Support: Strongly-typed components and interfaces for better development experience
Progress Tracking: Visual progress bar showing completion status
Input Validation: Ensures all questions are answered before submission
Navigation: Previous/Next buttons to move through questions easily
Responsive Design: Beautiful UI with Tailwind CSS that works on all devices
Supabase Ready: Pre-configured for easy integration with Supabase backend

Tech Stack

Next Js: V 16.0.5
TypeScript: Static typing for JavaScript
Tailwind CSS: Utility-first CSS framework
Lucide React: Icon library
Supabase: Backend database

qa-nextjs-supabase/
├── app/
│ ├── admin/
│ │ └── ....
│ ├── success/
│ │ └── ....
│ ├── survey/
│ │ └── ....
│ ├── icon.png
│ ├── layout.tsx
│ ├── page.tsx
├── src
│ ├── components # Reusable UI
│ │ ├── ui/ # daisy ui components (Button, etc.)
│ │ │ └── ...
│ │ ├── shared/ # Global like SideMenu, BottomNav
│ │ │ └── ....
│ ├── hooks
│ │ └── .....
│ ├── services
│ │ └── .....
│ ├── store # Zustand store
│ │ └── .....
│ ├── styles
│ │ └── .....
│ ├── types/
│ └── .....
├── vite.config.ts # Vite configuration
├── tsconfig.json # TypeScript configuration
├── tailwind.config.js # Tailwind CSS configuration
├── package.json # Dependencies
└── README.md # This file
