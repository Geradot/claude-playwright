import { Page, Locator } from '@playwright/test';

export class TestDrivePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly facebookLink: Locator;
  readonly youtubeLink: Locator;
  readonly instagramLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: /Записатися на тест-драйв/i });
    this.facebookLink = page.getByRole('link', { name: /facebook/i });
    this.youtubeLink = page.getByRole('link', { name: /youtube/i });
    this.instagramLink = page.getByRole('link', { name: /instagram/i });
  }

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async getSocialMediaLinks() {
    return {
      facebook: this.facebookLink,
      youtube: this.youtubeLink,
      instagram: this.instagramLink
    };
  }
}
