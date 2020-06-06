import { h } from 'futura-dom';

export const logo = (className: string = '') =>
  h(`svg`, {
    attrs: {
      class: className,
      fill: 'currentColor',
      viewBox: '-108.394 13.989 716.788 122.021'
  } }, [
    h(`path`, {
      attrs: {
        // tslint:disable:max-line-length
        d: `M8.845 104.782h-13.63l7.3-38.91.7-3.33h13.7l-8.07 42.24zm25.99-3.78q-1.73 5.06-8.39 5.06-4.92 0-8.32-5.89-3.45-5.89-4.09-15.49 7.04-12.86 11.9-18.17 4.67-5.06 9.54-5.06 2.62 0 4.51 1.41 1.89 1.41 2.34 3.65-2.18.89-3.2 1.6-2.56 1.92-6.02 6.21l-5.82 6.97q-1.41 1.67-1.99 2.43.96 5.38 3.84 10.69 2.75 5.06 5.7 6.59zm25.47-14.2q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.17 6.02l-3.33 20.35-13.25 1.28 6.53-33.92 10.56-1.28-1.15 6.46q3.13-6.46 10.17-6.46 3.72 0 5.73 1.92 2.02 1.92 2.02 5.86 0 3.93-2.59 6.43-2.6 2.49-7.01 2.49-1.92 0-2.69-.76zm28.67 14.46q-1.98 4.8-8.32 4.8-3.26 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.37-12.42 12.99-1.28-3.9 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.62 3.78zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34t4.83 1.34q1.82 1.35 1.82 3.84 0 2.5-2.01 3.78-2.02 1.28-5.03 1.28-3 0-4.89-1.28-1.89-1.28-1.89-3.78zm34.05 19.08q.89-2.37.89-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.47 1.41 5.25 3.71 3.78 2.31 5.22 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.83-1.47 4.52-1.47 2.68 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.58 4.22 1.54 0 2.56-.96t1.02-2.62q0-3.26-5.5-6.72-4.48-2.94-5.5-4.1-1.73-2.04-1.73-4.6 0-2.56 1.21-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.47 1.67 2.47 4.48 0 2.82-1.7 4.42-1.69 1.6-4.77 1.6-2.11 0-3.13-.7zm44.16 15.36q0 2.81 2.88 3.64-.71 2.37-3.46 3.65-2.3 1.09-4.83 1.09-2.53 0-3.84-.67t-2.02-1.76q-1.15-1.67-1.15-4.8 0-1.86 1.03-6.98l.89-4.86q1.09-5.57 1.09-7.62 0-3.58-1.98-3.58-2.5 0-4.1 3.65-.64 1.4-1.09 3.52l-4.35 21.82-12.86 1.28 9.02-46.08 12.86-1.28-.51 2.56q-1.79 9.86-3.33 13.18 3.59-3.58 10.18-3.58 6.98 0 8.26 4.61.44 1.47.44 2.75t-.09 2.27q-.1.99-.42 2.79l-.83 4.6-1.47 7.24q-.32 1.47-.32 2.56zm23.42 3.58q-1.98 4.8-8.32 4.8-3.26 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.37-12.42 12.99-1.28-3.9 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.62 3.78zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34t4.83 1.34q1.82 1.35 1.82 3.84 0 2.5-2.01 3.78-2.02 1.28-5.03 1.28-3 0-4.89-1.28-1.89-1.28-1.89-3.78zm53.06 11.97q.96-1.92.96-3.71t-.2-2.78q-.19-1-.64-1.76-.96-1.67-2.88-1.67-2.36 0-4.28 1.73-2.05 1.79-2.05 4.61 0 1.79 1.25 3.17 1.24 1.37 3.16 2.65 1.92 1.28 4.1 2.56 2.18 1.28 4.1 2.82 4.41 3.52 4.41 8.25 0 3.2-1.69 5.92-1.7 2.72-4.52 4.71-6.14 4.35-14.27 4.35-6.59 0-9.98-2.14-3.39-2.15-3.39-5.41 0-5.83 4.54-7.3 1.28-.45 3.23-.45t4.19.84q-1.02 2.62-1.02 4.99 0 5.12 3.65 5.12 2.37 0 4.32-1.73 1.95-1.73 1.95-3.68 0-1.95-1.25-3.36t-3.1-2.53q-1.86-1.12-4-2.21-2.15-1.08-4-2.62-4.35-3.52-4.35-9.15 0-3.65 1.79-6.5t4.67-4.77q5.76-3.9 12.83-3.9t10.5 2.11q3.42 2.11 3.42 5.7 0 3.13-2.43 5.12-2.11 1.66-4.67 1.66t-4.35-.64zm60.54 18.88q-4.22 5.83-8.29 8.9-4.06 3.07-8.25 3.07-4.2 0-5.67-.83v-14.08q-3.65 9.73-10.17 13.5-2.37 1.41-4.61 1.41-4.29 0-6.15-.83-.44-14.66-.83-18.72-.38-4.07-.7-6.56-.64-4.99-2.82-7.04 2.75-2.05 6.59-2.05 7.43 0 8.45 9.22.26 2.17.26 4.48 0 3.45-.77 15.48 1.54-.7 3.17-3.23 1.63-2.53 2.97-5.98 3.01-8 3.01-14.91 0-1.09-.29-2.24-.28-1.16-.6-1.48 2.24-1.34 5.66-1.34t5.06 2.34q1.63 2.33 2.08 6.62.51 5.44.51 8.7 0 4.55-.45 11.27 3.2-2.31 5.82-9.86 2.63-7.55 2.63-12.93 0-2.36-.39-3.77 2.12-2.37 5.76-2.37 2.24 0 3.88 1.22 1.63 1.21 1.63 3.48 0 2.28-.67 4.71-.68 2.43-1.76 4.93-2.12 4.99-5.06 8.89zm12 8.77q-1.5-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.48-3.91 4.16-6.72 5.51-5.89 14.6-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.2.77-.2 2.18 0 1.4.87 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43zm13.5-25.98q-.73 1.15-1.37 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.55-1.95 1.51-1.95 2.08-5.41l3.4-18.75q-1.35-1.15-2.92-1.15-1.56 0-2.49.51-.93.51-1.67 1.67zm43.94 9.92q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.17 6.02l-3.33 20.35-13.25 1.28 6.53-33.92 10.56-1.28-1.15 6.46q3.13-6.46 10.17-6.46 3.72 0 5.73 1.92 2.02 1.92 2.02 5.86 0 3.93-2.59 6.43-2.6 2.49-7.01 2.49-1.92 0-2.69-.76zm16.1 16.06q-1.51-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.27 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.33 1.28-4.96 1.28-2.62 0-4.38-.99-1.76-.99-2.27-2.66-1.03 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43zm13.5-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.05 0 3.55-1.95t2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.92.51-1.66 1.67zm15.01 35.52q3.33-.26 5.76-4.42 1.85-3.2 3.07-9.09l5.18-26.75 12.87-1.28-5.44 28.03q-2.11 10.69-5.38 14.21-1.73 1.92-3.97 2.56-2.24.64-4.8.64-5.37 0-7.29-3.9zm15.04-49.16q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34 3 0 4.83 1.34 1.82 1.35 1.82 3.84 0 2.5-2.01 3.78-2.02 1.28-5.03 1.28-3.01 0-4.89-1.28-1.89-1.28-1.89-3.78zm34.49 34.31q-3.32 3.45-9.4 3.45-7.62 0-9.22-5.56-.51-1.67-.51-3.52 0-1.86.38-3.78l3.01-16 12.99-1.28-3.52 18.62q-.13.84-.32 1.73-.19.9-.19 1.83 0 .92.32 1.53t.77.99q.77.52 2.14.52 1.38 0 2.56-1.67 1.19-1.66 1.76-4.54l3.52-17.73 12.61-1.28-4.8 25.15q-2.37 12.29-7.23 17.15-2.5 2.5-5.73 3.49-3.23.99-7.39.99-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.62 1.98-4.13 1.99-1.5 5.06-1.5 2.69 0 4.73 1.15 1.22.7 1.8 1.6-1.48 1.28-1.48 3.39 0 2.82 2.56 2.82 4.23 0 6.66-9.73.7-2.88 1.34-5.95zm21.99 5.31q-1.51-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.51-5.89 14.59-5.89 3.27 0 5.64 1.09l10.94-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.87 2.3.86.9 2.14 1.02-.64 2.18-2.98 3.46-2.33 1.28-4.96 1.28-2.62 0-4.38-.99-1.76-.99-2.27-2.66-1.03 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43zm13.5-25.98q-.73 1.15-1.37 3.1-.64 1.95-1.7 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.58 1.08 1.6 1.08 2.05 0 3.55-1.95 1.51-1.95 2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.49.51q-.93.51-1.67 1.67z`
      }
    })
  ]);