# API сервиса

## Основные концепции

Обратите внимание, все запросы вам необходимо совершать по основному адресу API:
*https://shfe-diplom.neto-server.ru/*. Например:

```js
fetch( 'https://shfe-diplom.neto-server.ru/alldata' )
    .then( response => response.json())
    .then( console.log );
```§

Ответ по всем доступным адресам API предоставляется в формате JSON и имеет вид
```javascript  
{  
  success: true, // Успех
  result: {} // Тут будет хранится ответ от сервера
}  
```
или
```javascript
{  
  success: false, // Не успех 
  error: "Сообщение об ошибке"
}  
```
Слева от каждого адреса располагается метод запроса: ![GET](img/get.svg), ![POST](img/post.svg) или ![DELETE](img/delete.svg).
Справа - адрес запроса относительно хоста (*https://shfe-diplom.neto-server.ru/*).

Для передачи данных через ![POST](img/post.svg) запросы можете воспользоваться объектом [FormData](https://developer.mozilla.org/ru/docs/Web/API/FormData)

### Основные функции API

1. [Получение актуальных данных о залах фильмах и сеансах](./api/alldata.md)
2. [Авторизация (для админской части)](./api/login.md)
3. [Добавление нового кинозала](api/hall/hallAdd.md)
4. [Удаление кинозала](api/hall/hallDel.md)
5. [Изменение конфигурации посадочных мест в кинозале](api/hall/hallConfig.md)
6. [Изменение стоимости билетов](api/hall/hallPrice.md)
7. [Старт и остановка продаж билетов в кинозал](api/hall/hallOpen.md)
8. [Добавление нового фильма](api/film/filmAdd.md)
9. [Удаление фильма](api/film/filmDel.md)
10. [Добавление нового сеанса](api/seance/seanceAdd.md)
11. [Удаление сеанса](api/seance/seanceDel.md)
12. [Получение актуальной схемы зала на выбранный сеанс с учетом даты](api/hallconfig.md)
13. [Покупка билетов](api/ticket.md)

