# zoo-api

Faire une API NodeJS aec Express, avec une exposition de routes sur le thème d'un zoo. Logique métier au choix.

## Utilisation des imports ES6

Problèmes lors de l'utilisation des imports avec la syntaxe ES6. Ajout de 'type: "module"' dans le package.json

## Fetch

Avec Node<17.3 il est impossible de faire un "fetch". De ce fait, nous avons dû installer la librairie "node-fetch" afin de régler ce problème.

## Jeu de données

Nous avons préféré générer notre propre jeu de données. Ainsi, en se rendant sur /init-db une fonction se déclenche et boucle autant de fois que d'entités à générer dans la collection "animals" (anglais). Les noms et descriptions des animaux sont des chaînes de caractères aléatoires, la race, couleur et l'âge une valeur aléatoire choisie dans un tableau.
