# TechStore — E-commerce React

Prueba técnica React (#11): catálogo, detalle, carrito y checkout.

## Requisitos cumplidos

- React con hooks (`useState`, `useEffect`, `useContext`)
- `CartContext` para el carrito global
- `react-bootstrap` + Font Awesome
- Llamadas a API REST externa (`api.escuelajs.co`) + catálogo tech local (nombres, COP, imágenes)
- 12 componentes según consigna

## Componentes

| Componente | Descripción |
|------------|-------------|
| NavBar | Logo, link Home, CartWidget |
| CartWidget | Ícono carrito + cantidad |
| ItemListContainer | Fetch productos + saludo |
| ItemList | Lista de Item |
| Item | Card producto |
| ItemDetailContainer | Fetch por ID |
| ItemDetail | Detalle producto |
| ItemQuantitySelector | +/- cantidad |
| AddItemButton | Agregar al carrito |
| CartContext | Estado global carrito |
| Brief | Resumen compra |
| Checkout | Finalizar compra |

## Instalación

```bash
cd react-ecommerce
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000)

## Rutas

| Ruta | Vista |
|------|-------|
| `/` | Catálogo |
| `/item/:id` | Detalle |
| `/cart` | Resumen (Brief) |
| `/checkout` | Checkout |

## Subir a GitHub

```bash
git init
git add .
git commit -m "E-commerce React prueba técnica"
git remote add origin https://github.com/TU_USUARIO/react-ecommerce-tech.git
git push -u origin main
```
