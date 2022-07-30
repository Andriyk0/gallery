Dependencies Node v16.15.1 and higher NPM v6.14.5 and higher,
-Installing Fork and clone this repository Run 'npm install' in your terminal;
-Installing Android emulator;
-Run npx react-native start in one terminal;
-Run npx react-native run-android in second terminal;

Необходимые к применению технологии:
* React-Native
* Redux + Async Redux library (redux-thunk, redux-saga, e.g.)
* es6 (JS) или TypeScript
* Flexbox
* React Navigation
* fetch или axios
Предлагаемые к применению технологии:
* Hooks
* компоненты высшего порядка (High Order Components)
* render props
* ref

Тестовое задание:
Реализовать галерею на базе React-Native (не React.js) которая будет отображать фотографии из unsplash. Это приложение должно извлекать ресурс в формате JSON.
Документация REST API :
[unsplash com/documentation]

Токен к API моно получить или использовать следующие:  [api unsplash com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0] , ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9 или 896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043

Приложение должно содержать два экрана(страницы):
* Список
- мини изображение с названием и автором
- когда пользователь нажимает на изображение, открывается экран фотографии 
* Фотография
- отображает одну фотографию с максимальной площадью.

Предпочтительнее инициировать приложение через React Native CLI с помощью команды - react-native init TestApp, нежели чем через команду - create-react-native-app, если ресурсы вашего компьютера позволяют.