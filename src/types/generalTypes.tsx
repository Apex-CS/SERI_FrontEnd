export type referenceLink = {
    title: string,
    href: string,
}

export interface footerLinks extends referenceLink {
    id?: number | string,
}

export interface footerSocialNetworkLinks extends referenceLink {
    id?: number | string,
    logo: string,

}

export interface HeaderLinks extends referenceLink {
    id?: number | string,
}

// export interface footerLinks extends referenceLink {
//     id?: number | string,
// }


