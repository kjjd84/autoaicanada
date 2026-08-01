export interface HoneypotData {
    enabled: boolean;
    nameFieldName: string;
    unrandomizedNameFieldName: string;
    validFromFieldName: string;
    encryptedValidFrom: string;
    withCsp: boolean;
}

export interface SiteConfig {
    signInUrl: string;
    phone: string;
    address: string;
    gtmId: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    image: string | null;
    content?: string;
}
