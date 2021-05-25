### Ветка, в которой делаете задания спринта, должна называться sprint_i, где i - номер спринта. Не переименовывайте её.

### Откройте pull request в ветку main из ветки, где вы разрабатывали проект, и добавьте ссылку на этот pr в README.md в ветке main. Название pull request может быть любое.

### Например, задания для проектной работы во втором спринте вы делаете в ветке sprint_2. Открываете из неё pull request в ветку main (pr может называться произвольно). Ссылку на этот pr добавляете в README.md в ветке main. После этого на платформе Практикума нажимаете «Проверить задание».

### Также не забудьте проверить, что репозиторий публичный.
---

### Добавьте ниже ссылку на открытый pull request.
https://github.com/dragoonzx/middle.messenger.praktikum.yandex/pull/6

## Project status:
In progress

## Links:
Figma: https://www.figma.com/file/96F8TruNrv6ynLwx4I2rDa/ya.middle.chat?node-id=0%3A1

Heroku: https://sheltered-temple-46963.herokuapp.com/

## What it is:
Student project (chat) for yandex praktikum course

## How to setup:
```
1. npm i (install dependencies)
2. docker build -t mf .
3. docker run -it -p 8080:80 mf

OR

1. npm i
2. npm run dev:webpack

Then you can see app running on http://localhost:8080
```

## Linting:
JavaScript and TypeScript:
I stick to wemake code style. It is just like standard config, but stricter

To lint js (ts also) run this command:
```
npm run lint:js
```

Styles:
I use stylelint to validate scss files, also strict rules thanks to wemake + accessibility checks thanks to stylelint-a11y

To lint styles run this command:
```
npm run lint:styles
```

## Testing:
Mocha, chai & jsdom

To test:
```
npm run test
```

## Infrastructure
Docker, webpack, heroku
