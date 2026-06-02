# Neuralwerk

Autonome Landingpage fur Neuralwerk, ein AI-Implementierungsstudio fur den deutschen Mittelstand.

## Lokal starten

```bash
npm install
npm run dev
```

## Deployment

Das Projekt ist Vercel-ready und kann direkt aus `viastefan/aistartup` importiert werden.

## Wichtige Dateien

- `app/page.tsx`: Zusammensetzung der Landingpage
- `components/ai-chat-assessment.tsx`: interaktiver AI-Check
- `app/api/assessment/route.ts`: Mock-API fur das Assessment
- `lib/assessment-mock.ts`: spaeterer Einstiegspunkt fur echte AI-Logik
- `app/globals.css`: Designsystem, Farben und Layout
