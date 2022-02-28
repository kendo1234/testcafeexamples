import { Selector } from 'testcafe';

fixture`Clicking stuff`
    .page`https://ebay.co.uk`;

test('Do a search', async t => {
    await t
        .typeText('#gh-ac', 'Batarangs')
        .click('#gh-btn')

        .expect(Selector('#mainContent > div.s-answer-region.s-answer-region-center-top > div > div.clearfix.srp-controls__row-2 > div:nth-child(1) > div.srp-controls__control.srp-controls__count > h1 > span:nth-child(2)').innerText).eql('batarangs');

});