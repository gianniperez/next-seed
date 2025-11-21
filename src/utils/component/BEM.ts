/**
 * Generates a BEM class from a block, an element, and modifiers.
 *
 * @param block - The main block (e.g., "button").
 * @param modifiers - Optional modifiers (e.g., "large", ["primary", "rounded"]).
 * @returns Class in BEM format.
 */
export function BEM(block: string, modifiers?: string | string[]): string {
  if (!modifiers) return block;

  const mods = Array.isArray(modifiers) ? modifiers : [modifiers];
  return [block, ...mods.map((mod) => `${block}--${mod}`)].join(" ");
}
