# Technical Documentation

## Project Structure
- `index.html` — Page structure (sections, navbar, footer)
- `css/styles.css` — Styling (theme variables, layout, responsiveness, animations)
- `js/script.js` — Main logic (events, filtering, theme handling, form validation)
- `js/component/projects.js` — Project rendering logic (dynamic card generation)
- `js/data/projectsData.js` — Project data (titles, descriptions, categories, tags)

---

## Key UI/UX Decisions
- **Dark theme with accent color** using CSS variables for consistent design and easy theme switching.
- **Light/Dark mode toggle** with persistent user preference using localStorage.
- **Fixed header** to keep navigation accessible at all times.
- **Centered mobile navbar layout**:
  - Theme toggle on the left
  - Logo centered
  - Menu button on the right
- **Dropdown filter** for projects instead of buttons for a cleaner interface.
- **Clear section headings with numbering** to improve readability and navigation.

---

## Responsiveness
- Uses **CSS Grid and Flexbox** for layout.
- Uses **media queries** to adapt across screen sizes:
  - Projects grid switches from 2 columns to 1 column on smaller screens.
  - Skills grid reduces columns for tablet and mobile.
  - Navbar changes to a simplified mobile layout with a hamburger menu.
- Padding and spacing are adjusted for smaller screens to improve readability.

---

## JavaScript Features

### 1. Dynamic Content (Project Rendering)
- Project cards are generated dynamically using data from `projectsData.js`.
- This avoids repeating HTML and allows easy updates by modifying the data file.

### 2. Project Filtering
- Users can filter projects using a dropdown menu.
- Filtering is based on project category.
- Cards are shown/hidden dynamically based on user selection.
- A message is displayed if no projects match the selected category.

### 3. Animation and Transitions
- Project cards use CSS transitions for smooth filtering.
- Cards fade in and out instead of appearing instantly.
- Hover effects provide additional visual feedback.

### 4. Theme Toggle (Data Handling)
- Dark/light mode is implemented using a toggle button.
- The selected theme is stored in `localStorage`.
- The saved theme is applied automatically on page reload.

### 5. Navigation Enhancements
- Header adds a shadow when scrolling.
- Active navigation link updates based on the current section in view.

### 6. Contact Form Validation
- Form inputs are validated before submission.
- Checks include:
  - Empty fields
  - Basic email format validation
- Displays error messages when validation fails.
- Displays a success message after submission.

---

## Accessibility Notes
- Semantic HTML elements are used for structure.
- Images include `alt` attributes.
- Buttons include `aria-label` attributes where needed.
- Color contrast is considered for readability.
- Navigation is usable on both desktop and mobile devices.

---

## Known Limitations
- Contact form is frontend-only (no backend submission).
- Email validation is basic and not fully robust.
- Dropdown styling is limited due to browser default behavior.
- Project data is static (not fetched from an API).