// Gene-Sys: Adam element matchup data: the advantage wheel from
// RoleElementWeaknessData (group 141000000). Every arrow is +30% damage for
// the attacker (weakEffect 13000); attacking against the arrow is -30%
// (7000). Light and Dark are strong against each other, so their strong and
// weak matchup is the same element. Icons are the game's own battleelement_N
// assets on R2 (kept here so pages do not depend on the roster for them).
const R2 = 'https://pub-dd9a9c01bc7a43d0bb977b255815a5c4.r2.dev/gene-sys-adam';

export const GSA_ELEMENT_MATCHUPS = {
  Fire: { id: 1, icon: `${R2}/battleelement_1.webp`, strongVs: 'Wind', weakVs: 'Water' },
  Earth: { id: 2, icon: `${R2}/battleelement_2.webp`, strongVs: 'Water', weakVs: 'Wind' },
  Wind: { id: 3, icon: `${R2}/battleelement_3.webp`, strongVs: 'Earth', weakVs: 'Fire' },
  Water: { id: 4, icon: `${R2}/battleelement_4.webp`, strongVs: 'Fire', weakVs: 'Earth' },
  Light: { id: 5, icon: `${R2}/battleelement_5.webp`, strongVs: 'Dark', weakVs: 'Dark' },
  Dark: { id: 6, icon: `${R2}/battleelement_6.webp`, strongVs: 'Light', weakVs: 'Light' },
};

// Element damage bonus, same for every arrow on the wheel.
export const GSA_ELEMENT_BONUS = 30;
