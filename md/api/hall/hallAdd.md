## Добавление нового кинозала

## ![POST](../../img/post.svg) / hall

**_Добавляет_** новый кинозал в систему.  
**_Возвращает_** список всех кинозалов.

## Параметры:

- **hallName** - Название нового кинозала (строка) - передают в теле запроса


## Пример

```javascript
const params = new FormData()
params.set('hallName', 'Достоевский')
fetch( 'https://shfe-diplom.neto-server.ru/hall', {
    method: 'POST',
    body: params 
})
    .then( response => response.json())
    .then( data => console.log( data ));
```

## Результат (`result`)

```javascript  
{  
  halls: [], // Список кинозалов 
}  
```
