-- Insert initial course
INSERT INTO public.courses (name, description, duration_weeks, price, is_active)
VALUES (
  'Curso de IA para Niños',
  'Aprende los fundamentos de la Inteligencia Artificial de forma divertida y práctica. 5 semanas de aprendizaje con proyectos reales.',
  5,
  300.00,
  TRUE
)
ON CONFLICT DO NOTHING;
