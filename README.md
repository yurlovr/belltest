# bell

Тестовый сервер
https://testbellserv.herokuapp.com/api/data

Есть возможность сменить aдрес запросов.
Параметры у GET и POST не поддерживаются.
При изменении адреса - история изменений стирается.

Ожидается следующая структура данных:
``` javascript
[
  {
    name,
    id,
    items:? [{
      name,
      id,
    }, ...]
},
...
]
```

Сортировка списка выполняется с задержкой 300 мсек.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

