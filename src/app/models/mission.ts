export interface Mission {
    mission_name: string;
    launch_year: string;
    details: string;
    launch_site: LaunchSite;
    links: Links;
    rocket: Rocket;
}

export interface Links {
    mission_patch_small: string;
    mission_patch: string;
}
export interface Rocket {
    rocket_name: string;
    rocket_type: string;
}

export interface LaunchSite {
    site_name_long: string;
}
  