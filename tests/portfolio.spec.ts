import { expect, test } from "@playwright/test";

// Do not send test traffic to the owner's production analytics property.
test.beforeEach(async ({ context, page }) => {
  await context.route(/googletagmanager\.com|google-analytics\.com/, (route) =>
    route.abort(),
  );
  page.on("pageerror", (error) => {
    throw error;
  });
});

test("hero and header navigate to the right sections", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Muhammad Farhan | Data & Systems Portfolio");
  await page.getByRole("link", { name: "Explore my work" }).click();
  await expect(page).toHaveURL(/#work$/);
  await expect(
    page.getByRole("heading", { name: "Ideas, built into projects." }),
  ).toBeInViewport();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Contact" })
    .click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(
    page.getByRole("heading", { name: "Have a project in mind?" }),
  ).toBeInViewport();
});

test("filters combine with normalized search and reset an empty result", async ({
  page,
}) => {
  await page.goto("/#work");
  const cards = page.locator(".project-card");
  await expect(cards).toHaveCount(7);
  await page
    .getByRole("button", { name: "Spatial analytics", exact: true })
    .click();
  await expect(cards).toHaveCount(1);
  await expect(cards).toContainText("P4I Spatial Analytics");
  await expect(
    page.getByRole("button", { name: "Spatial analytics", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page
    .getByRole("searchbox", { name: "Search projects" })
    .fill(" React ");
  await expect(page.getByRole("status")).toHaveText("0 projects");
  await expect(
    page.getByRole("heading", { name: "No matching projects" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await expect(cards).toHaveCount(7);
  await expect(page.getByRole("searchbox")).toHaveValue("");
  await page.getByRole("searchbox").fill("  pOsTgIs  ");
  await expect(cards).toHaveCount(1);
  await expect(cards).toContainText("P4I Spatial Analytics");
  await page.getByRole("searchbox").fill("");
  for (const [category, title] of [
    ["Information systems", "KampusHub"],
    ["Web platforms", "P4I Corporate Hub"],
    ["Personal apps", "My Cat"],
    ["Digital commerce", "NGA Florist"],
  ]) {
    await page.getByRole("button", { name: category, exact: true }).click();
    await expect(cards).toHaveCount(1);
    await expect(cards).toContainText(title);
  }
});

test("publishing filter shows both publishing projects and search narrows them", async ({
  page,
}) => {
  await page.goto("/#work");
  await page
    .getByRole("button", { name: "Academic publishing", exact: true })
    .click();
  await expect(page.locator(".project-card")).toHaveCount(2);
  await expect(page.locator(".project-card")).toContainText([
    "P4I Publisher E-book",
    "OJS Journal Development",
  ]);
  await page.getByRole("searchbox").fill("Laravel");
  await expect(page.locator(".project-card")).toHaveCount(1);
  await expect(page.locator(".project-card")).toContainText(
    "P4I Publisher E-book",
  );
});

test("last case study cycles back to the first and OJS credits the upstream platform", async ({
  page,
}) => {
  await page.goto("/work/my-cat");
  await page.getByRole("link", { name: "Next: P4I Spatial Analytics" }).click();
  await expect(page).toHaveURL("/work/p4i-webgis");
  await page.goto("/work/ojs-journal-development");
  await expect(page.locator(".project-attribution")).toContainText(
    "Public Knowledge Project (PKP)",
  );
});

test("theme toggles the resolved system preference and persists", async ({
  page,
}, testInfo) => {
  const startsDark = testInfo.project.use.colorScheme === "dark";
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(startsDark ? /dark/ : /light/);
  await page
    .getByRole("button", {
      name: `Switch to ${startsDark ? "light" : "dark"} theme`,
    })
    .click();
  await expect(page.locator("html")).toHaveClass(startsDark ? /light/ : /dark/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(startsDark ? /light/ : /dark/);
  await page
    .getByRole("button", {
      name: `Switch to ${startsDark ? "dark" : "light"} theme`,
    })
    .click();
  await expect(page.locator("html")).toHaveClass(startsDark ? /dark/ : /light/);
});

for (const [slug, title, stage] of [
  ["p4i-webgis", "P4I Spatial Analytics", "In development"],
  ["kampushub", "KampusHub", "Interactive prototype"],
  ["nga-florist", "NGA Florist", "Browser demo"],
  ["p4i-corporate-hub", "P4I Corporate Hub", "Implemented / under review"],
  ["p4i-publisher-ebook", "P4I Publisher E-book", "In development"],
  ["ojs-journal-development", "OJS Journal Development", "Prepared for review"],
  ["my-cat", "My Cat", "In development"],
]) {
  test(`case study ${slug} supports navigation, direct loading, and evidence links`, async ({
    page,
  }) => {
    await page.goto("/#work");
    await page.getByRole("link", { name: `Read ${title} case study` }).click();
    await expect(page).toHaveURL(`/work/${slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(title);
    await expect(page).toHaveTitle(`${title} | Muhammad Farhan`);
    await expect(page.locator(".case-meta")).toContainText(stage);
    await expect(
      page.getByRole("heading", { name: "Where it goes next" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /View repository/ }),
    ).toHaveAttribute("href", /^https:\/\/github\.com\/HannR002\//);
    await page.reload();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(title);
    await page
      .getByRole("link", { name: "All projects", exact: true })
      .first()
      .click();
    await expect(page).toHaveURL(/\/#work$/);
  });
}

test("unknown projects return a useful 404", async ({ page }) => {
  const response = await page.goto("/work/not-a-real-project");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "This page isn’t here.",
  );
  await page.getByRole("link", { name: "Back to projects" }).click();
  await expect(page).toHaveURL(/\/#work$/);
});

test("contact links use actual owner destinations and external links are safe", async ({
  page,
}) => {
  await page.goto("/");
  const contact = page.locator("#contact");
  await expect(
    contact.getByRole("link", { name: "Email", exact: true }),
  ).toHaveAttribute("href", "mailto:mf13132504@gmail.com");
  await expect(contact.getByRole("link", { name: /WhatsApp/ })).toHaveAttribute(
    "href",
    "https://wa.me/6289699161526",
  );
  await expect(contact.getByRole("link", { name: /GitHub/ })).toHaveAttribute(
    "href",
    "https://github.com/HannR002",
  );
  for (const link of await page.locator('a[target="_blank"]').all()) {
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
  expect(
    await page
      .locator(
        'a[href="#"], a[href="https://linkedin.com"], a[href="https://upwork.com"]',
      )
      .count(),
  ).toBe(0);
});

test("keyboard users can skip navigation and operate category filters", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);
  const filter = page.getByRole("button", {
    name: "Digital commerce",
    exact: true,
  });
  await filter.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".project-card")).toHaveCount(1);
  await expect(page.locator(".project-card")).toContainText("NGA Florist");
});

test("small viewports do not overflow and reduced motion is respected", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 320, height: 740 });
  for (const path of [
    "/",
    "/work/p4i-webgis",
    "/work/kampushub",
    "/work/nga-florist",
    "/work/p4i-corporate-hub",
    "/work/p4i-publisher-ebook",
    "/work/ojs-journal-development",
    "/work/my-cat",
  ]) {
    await page.goto(path);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  await page.goto("/");
  expect(
    await page
      .locator(".hero-copy")
      .evaluate((node) => getComputedStyle(node).animationName),
  ).toBe("none");
  expect(
    await page
      .locator("html")
      .evaluate((node) => getComputedStyle(node).scrollBehavior),
  ).toBe("auto");
});

test("core content and case study navigation remain available without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}/`);
  await expect(page.locator(".project-card")).toHaveCount(7);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByRole("link", { name: "Read NGA Florist case study" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "NGA Florist",
  );
  await context.close();
});
