# DAMISYSTEMS

Business automation services website built with React, TypeScript, Vite, and Supabase.

## Environment Variables

This application requires the following environment variables to function properly:

### Required for All Environments

- `VITE_SUPABASE_URL` - Your Supabase project URL (e.g., `https://your-project.supabase.co`)
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous/public key

### Security Notes

- **Only** variables prefixed with `VITE_` are exposed to the client-side code
- The Supabase anonymous key is safe to expose publicly - it only has limited permissions defined by your Row Level Security (RLS) policies
- **Never** include `SUPABASE_SERVICE_ROLE_KEY` in frontend code or environment variables
- All sensitive operations should be performed through Supabase RLS policies or Edge Functions

## Local Development

1. Clone the repository
2. Copy `.env.example` to `.env` (if provided) or create a `.env` file with the required variables above
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

### Environment Variables on Hosting Platforms

When deploying to platforms like Vercel, Netlify, or similar:

1. Go to your project settings on the hosting platform
2. Add the environment variables listed above
3. Ensure you use the same variable names (including the `VITE_` prefix)
4. The variables will be automatically injected at build time

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Database

This project uses Supabase for the database. The following tables are used:

- `contact_submissions` - Stores contact form submissions with RLS enabled

## Security

- All database tables have Row Level Security (RLS) enabled
- Contact form submissions are validated both client-side and server-side
- No secrets or sensitive keys are exposed in the client bundle
- Environment variables are properly managed and excluded from version control
