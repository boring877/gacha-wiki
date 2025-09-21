/**
 * TypeScript definitions for breadcrumb-generator.js
 */

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export interface BackNavigation {
  href: string;
  text: string;
  parentName: string;
}

export interface BreadcrumbOptions {
  includeHome?: boolean;
  currentPageName?: string | null;
  gameKey?: string | null;
}

export interface BackNavigationOptions {
  gameKey?: string;
  fallbackHref?: string;
}

export interface GameConfig {
  name: string;
  basePath: string;
  patterns: Record<string, string>;
}

export declare function generateBreadcrumbs(
  pathname: string,
  options?: BreadcrumbOptions
): BreadcrumbItem[];

export declare function getParentBreadcrumb(
  breadcrumbs: BreadcrumbItem[]
): BreadcrumbItem | null;

export declare function generateBackNavigation(
  pathname: string,
  options?: BackNavigationOptions
): BackNavigation;

export declare function generateCharacterBreadcrumbs(
  pathname: string,
  characterName: string,
  gameKey: string
): BreadcrumbItem[];

export declare function detectGameKey(pathname: string): string | null;

export declare function getGameConfig(gameKey: string): GameConfig | null;