# Form Builder
    A drag-and-drop form builder application that allows users to create dynamic forms with configurable fields, rules, and real-time previews. Built with React, Zustand, and @dnd-kit, it supports exporting form structures as JSON for seamless integration.
## 📖 Overview
    The Form Builder enables users to:

        * Drag and drop fields (Text, Select, Radio, Checkbox, Date, etc.) to create custom forms.
        * Configure rules, e.g., show "Programming Language" field if "Industry" is "IT".
        * Preview forms in real-time to test logic.
        * Export form configurations as JSON, including fields, rules, and validations.

    This project is ideal for creating dynamic forms for surveys, data collection, or business applications.
## 🎯 Features

### Drag-and-Drop Interface:
    Drag fields from a sidebar to a canvas to build forms.


### Field Rules:
    Define conditional logic (if-then) for fields, e.g., show/hide based on user input.


### Real-Time Preview:
    Test form logic and interactions via a preview modal.


### JSON Export:
    Export form structure (fields, types, rules, validations) as JSON.



## 🧱 Component Structure

    * FormBuilderPage.jsx: Main page orchestrating the form builder UI.
    * FFieldPalette.jsx: Sidebar with draggable field types (Text, Select, etc.).
    * FFormCanvas.jsx: Canvas where fields are dropped to create the form.
    * FFieldEditorDrawer.jsx: Drawer for configuring field properties (label, placeholder, rules).
    * FFormPreviewModal.jsx: Modal for previewing and testing the form.
    * FuseFormBuilderStore.js: Zustand store for managing global state.

## 📦 Technologies
### Purpose                    Library
    * Drag & Drop
    * State Management
    * UI Components
    * Form Preview
    * Utilities
    * Drag & Drop
    * Drag & Drop
### Library
    * @dnd-kit/core, @dnd-kit/sortable
    * zustand
    * shadcn/ui, tailwindcss
    * react-hook-form, yup (validation)
    * uuid (unique field IDs)

## Usage

    * Drag Fields: Drag field types from the left sidebar to the canvas.
    * Configure Fields: Click a field on the canvas to open the editor drawer and set properties (label, rules, etc.).
    * Set Rules: Define if-then logic in the editor drawer, e.g., show a field based on another field's value.
    * Preview Form: Click the Preview button to test the form with real-time logic.
    * Export JSON: Use the Export button to download the form structure as JSON.

## 🧱 Proposed Component Structure
    * FormBuilderPage.jsx: Main page.
    * FieldPalette.jsx: Sidebar containing draggable field types.
    * FormCanvas.jsx: Canvas where users drop fields to build the form.
    * FieldEditorDrawer.jsx: Drawer for configuring field details (label, placeholder, rules, etc.).
    * FormPreviewModal.jsx: Modal for previewing the built form.
    * useFormBuilderStore.js: Zustand store for global state management.
