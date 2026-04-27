# La Dakini

Aplicacion Next.js preparada para ejecutarse en local sin Docker y desplegarse en Vercel.

## Requisitos

- Node.js 22
- pnpm 9.15.9

Si usas Corepack:

```bash
corepack enable
corepack prepare pnpm@9.15.9 --activate
```

## Desarrollo local

```bash
pnpm install
pnpm dev
```

La app queda disponible en `http://localhost:3000`.

## Produccion local

```bash
pnpm build
pnpm start
```

Para usar otro puerto:

```bash
PORT=8080 pnpm start
```

## Variables de entorno

Si se usa el mapa de contacto, define:

```bash
NEXT_PUBLIC_MAPS_API_KEY=...
```

Para que el formulario de contacto envie correos con Resend, define tambien:

```bash
RESEND_API_KEY=...
RESEND_FROM_EMAIL="La Dakini <onboarding@resend.dev>"
```

`RESEND_FROM_EMAIL` puede apuntar a un remitente verificado en Resend. El valor
de arriba sirve como punto de partida para pruebas.

En Vercel, configura las mismas variables desde el panel del proyecto.
