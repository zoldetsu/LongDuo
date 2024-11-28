interface ICookie {
  name: string;
  value?: [];
  days?: number;
}

export function setCookie(name: string, value: string[], days: number) {
  if (!days) {
    return console.log("ошибка в указании времени");
  }

  if (!value) return console.log("ошибка в получении значения");

  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  /*
   * В cookie должны быть строки.Конвертируем массив в строку с помощью .join(","):
   */
  document.cookie = `${name}=${value.join(",")}; ${expires}; path=/`;
}

export function getCookie(name: string) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;

  cArray.forEach((element) => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1);
    }
  });

  return result;
}

export function deleteCookie(name: string) {
  setCookie(name, "", -1);
}
