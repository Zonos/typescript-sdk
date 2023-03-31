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
    ok,
    data: response,
    json: () => Promise.resolve(response),
    text: () => Promise.resolve(JSON.stringify(response)),
    headers: new Headers({ 'content-type': 'application/json' }),
    status: 200,
  });
