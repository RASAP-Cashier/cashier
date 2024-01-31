export function getQueryParam(paramName: string) {
  const searchParams = new URLSearchParams(document.location.search);
  return searchParams.get(paramName) || '';
}

export function getQueryStringFromObject(obj: any) {
  return `?${new URLSearchParams(obj).toString()}`;
}
