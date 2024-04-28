const Cookie = {
  /**
   * @param cookieName name of cookie that should be string, like: "example"
   * @param cookieValue value of cookie which can recevie any value
   * @param expireDays? an optional param that number of days to expire
   */
  setCookie(cookieName: string, cookieValue: any, expireDays?: number): void {
    let expires = "";
    if (expireDays) {
      const d = new Date();
      d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
      expires = ";expires=" + d.toUTCString();
    }
    document.cookie =
      cookieName + "=" + JSON.stringify(cookieValue) + expires + ";path=/";
  },

  /**
   * @param cookieName name of existing cookie
   * @return value of cookie | null
   */
  getCookie<TValue>(cookieName: string): TValue | null {
    const name = cookieName + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return JSON.parse(c.substring(name.length, c.length));
      }
    }
    return null;
  },

  /**
   * @param cookieName name of existing cookie
   */
  deleteCookie(cookieName: string): void {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  },

  /**
   * @description delete all cookies
   */
  deleteAllCookies(): void {
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      document.cookie = `${ca[i]}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  },
};

export default Cookie;
