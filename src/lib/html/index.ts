const ENTITY_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

export const escape = (str: string) =>
  str.replace(/[&<>"'`=\/]/g, (s) => ENTITY_MAP[s]);
