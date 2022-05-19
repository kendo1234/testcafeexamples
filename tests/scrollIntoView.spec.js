import { Selector, ClientFunction } from 'testcafe';

fixture `Scroll page`
    .page `https://www.ebay.co.uk/`
    .beforeEach(async t => {
        await t.resizeWindow(800, 600);
    });

const footer = Selector('#gf-l');

const scrollToElement = ClientFunction((selector, offsetX, offsetY) => {
    const element = selector();

    if (element && element.scrollIntoView)
        element.scrollIntoView();

    else if (offsetX !== void 0 && offsetY !== void 0)
        window.scrollBy(offsetX, offsetY);
});

const scrollBy = ClientFunction((x, y) => {
    window.scrollBy(x, y);
});

test('Scroll with an action', async t => {
    await t.hover(footer);
});
