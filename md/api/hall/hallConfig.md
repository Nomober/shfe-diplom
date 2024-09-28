## Изменение конфигурации посадочных мест в кинозале

## ![POST](../../img/post.svg) / hall/{hallId}

**_Изменяет_** схему кинозала
- Кол-во рядов в кинозале
- Кол-во мест в ряду
- Конфигурацию кинозала

**_Возвращает_** информацию об измененном кинозале

## Параметры:

- **`hallId`** - ID кинозала (Например `34`) конфигурацию которого нужно изменить - указывают в url адресе
- **`rowCount`** - Кол-во рядов в кинозале (число) - передают в теле запроса
- **`placeCount`** - Кол-во мест в одном ряду (число) - передают в теле запроса
- **`config`** - Конфигурация кинозала (двумерный массив) - передают в теле запроса  
Параметр должен передавать в ***строковом формате***  
Более подробное описание конфигурации кинозала см [тут](../alldata.md/#%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BF%D0%BE%D1%81%D0%B0%D0%B4%D0%BE%D1%87%D0%BD%D1%8B%D1%85-%D0%BC%D0%B5%D1%81%D1%82-%D0%B2-%D0%B7%D0%B0%D0%BB%D0%B5-hall_config)
## Пример

```javascript
const arrayConfig = [] // Двумерный массив со схемой кинозала
const params = new FormData()
params.set('rowCount', '10')
params.set('placeCount', '10')
params.set('config', JSON.strigify(arrayConfig))
fetch( 'https://shfe-diplom.neto-server.ru/hall/34', {
    method: 'POST',
    body: params 
})
    .then( response => response.json())
    .then( data => console.log( data ));
```

## Результат (`result`)

```javascript  
{
  id: 1,
  hall_name: "Достоевский",
  hall_rows: 10, 
  hall_places: 10, 
  hall_config: [], 
  hall_price_standart: 100, 
  hall_price_vip: 350, 
  hall_open: 0,
}   
```
