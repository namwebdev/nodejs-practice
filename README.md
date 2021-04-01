# NodeJS - Project 1

### Setup
``` js
npm i
```

### Command:

- Get all Product:
``` js
node src/index.js get
```

- Get Details of Product by ID:
``` js
node src/index.js get-details --id=${product_id}
```

- Create a new Product:

**Example**
``` js
node src/index.js create --title="test Product" --description="Test Description" --price=200000 --amount=1
```

- Update a Product by Id:

**Example**
``` js
node src/index.js update --id=${product_id} --title="change Product" --description="New Description" --price=999999 --amount=99
```

- Delete Product by ID:
``` js
node src/index.js delete --id=${product_id}
```

- Add Product Amount by ID:
``` js
node src/index.js add-quantity --id=${product_id}
```
