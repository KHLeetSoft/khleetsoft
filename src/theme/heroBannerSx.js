/**
 * Shared hero / page banner — light, airy surface with a soft brand hint.
 */
export const heroBannerSx = {
  position: 'relative',
  overflow: 'hidden',
  color: 'text.primary',
  background:
    'linear-gradient(180deg, #ffffff 0%, #f7f9fc 38%, #f0f4f9 100%)',
  borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(ellipse 90% 55% at 92% -10%, rgba(156, 35, 64, 0.06) 0%, transparent 52%), radial-gradient(ellipse 70% 50% at 0% 100%, rgba(148, 163, 184, 0.08) 0%, transparent 55%)',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    background: 'linear-gradient(90deg, transparent, rgba(15, 23, 42, 0.05), transparent)',
    pointerEvents: 'none',
  },
};

export const heroContentZ = {
  position: 'relative',
  zIndex: 1,
};
