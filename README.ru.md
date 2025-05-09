<p align="right">
  <a href="README.md"><img src="https://img.shields.io/badge/English-blue?style=for-the-badge&logo=github" alt="English"></a>
</p>

# CatAPI React Demo

Современное React-приложение для просмотра случайных изображений котов с элегантным пользовательским интерфейсом.

![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.15-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Содержание

- [Возможности](#возможности)
- [Технологии](#технологии)
- [Начало работы](#начало-работы)
- [Доступные скрипты](#доступные-скрипты)
- [Структура проекта](#структура-проекта)
- [Лицензия](#лицензия)

## Возможности

- 🐱 Просмотр случайных изображений котов
- 🔄 Функция автоматического обновления
- 🎨 Современный интерфейс с градиентным фоном
- 🎯 Возможность включения/отключения просмотра
- 📱 Адаптивный дизайн
- ⚡ Молниеносная производительность

## Технологии

- React 18
- TypeScript
- TailwindCSS
- Shadcn/UI
- Radix UI
- Framer Motion

## Начало работы

1. Клонируйте репозиторий:
```bash
git clone https://github.com/makshuk/catapi-react-demo.git
```

2. Установите зависимости:
```bash
cd catapi-react-demo
npm install
```

3. Запустите сервер разработки:
```bash
npm run start:dev
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

## Деплой

Приложение развернуто на GitHub Pages. Вы можете посмотреть демо-версию по адресу:
[https://makshuk.github.io/catapi-react-demo](https://makshuk.github.io/catapi-react-demo)

Чтобы развернуть свою версию:

1. Обновите поле `homepage` в файле `package.json`:
```json
{
  "homepage": "https://[ваш-username].github.io/[имя-репозитория]",
  ...
}
```

2. Создайте и отправьте ветку gh-pages:
```bash
git checkout -b gh-pages
git push origin gh-pages
```

3. Запустите скрипт деплоя:
```bash
npm run deploy
```

Этот скрипт автоматически:
- Соберет проект (`npm run build`)
- Отправит содержимое папки build в ветку gh-pages
- Опубликует сайт по URL, указанному в поле homepage

4. Настройте GitHub Pages:
- Перейдите в настройки репозитория на GitHub (Settings)
- Найдите раздел "Pages"
- В разделе "Branch" выберите "gh-pages"
- Нажмите "Save"

После этой настройки ваше приложение будет доступно по адресу: `https://[ваш-username].github.io/[имя-репозитория]`

## Доступные скрипты

- `npm run start:dev` - Запуск сервера разработки
- `npm run build` - Сборка для продакшена
- `npm run deploy` - Деплой на GitHub Pages
- `npm run lint` - Запуск проверки ESLint
- `npm run lint:fix` - Исправление проблем ESLint
- `npm run format` - Форматирование кода с помощью Prettier

## Структура проекта

```
src/
  ├── components/
  │   ├── card/          # Компонент карточки
  │   ├── cat-viewer/    # Компоненты просмотра котов
  │   └── ui/            # UI компоненты (Button, Switch)
  ├── App.tsx           # Основной компонент приложения
  └── index.tsx         # Точка входа в приложение
```

## Лицензия

Этот проект распространяется под лицензией MIT - подробности смотрите в файле [LICENSE](LICENSE).