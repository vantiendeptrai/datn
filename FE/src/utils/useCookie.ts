export function setCookie(
  name: string,
  value: string,
  expirationTimeInHours: number
) {
  const expirationDate = new Date();

  expirationDate.setTime(
    expirationDate.getTime() + expirationTimeInHours * 60 * 1000
  );

  const cookieString = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;

  document.cookie = cookieString;
}

export function getCookie(cookieName: string) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return "";
}
