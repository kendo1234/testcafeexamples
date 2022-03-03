import { Selector } from 'testcafe';

fixture`Clicking stuff`
    .page`https://ebay.co.uk`;

test('Do a search', async t => {
    await t
        .typeText('#gh-ac', 'Batarangs')
        .click('#gh-btn')
});
