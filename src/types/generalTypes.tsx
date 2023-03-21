import React from "react";

export type referenceLink = {
	title: string;
	href: string;
};

export interface footerLinks extends referenceLink {
	id?: number | string;
}

export interface footerSocialNetworkLinks extends referenceLink {
	id?: number | string;
	logo: string;
}

export interface HeaderLinks extends referenceLink {
	id?: number | string;
}

export type InputTextStateProp = string | number;

export enum InputTextTypeEnum {
	email = "email",
	text = "text",
	password = "password",
	tel = "tel",
	number = "number",
	url = "url",
}
// export interface footerLinks extends referenceLink {
//     id?: number | string,
// }
