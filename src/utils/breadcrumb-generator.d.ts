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
  _pathname: string,
  _options?: BreadcrumbOptions
): BreadcrumbItem[];

export declare function getParentBreadcrumb(_breadcrumbs: BreadcrumbItem[]): BreadcrumbItem | null;

export declare function generateBackNavigation(
  _pathname: string,
  _options?: BackNavigationOptions
): BackNavigation;

export declare function generateCharacterBreadcrumbs(
  _pathname: string,
  _characterName: string,
  _gameKey: string
): BreadcrumbItem[];

export declare function detectGameKey(_pathname: string): string | null;

export declare function getGameConfig(_gameKey: string): GameConfig | null;
