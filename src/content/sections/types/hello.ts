import type { Picture } from "./common"

export interface Profile {
  name: string;
  role: string;
  avatar: Picture;
}

export interface Welcome {
  title: string;
  description: string;
}

export interface HelloSection {
  profile: Profile;
  welcome: Welcome;
}