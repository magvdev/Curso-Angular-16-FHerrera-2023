export type MenuItem = {
	label: string;
	icon?: string;
	disabled?: boolean;
	url?: string;
	subItems?: MenuItem[];
}