export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Hackpost Guide - Jump Right In!",
	description: "The premier resource hub for hackathon developers. Free. Open Source. Community Driven.",
	navItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Updates",
      href: "/updates",
    },
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Updates",
			href: "/updates",
		},
		{
			label: "Login / Sign Up",
			href: "/",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg",
	},
};
