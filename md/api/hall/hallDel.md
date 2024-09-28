## Удаление кинозала

## ![DELETE](../../img/delete.svg) / hall/{hallId}

**_Удаляет_** кинозал из системы.  
**_Возвращает_** список всех кинозалов и сеансов

**_Примечание_** при удалении кинозала автоматически удаляются все сеансы связанные с этим кинозалом

## Параметры:

- **hallId** - ID удаляемого кинозала  (Например `34`) - указывают в url адресе


## Пример

```javascript
fetch( 'https://shfe-diplom.neto-server.ru/hall/34', {
    method: 'DELETE',
})
    .then( response => response.json())
    .then( data => console.log( data ));
```

## Результат (`result`)

```javascript  
{  
  halls: [], // Список кинозалов
  seances: [], // Список сеансов 
}  
```
