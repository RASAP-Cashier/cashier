export interface IThemePalette {
  surfaces: {
    $surf_primary_1: string;
    $surf_primary_2: string;
    $surf_secondary_1: string;
    $surf_secondary_2: string;
    $surf_secondary_3: string;
    $surf_secondary_4: string;
    $surf_secondary_5: string;
    $surf_approve_1: string;
    $surf_approve_2: string;
    $surf_declined_1: string;
    $surf_declined_2: string;
    $surf_pending_1: string;
    $surf_pending_2: string;
  };
  on: {
    $on_primary: string;
    $on_secondary: string;
    $on_inverse: string;
    $on_disabled: string;
    $on_error: string;
  };
}
