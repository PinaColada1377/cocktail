class HashStorage {

  constructor() {
    // публичные свойства добавляются в this в конструкторе
    this.drinkRecipe = {};
  }

  // записывает в хэш указанное значение под указанным ключом
  addValue(key, value) {

    this.drinkRecipe[key] = value;
  }

  // возвращает значение под указанным ключом, если нету вернет false
  getValue(key) {

    return this.drinkRecipe[key]
  }

  // удаляет значение под указанным ключом и возвращает true, если нету вернет false
  deleteValue(key) {

    if (key in this.drinkRecipe) {
      delete this.drinkRecipe[key];
      return true;
    }
    else return false;
  }

  // возвращает массив ключей хранилища
  getKeys() {

    return Object.keys(this.drinkRecipe);
  }

}

const coctailsStorage = new HashStorage;

function createValue() {
  const name = prompt("Введите названия напитка");
  const alco = confirm("Если напиток алкогольный нажмите 'Ок', если нет нажмите 'Отмена'");
  const recipe = prompt("Введите рецепт приготовления напитка");

  coctailsStorage.addValue(name, { a: alco, r: recipe });
}

function getcocktailInfo() {

  const name = prompt("Введите название напитка");

  const nameInfo = coctailsStorage.getValue(name);

  if (nameInfo !== undefined) {
    alert("Напиток " + name + "\nалкогольный: " + ((nameInfo.a) ? "да" : "нет") + "\nрецепт приготовления: \n" + nameInfo.r);
  }
  else alert("Данного напитка нет в хранилище");
}

function deleteCocktail() {

  const name = prompt("Введите название напитка, который нужно удалить");


  alert((coctailsStorage.deleteValue(name)) ? "Удалено" : "такого напитка не было в хранилище");
}

function getCocktail() {

  const data = coctailsStorage.getKeys();

  if (data.length === 0) alert("В хранилище нет напитков");
  else alert("Напитки в хранилище: " + data);
}
