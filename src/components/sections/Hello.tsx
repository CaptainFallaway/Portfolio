import type {
  Profile as ProfileType,
  Welcome as WelcomeType,
} from "@/content/sections/types/hello";

import { HELLO_SECTION } from "@/content/sections/hello";

function Profile({ profile }: { profile: ProfileType }) {
  return (
    <div className="flex gap-4 h-fit justify-center">
      <div>
        <img
          src={profile.avatar.src}
          alt={profile.avatar.alt}
          className="rounded-full size-32"
        />
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h3 className="text-xl font-semibold">{profile.name}</h3>
        <p className="text-lg text-">{profile.role}</p>
      </div>
    </div>
  );
}

function Welcome({ welcome }: { welcome: WelcomeType }) {
  return (
    <div className="flex flex-col gap-4 h-fit justify-center">
      <h1 className="text-3xl font-bold">{welcome.title}</h1>
      <p className="text-lg">{welcome.description}</p>
    </div>
  );
}

export default function Hello() {
  return (
    <div className="flex items-center gap-4 justify-center h-[72vh] w-[82vw] md:w-[68vw]">
      <div className="flex gap-4 md:flex-row flex-col">
        <div className="card p-6 w-full h-fit flex justify-center">
          <div className="flex h-fit w-full items-start">
            <Profile profile={HELLO_SECTION.profile} />
          </div>
        </div>
        <div className="card p-8 w-full h-fit flex justify-center">
          <Welcome welcome={HELLO_SECTION.welcome} />
        </div>
      </div>
    </div>
  );
}
