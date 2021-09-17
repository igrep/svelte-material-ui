import type { SMUIComponent } from './smui.d';
import type Component from './Img.svelte';

export declare class ImgComponentDev extends SMUIComponent {
  /**
   * @private
   * For type checking capabilities only.
   * Does not exist at runtime.
   * ### DO NOT USE!
   */
  $$prop_def: Omit<
    Partial<svelte.JSX.HTMLAttributes<HTMLImageElement>>,
    'use' | 'alt'
  > &
    Component['$$prop_def'];
}