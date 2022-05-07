
export const localData2 = [];

  for (var i = 0; i < localStorage.length; i++) {
        localData2.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }

