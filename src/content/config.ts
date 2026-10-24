import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    fecha: z.date(),
    autor: z.string().default('Cuerpo Técnico TDM Loncoche'),
    categoria: z.enum(['Resultados', 'Convocatorias', 'Torneos', 'Institucional']).default('Institucional'),
    imagen: z.string().optional(),
    imagenFoco: z.enum(['top', 'center', 'bottom']).default('top'),
    destacada: z.boolean().default(false),
  }),
});

export const collections = { noticias };
