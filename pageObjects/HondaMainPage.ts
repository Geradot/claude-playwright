import { Page, Locator } from '@playwright/test';

export class HondaMainPage {
  readonly page: Page;
  readonly signUpButton: Locator;
  readonly facebookLink: Locator;
  readonly youtubeLink: Locator;
  readonly instagramLink: Locator;
  readonly phoneNumber1: Locator;
  readonly phoneNumber2: Locator;
  readonly email1: Locator;
  readonly email2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signUpButton = page.getByRole('link', { name: /^ЗАПИСАТИСЯ$/i });
    this.facebookLink = page.getByRole('link', { name: /^facebook$/i });
    this.youtubeLink = page.getByRole('link', { name: /^youtube$/i });
    this.instagramLink = page.getByRole('link', { name: /^instagram$/i });
    this.phoneNumber1 = page.getByRole('link', { name: /\+38\(067\) 546 12 42/i });
    this.phoneNumber2 = page.getByRole('link', { name: /\+38 \(057\) 704 10 21/i });
    this.email1 = page.getByRole('link', { name: /info@honda\.kh\.ua/i });
    this.email2 = page.getByRole('link', { name: /alfa_motors@honda\.kh\.ua/i });
  }

  async goto() {
    await this.page.goto('https://honda.kh.ua/avto/');
  }

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async clickSignUpButton() {
    await this.signUpButton.click();
  }

  async getSocialMediaLinks() {
    return {
      facebook: this.facebookLink,
      youtube: this.youtubeLink,
      instagram: this.instagramLink
    };
  }

  async getPhoneNumbers() {
    return {
      phone1: this.phoneNumber1,
      phone2: this.phoneNumber2
    };
  }

  async getEmails() {
    return {
      email1: this.email1,
      email2: this.email2
    };
  }
}
