## Изменение стоимости билетов

## ![POST](../../img/post.svg) / price/{hallId}

**_Изменяет_** стоимость билетов в кинозале.  
**_Возвращает_** информацию о кинозале, в котором была изменена стоимость билетов

## Параметры:

- **`hallId`** - ID кинозала  (Например `34`) в котором следует изменить стоимость билетов - указывают в url адресе
- **`priceStandart`** - Стоимость стандартного билета (число) - передают в теле запроса
- **`priceVip`** - Стоимость VIP билета (число) - передают в теле запроса

## Пример

```javascript
const params = new FormData()
params.set('priceStandart', '100')
params.set('priceVip', '300')
fetch( 'https://shfe-diplom.neto-server.ru/price/34', {
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
  hall_price_vip: 300, 
  hall_open: 0,
}   
```
