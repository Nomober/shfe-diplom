## Получение актуальной схемы зала на выбранный сеанс с учетом даты

## ![GET](../img/get.svg) / hallconfig

**_Возвращает_** актуальную схему зала на выбранный сеанс с учетом даты  
Более подробное описание конфигурации кинозала см [тут](alldata.md/#%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BF%D0%BE%D1%81%D0%B0%D0%B4%D0%BE%D1%87%D0%BD%D1%8B%D1%85-%D0%BC%D0%B5%D1%81%D1%82-%D0%B2-%D0%B7%D0%B0%D0%BB%D0%B5-hall_config)

## Параметры:

- **`seanceId`** - ID сеанса (Например `34`)
- **`date`** - Дата (строка) в формате `YYYY-MM-DD` (Например `2023-12-01`)

## Пример

```javascript
fetch( 'https://shfe-diplom.neto-server.ru/hallconfig?seanceId=34&date=2023-12-01' )
    .then( response => response.json())
    .then( data => console.log( data ));
```

## Результат (`result`)

```javascript  
{  
  [
    ['standart', 'standart', 'vip', 'vip', 'standart', 'standart'],
    ['standart', 'standart', 'vip', 'vip', 'standart', 'standart'],
    ['standart', 'standart', 'vip', 'vip', 'standart', 'standart'],
    ['standart', 'standart', 'vip', 'vip', 'standart', 'standart'],
    ['standart', 'standart', 'vip', 'vip', 'standart', 'standart'],
    ['standart', 'standart', 'vip', 'vip', 'standart', 'standart'],
  ] 
}  
```
