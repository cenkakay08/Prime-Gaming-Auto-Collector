async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  window.location.href.includes("dp") ? await collectLoot() : await visitTabs();
}

async function visitTabs() {
  const tabs = ["InGameLoot", "Game"] as const;

  for (const tab of tabs) {
    await pressButton(tab);
    await wait(100);
    scrollPageToBottom();
    await wait(100);
    await openLootTabs(tab);
    await wait(100);
  }
}

async function pressButton(type: "InGameLoot" | "Game" | "Collect") {
  let isButtonClicked = false;

  while (!isButtonClicked) {
    try {
      (await checkButtonInPromise(type)).click();
      isButtonClicked = true;
    } catch (error) {
      isButtonClicked = false;
    }
  }
}

async function checkButtonInPromise(type: "InGameLoot" | "Game" | "Collect") {
  return new Promise<HTMLAnchorElement>((resolve, reject) => {
    let query = "";
    switch (type) {
      case "InGameLoot":
        query = '[data-type="InGameLoot"]';
        break;

      case "Game":
        query = '[data-type="Game"]';
        break;

      case "Collect":
        query = '[data-a-target="buy-box_call-to-action"]';
        break;
    }

    const gameLootButton = document.querySelector(query);

    if (gameLootButton) {
      resolve(gameLootButton as HTMLAnchorElement);
    } else {
      setTimeout(() => reject(false), 100);
    }
  });
}

function scrollPageToBottom() {
  document.getElementById("root")!.scrollTo(0, Number.MAX_SAFE_INTEGER);
}

async function openLootTabs(tab: "InGameLoot" | "Game") {
  const tabElement = document.querySelector(
    tab === "InGameLoot"
      ? '[data-a-target="offer-list-IN_GAME_LOOT"]'
      : '[data-a-target="offer-list-FGWP_FULL"]'
  )!;
  const buttonsOrAnchors = tabElement.querySelectorAll(
    '[class="tw-interactive tw-button"]'
  );

  for (const buttonOrAnchor of Array.from(buttonsOrAnchors) as (
    | HTMLAnchorElement
    | HTMLButtonElement
  )[]) {
    const href = buttonOrAnchor.getAttribute("href");
    href ? window.open(href, "_blank") : buttonOrAnchor.click();

    await wait(100);
  }
}

async function collectLoot() {
  await pressButton("Collect");

  let isStateJustClaimed = false;

  while (!isStateJustClaimed) {
    const stateJustClaimed = document.querySelector(
      '[data-a-target="header-state_JustClaimed"]'
    )!;

    if (stateJustClaimed) {
      isStateJustClaimed = true;
    } else {
      isStateJustClaimed = false;
    }

    await wait(100);
  }

  window.close();
}

main();
