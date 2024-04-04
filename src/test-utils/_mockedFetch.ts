type IMockedFetch = Pick<Response, 'json' | 'text' | 'status' | 'headers'>;

export const mockedFetch = async ({
  ok = true,
  response,
}: {
  /**
   * @param ok Throw error or not
   * @default true
   */
  ok?: boolean;
  response: unknown | unknown[];
}): Promise<IMockedFetch> =>
  Promise.resolve({
    data: response,
    headers: new Headers({ 'content-type': 'application/json' }),
    json: () => Promise.resolve(response),
    ok,
    status: 200,
    text: () => Promise.resolve(JSON.stringify(response)),
  });
