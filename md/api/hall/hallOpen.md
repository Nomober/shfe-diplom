## Старт и остановка продаж билетов в кинозал

## ![POST](../../img/post.svg) / open/{hallId}

**_Изменяет_** статус кинозала (открывает/закрывает продажи билетов в конкретном кинозале).  
**_Возвращает_** информацию о кинозале, статус которого был изменен

## Параметры:

- **`hallId`** - ID кинозала  (Например `34`) статус которого нужно изменить - указывают в url адресе
- **`hallOpen`** - новое значение статуса (число) - предают в теле запроса
    - `0` - зал **_закрыт_**
    - `1` - зал **_открыт_**

## Пример

```javascript
const params = new FormData()
params.set('hallOpen', '1')
fetch( 'https://shfe-diplom.neto-server.ru/open/34', {
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
  hall_open: 1,
}   
```
