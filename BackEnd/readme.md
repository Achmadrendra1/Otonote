**OTONOTE API**

**By achmadrendra1**


* **Generating Model & Migration File**
```
npx sequelize-cli model:generate --name Nama table --attributes Nama Kolom:Tipe Data

```

* **Run Migration**
```
npx sequelize-cli db:migrate 

```
> If code above add in package.json
```
npm run migrate       --to migrate
npm run migrate:undo  --to revert/undo migrate
```

* **Generating Seeder**
```
npx sequelize-cli seed:generate --name nama seeder
```

* **Run Seeding**
>Seed All
```
npx sequelize-cli db:seed:all
```
>Undo Seed All
```
npx sequelize-cli db:seed:undo:all
```
>Undo Spesific Seed
```
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
```

