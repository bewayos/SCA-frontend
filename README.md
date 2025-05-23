# Spy Cat Agency — Frontend UI

This project implements the frontend part of the Spy Cat Agency management system. It provides a minimal, production-style interface for managing spy cats via a REST API.

> **Note:** The scope of this frontend is limited to the `Cats` entity as defined in the assessment requirements. Missions and Targets are not part of the UI implementation.

---

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- TypeScript
- Tailwind CSS
- REST API integration
- Custom feedback component (`Alert`)

---

## Features

- View all spy cats
- Create a new spy cat with form validation
- Delete existing cats
- Inline user feedback (success/error)

---

## Project Structure

src/
├── app/
│ ├── page.tsx # Root navigation page
│ └── spy-cats/page.tsx # Main management screen
├── components/
│ ├── CatForm.tsx
│ ├── CatList.tsx
│ └── Alert.tsx
├── types/
│ └── cat.ts

---

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone (https://github.com/bewayos/SCA-frontend)
   cd spy-cat-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create `.env.local` and set the backend base URL:**

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
   ```

4. **Start development server:**

   ```bash
   npm run dev
   ```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Pages

### `/`

- Minimal landing page
- Link to spy cat dashboard
- Informational banner using `<Alert />`

### `/spy-cats`

- Displays list of spy cats from API
- Form to create a new cat
- Delete functionality
- All operations use `fetch` with proper error handling

---

## API Endpoints Used

- `GET /cats`
- `POST /cats`
- `DELETE /cats/{id}`

Backend must be available and CORS-enabled.

---

## Limitations

- This frontend does **not** implement missions, targets, assignment, or note handling
- No persistent authentication or backend validation beyond status codes
- No PATCH for salary

---

## Manual Test Scenarios

- Add valid cat → appears in list
- Add cat with invalid breed → shows error
- Delete cat → disappears from list
- Reload page → persists data via API
- API not available → error message shown

---

## License

MIT — for educational/testing use.
