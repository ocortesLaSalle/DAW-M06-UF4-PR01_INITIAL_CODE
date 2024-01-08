# **DAW-M06-UF3-4-PR01_INITIAL_CODE**
Repositori del codi inicial de la pràctica 1 del M06-UF3 i 4 (JS bàsic)

# **Instruccions**
- És necessari superar una entrevista o presentació de la pràctica mostrant el correcte funcionament de l'aplicació per poder obtenir una nota.
- L'entrega es realitzarà utilitzant 2 plataformes: Sallenet i Github. És obligatoria l'entrega dins del termini a les dues per poder obtenir una nota.
- És obligatori que hi hagi mínim 4 commits en el repositori (un commit per classe).
- La pràctica es realitzarà en parelles cada parella ha de fer un mínim de 2 commits.

# **Instruccions de comandes de testing**
Hi han 2 comandes programades en aquest projecte:
- *npm run lint*: Executa ESLint per tots els fitxers amb extensió ".js" que estiguin dins de la carpeta "js" i també els que estiguin a un nivell de carpetes inferior.
- *npm run test*: Executa uns tests end-to-end amb l'eina "Cypress", preparats per comprovar si el funcionament general de l'aplicació és correcte. Els tests només són una ajuda, en cap cas passar els tests suposarà l'aprovat.

# **Enunciat**
## **LS PokeMemory**
Se'ns demana crear una aplicació similar a un joc del Memory utilizant imatges de pokemons.

### **Instruccions del joc Memory simple**
L'usuari té X parelles de cartes girades cap per avall sobre el tauler (on X és un nombre natural qualsevol).
Quan l'usuari clica a una carta, aquesta es gira i es mostra la imatge de la cara superior. Al clicar a una segona carta, també es gira, si no té la mateixa imatge que l'anterior es tornen a girar cap per avall les dues cartes, si té la mateixa imatge que l'anterior es mantenen destapades i ja no es poden tocar més aquestes dues cartes.
Quan l'usuari ha destapat totes les cartes (ha trobat totes les parelles guanya).

### **Interaccions de l'usuari del PokeMemory**
#### **Registre**
Al principi l'usuari veurà només un formulari de registre amb id "*user-form*". En aquest formulari se li demanarà les següents dades amb els següents inputs HTML:
  - Name: amb un input HTML amb id "*name*".
  - Email: amb un input HTML amb id "*email*".
  - Age: amb un input HTML amb id "*age*".

Quan l'usuari apreti qualsevol tecla dins dels inputs, s'haurà de validar l'input en qüestió, i posar-li una color de fons vermell (utilitzant una classe anomenada "*invalid-input*") si no pasen les validacions o una color de fons verd (utilitzant una classe anomenada "*valid-input*") si les passen. Les validacions seran les següents:
  - Username: ha de ser un string que només permeti lletres (majúscules i minúscules) i espais.
  - Email: ha de ser un string amb format de email (un text alfanumèric +  una "@" + un text alfanumèric + "." + un text alfanumèric).
  - Age: ha de ser un nombre enter major que 0 i menor que 100.

Si alguna de les validacions no es compleix, s'haurà de deshabilitar el botó de submit, amb id "*user-form-btn*", del formulari.

Quan l'usuari cliqui al botó de submit del formulari s'haurà de:
  1. Utilitzant l'API i la BBDD "Realtime DB" que ofereix l'aplicació de Firebase (fent servir el mètode "fetch", no la llibreria de Firebase) cal comprovar si el email existeix a la BBDD.
     - Si existeix, s'ha de sobreescriure el username.
     - Si no existeix, s'ha d'afegir un nou registre.
  2. L'id d'usuari que retorni l'API s'haurà de guardar al sessionStorage amb la clau "*user*".

#### **Joc**
Sempre que hi hagi un id d'usuari amb la clau "*user*" al sessionStorage, no es mostrarà el formulari de registre, sino que es mostrarà la vista del joc.
La vista del joc consistirà en 3 parts, totes 3 dins d'un contenidor amb id "*game*":
  1. Al costat esquerra es mostrarà el següent:
      - Un formulari amb id "*game-form*" per introduir quantes cartes l'usuari vol que tingui la partida.
        - Per fer-ho hi haurà un input HTML amb id "*cards-number*".
        - Quan es cliqui al botó de submit del formulari, caldrà verificar si a l'input hi ha un nombre enter, positiu i parell.
          - Si no compleix la verificació, caldrà mostrar un missatge d'error en un alert.
        - Si és correcte, començarà la partida:
          - Es canviarà el text del botó "play-btn" per un missatge similar a "Volver a jugar", i quan es cliqui s'ha de parar la partida actual i començar-ne una de nova.
          - S'iniciarà un contador amb id "*timer*", en el que es veuran els minuts i segons se la següent forma "0m 3s".
          - Es mostrarà el taulell del joc amb la id "*game-board*" amb les cartes girades.
            - No cal crear l'efecte de girar una carta. Al clicar-ne una, es pot mostrar la imatge. Si es fa contarà dins del punt "styles".
            - Per gestionar l'esdeveniment click de cada carta, utilitza la delegació d'esdeveniments.
          - Quan l'usuari hagi trobat dues cartes iguals, s'han de marcar amb el color verd de background.
          - Per obtenir les imatges dels pokemons es farà servir l'API "pokeapi". Les imatges seran aleatories del 1 al X (on X és el número que vulgueu que sigui el màxim, sempre que existeixi un pokemon amb aquest nombre).
          - Quan l'usuari guanyi s'ha de parar el temporitzador.
  2. Al costat dret hi haurà un ranking de totes les partides finalitzades:
      - Aquest ranking tindrà 4 columnes: Posició, Mail, Temps i Número de cartes.
      - Cada cop que es guanyi una partida s'haurà de crear un nou registre a la BBDD de Firebase (utilitzant l'API propia, és a dir, fent servir el mètode fetch).
      - De cada registre caldrà guardar l'id del usuari, el temps que ha tardat en completar el joc i el nombre de cartes que ha escollit.
      - El registre acabat d'afegir s'haurà de resaltar posant-lo amb el fons de color groc, utilitza una classe CSS anomenada "highlight".
      - Els registres es mostraran ordenats primer per cartes (de major a menor) i després per temps (de menor a major).
      - Si hi ha més de 5 registres de ranking, es mostraran només els 4 primers i uns punts suspensius, sempre que el registre acabat d'afegir no estigui entre els 5 primers, caldrà mostrar els punts supensius + el registre + uns altres punts suspensius.
  3. Un botó amb id "*logout-btn*" per eliminar l'id guardada al sessionStorage amb la clau "*user*" i recarregar la pàgina.

# **Distribució de la puntuació**
- Feature 1: *(2p)* Formulari de registre
- Feature 2: *(3p)* Joc (costat esquerra)
- Feature 3: *(2p)* Ranking (costat dret)
- Feature 4: *(0,5p)* Logout
- Files: *(1p)* *Distribueix correctament el codi en diferents fitxers i fes servir imports i exports.
  - L'anterior puntuació només s'obtindrà si s'arriba a una nota de 4 a la pràctica amb les puntuacions de les features.
- Code Quality: -0,25p Per cada error de HTMLHint i ESLint, màxim -2p.
- Styles: *(0,5p)* **Estils en CSS propis.
- Github: *(1p)* **Seguiment fent servir GitHub amb branques una per cada feature (amb merge al main quan estiguin acabades) i mínim un commit per classe (amb suficient feina feta).
  - **Les dues anteriors puntuacions, només s'obtindran si s'aprova la pràctica amb la resta de les puntuacions.




