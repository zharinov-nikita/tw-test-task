![](https://github.com/zharinov-nikita/tw-test-task/blob/master/tw-preview.gif)

# Test Task - Nuxt 3 Authentication App

## Локальный запуск проекта

### Предварительные требования

- Node.js (версия 16 или выше)
- npm (версия 8 или выше)

### Шаги по установке

1. Клонируйте репозиторий:
```bash
git clone https://github.com/zharinov-nikita/tw-test-task.git
cd tw-test-task
```

2. Установите зависимости:
```bash
npm install
```

3. Создайте файл `.env` в корневой директории проекта:
```env
NUXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

4. Запустите проект в режиме разработки:
```bash
npm run dev
```

Приложение будет доступно по адресу: `http://localhost:3000`

### Дополнительные команды

- Сборка для продакшена:
```bash
npm run build
```

- Предпросмотр продакшен сборки:
```bash
npm run preview
```

## Описание проекта

Это тестовое задание представляет собой веб-приложение на Nuxt 3 с функционалом аутентификации и управления пользователями. Приложение включает в себя страницу входа и личный кабинет с таблицей пользователей и фильтрами.

## Технологии

- Nuxt 3
- TypeScript
- Pinia для управления состоянием
- LESS для стилей
- Nuxt UI для компонентов интерфейса
- DayJS для работы с датами

## Почему TypeScript?

TypeScript был выбран для разработки по следующим причинам:
- Строгая типизация помогает избежать ошибок на этапе разработки
- Улучшенная поддержка IDE и автодополнение
- Более удобная рефакторинг кода
- Лучшая документация кода через типы и интерфейсы

## Структура проекта

```
├── assets/
│   └── styles/          # LESS стили
├── components/
│   └── auth/           # Компоненты аутентификации
├── pages/
│   ├── auth/
│   │   └── login.vue   # Страница входа
│   └── account.vue     # Личный кабинет
├── stores/
│   ├── auth.ts         # Store аутентификации
│   └── users.ts        # Store пользователей
├── types/
│   └── index.ts        # TypeScript типы
├── server/
│   └── api/           # API эндпоинты
└── middleware/
    └── auth.ts        # Middleware аутентификации
```

## Реализованные функции

1. Аутентификация:
   - Вход по логину и паролю
   - Сохранение сессии в localStorage
   - Защита роутов через middleware
   - Обработка ошибок авторизации

2. Личный кабинет:
   - Таблица пользователей с сортировкой
   - Фильтрация по имени (поиск)
   - Фильтрация по дате создания
   - Индикация статуса пользователя
   - Кнопка выхода из системы

## Развертывание на PROD сервере

1. Подготовка к деплою:
   ```bash
   # Установка зависимостей
   npm install

   # Сборка приложения
   npm run build
   ```

2. Настройка сервера:
   - Установить Node.js и npm
   - Настроить NGINX как reverse proxy
   - Настроить SSL сертификат
   - Настроить PM2 для управления процессом

3. Конфигурация NGINX:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. Запуск приложения:
   ```bash
   # Запуск через PM2
   pm2 start .output/server/index.mjs --name "nuxt-app"
   ```
