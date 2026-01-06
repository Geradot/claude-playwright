---
alwaysApply: true
---

# Coding Guidelines for Playwright-MCP Project

## 1. File Interaction
- Always interact only with files located in the workspace root directory.
- Do not read or modify files outside the workspace root.
- **IMPORTANT**: Use relative paths from the workspace root. Do NOT create nested folders with the same name as the workspace root.

## 2. Page Object Model (POM)
- **MANDATORY**: Every test spec MUST have corresponding page object files.
- Always use the **Page Object Model (POM)** pattern for structuring UI automation code.
- Store all page object files in: `pageObjects` (relative to workspace root)
- **NEVER create spec files without creating their corresponding page objects first**.
- All locators and page interactions must be defined in page objects, not in spec files.


## 3. Spec Files
- Always create spec/test files in: `specs` (relative to workspace root).
- Do not place spec files outside this folder.
- **IMPORTANT**: All assertions must be in specs, not POM.

## 4. MCP Usage
- All navigation, assertion, AND LOCATOR DISCOVERY must be performed via playwright-mcp.
- Use MCP browser/inspector to derive selectors, do not guess or hardcode without MCP validation.
- For every new/changed locator:
  - Validate via MCP.
  - Prefer role/name, label, placeholder, accessible names, or test IDs exposed in DOM.
  - Use regular expression for "name" attribute if possible (to avoid finding two more elements).

## 5. Prevent Auto-Generated / Random Spec Files
- Do not allow LLM or MCP to create random spec files like `urltest_<uuid>.spec`.
- Ensure AI-generated spec files are only created in `specs` (relative to workspace root).

## 6. General Notes
- Follow consistent naming conventions for pages and specs.
- Keep code modular and reusable within the defined folder structure.
- Review MCP logs to debug test execution if necessary.
- Do not write comments and docs for simple functions or operations.
- Always try to use English when creating names of functions, classes, and variables. Try to translate on English from original language. If it is impossible or hard, write the comment (docs) about it, and then it’s up to you how to name these objects.