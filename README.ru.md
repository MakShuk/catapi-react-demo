# Демо React-приложение с GitHub Pages

<p align="right">
  <a href="README.md"><img src="https://img.shields.io/badge/English-blue?style=for-the-badge&logo=github" alt="English"></a>
</p>

![Лицензия](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-blue?logo=tailwind-css)

Это демонстрационное React-приложение с настроенным деплоем на GitHub Pages.

## Оглавление
- [Предварительные требования](#предварительные-требования)
- [Установка](#установка)
- [Локальная разработка](#локальная-разработка)
- [Деплой на GitHub Pages](#деплой-на-github-pages)
- [Настройка GitHub Pages](#настройка-github-pages)
- [Структура проекта](#структура-проекта)
- [Доступные скрипты](#доступные-скрипты)
- [Технологии](#технологии)
- [Лицензия](#лицензия)

## Предварительные требования

- Node.js (версия 14 или выше)
- npm (устанавливается вместе с Node.js)
- Git
- Аккаунт GitHub

## Установка

1. Клонируйте репозиторий:
```bash
git clone [URL вашего репозитория]
cd catapi-react-demo
```

2. Установите зависимости:
```bash
npm install
```

## Локальная разработка

Для запуска приложения локально:
```bash
npm run start:dev
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

## Деплой на GitHub Pages

1. В файле `package.json` добавьте или измените поле `homepage`:
```json
{
  "homepage": "https://[ваш-username].github.io/[имя-репозитория]",
  ...
}
```

2. Создайте новую ветку gh-pages (если её ещё нет):
```bash
git checkout -b gh-pages
git push origin gh-pages
```

3. Выполните деплой:
```bash
npm run deploy
```

Этот скрипт автоматически:
- Соберёт проект (`npm run build`)
- Отправит содержимое папки `build` в ветку `gh-pages`
- Опубликует сайт по адресу, указанному в `homepage`

## Настройка GitHub Pages

1. Перейдите в настройки вашего репозитория на GitHub (Settings)
2. Найдите раздел "Pages"
3. В разделе "Branch" выберите ветку "gh-pages"
4. Нажмите "Save"

После этого ваше приложение будет доступно по адресу:
`https://[ваш-username].github.io/[имя-репозитория]`

## Структура проекта

- `/src` - исходный код приложения
- `/public` - статические файлы
- `/build` - скомпилированная версия приложения (создаётся при сборке)

## Доступные скрипты

- `npm run start:dev` - запуск в режиме разработки
- `npm run build` - сборка проекта
- `npm run deploy` - деплой на GitHub Pages
- `npm run lint` - проверка кода линтером
- `npm run lint:fix` - автоисправление ошибок линтера
- `npm run format` - форматирование кода

## Технологии

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- ESLint
- Prettier

## Лицензия

Проект распространяется под лицензией MIT.