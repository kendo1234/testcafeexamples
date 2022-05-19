import { Selector, RequestMock } from "testcafe";

const collectDataGoogleAnalyticsRegExp = new RegExp(
  "https://www.google-analytics.com/collect"
);

const mockedResponse = Buffer.from([
  0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01,
]);

const mock = RequestMock()
  .onRequestTo(collectDataGoogleAnalyticsRegExp)

  .respond(mockedResponse, 202, {
    "content-length": mockedResponse.length,
    "content-type": "image/gif",
  });

fixture`Mocking`
  .page("https://devexpress.github.io/testcafe/")
  .requestHooks(mock);

test("basic", async (t) => {
  await t
    .click(".get-started-button")

    .debug();
});
