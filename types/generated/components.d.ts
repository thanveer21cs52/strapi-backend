import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageHomebanner1 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homebanner1s';
  info: {
    displayName: 'homebanner1';
  };
  attributes: {
    button1: Schema.Attribute.String;
    button2: Schema.Attribute.String;
    maintext: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    smalletext: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HomepageHomebanner2 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homebanner2s';
  info: {
    displayName: 'homebanner2';
  };
  attributes: {
    bannerimg1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    bannerimg2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    bannerimg3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    bigtext: Schema.Attribute.Text;
    experince: Schema.Attribute.String;
    imgurl: Schema.Attribute.JSON;
    list: Schema.Attribute.JSON;
    smalltext: Schema.Attribute.String;
    years: Schema.Attribute.String;
  };
}

export interface HomepageHomebanner3 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homebanner3s';
  info: {
    displayName: 'homebanner3';
  };
  attributes: {
    list: Schema.Attribute.JSON;
  };
}

export interface HomepageHomebanner4 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homebanner4s';
  info: {
    displayName: 'homebanner4';
  };
  attributes: {
    dropdown: Schema.Attribute.JSON;
    img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img4: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgurl: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface HomepageHomebanner5 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homebanner5s';
  info: {
    displayName: 'homebanner5';
  };
  attributes: {
    title: Schema.Attribute.Text;
  };
}

export interface HomepageHomebanner6 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homebanner6s';
  info: {
    displayName: 'homebanner6';
  };
  attributes: {
    bigtext: Schema.Attribute.Text;
    imgurl: Schema.Attribute.JSON;
    list: Schema.Attribute.JSON;
    profiles: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    profileslist: Schema.Attribute.JSON;
    smalltext: Schema.Attribute.String;
  };
}

export interface HomepageHomebanner7 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homebanner7s';
  info: {
    displayName: 'homebanner7';
  };
  attributes: {
    bigtext: Schema.Attribute.String;
    compledtext: Schema.Attribute.String;
    img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgsurl: Schema.Attribute.JSON;
    no_projects: Schema.Attribute.String;
    patnersimg: Schema.Attribute.Component<'shared.patners', true>;
    scroll_list: Schema.Attribute.JSON;
    smalltext: Schema.Attribute.String;
  };
}

export interface HomepageHomebanner8 extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homebanner8s';
  info: {
    displayName: 'homebanner8';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    footerdata: Schema.Attribute.JSON;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgurl: Schema.Attribute.String;
    textbig: Schema.Attribute.Text;
    textsmall: Schema.Attribute.String;
    textsmall1: Schema.Attribute.String;
  };
}

export interface ImgImg extends Struct.ComponentSchema {
  collectionName: 'components_img_imgs';
  info: {
    displayName: 'img';
  };
  attributes: {};
}

export interface NavNavList extends Struct.ComponentSchema {
  collectionName: 'components_nav_nav_lists';
  info: {
    displayName: 'nav-list';
  };
  attributes: {
    content1: Schema.Attribute.String;
    content2: Schema.Attribute.String;
    content3: Schema.Attribute.String;
    content4: Schema.Attribute.String;
    content5: Schema.Attribute.String;
    content6: Schema.Attribute.String;
  };
}

export interface NavSocial extends Struct.ComponentSchema {
  collectionName: 'components_nav_socials';
  info: {
    displayName: 'social';
  };
  attributes: {
    text0: Schema.Attribute.String;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
  };
}

export interface ServicesBanner1 extends Struct.ComponentSchema {
  collectionName: 'components_services_banner1s';
  info: {
    displayName: 'banner1';
  };
  attributes: {
    title1: Schema.Attribute.String;
    title2: Schema.Attribute.String;
  };
}

export interface ServicesBanner2 extends Struct.ComponentSchema {
  collectionName: 'components_services_banner2s';
  info: {
    displayName: 'banner2';
  };
  attributes: {
    button: Schema.Attribute.String;
    list: Schema.Attribute.JSON;
    smalltext: Schema.Attribute.String;
    smalltitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesBanner3 extends Struct.ComponentSchema {
  collectionName: 'components_services_banner3s';
  info: {
    displayName: 'banner3';
  };
  attributes: {
    banner3video: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    json: Schema.Attribute.JSON;
    smalltitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesBanner45 extends Struct.ComponentSchema {
  collectionName: 'components_services_banner4_5s';
  info: {
    displayName: 'banner4,5';
  };
  attributes: {
    bannerimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    list: Schema.Attribute.JSON;
    textsmall: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ServicesBanner6 extends Struct.ComponentSchema {
  collectionName: 'components_services_banner6s';
  info: {
    displayName: 'banner6';
  };
  attributes: {
    bigtitle: Schema.Attribute.String;
    lefttoggle: Schema.Attribute.String;
    pricelist: Schema.Attribute.JSON;
    righttoggle: Schema.Attribute.String;
    smalltitle: Schema.Attribute.String;
  };
}

export interface ServicesBanner7 extends Struct.ComponentSchema {
  collectionName: 'components_services_banner7s';
  info: {
    displayName: 'banner7';
  };
  attributes: {
    bgimg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    list: Schema.Attribute.JSON;
    smalltitle: Schema.Attribute.String;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {};
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    nav: Schema.Attribute.Component<'nav.nav-list', true>;
    social: Schema.Attribute.Component<'nav.social', true>;
    url: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPatners extends Struct.ComponentSchema {
  collectionName: 'components_shared_patners';
  info: {
    displayName: 'patners';
  };
  attributes: {
    img_urls: Schema.Attribute.JSON;
    imgs: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.homebanner1': HomepageHomebanner1;
      'homepage.homebanner2': HomepageHomebanner2;
      'homepage.homebanner3': HomepageHomebanner3;
      'homepage.homebanner4': HomepageHomebanner4;
      'homepage.homebanner5': HomepageHomebanner5;
      'homepage.homebanner6': HomepageHomebanner6;
      'homepage.homebanner7': HomepageHomebanner7;
      'homepage.homebanner8': HomepageHomebanner8;
      'img.img': ImgImg;
      'nav.nav-list': NavNavList;
      'nav.social': NavSocial;
      'services.banner1': ServicesBanner1;
      'services.banner2': ServicesBanner2;
      'services.banner3': ServicesBanner3;
      'services.banner4-5': ServicesBanner45;
      'services.banner6': ServicesBanner6;
      'services.banner7': ServicesBanner7;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
      'shared.media': SharedMedia;
      'shared.patners': SharedPatners;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
