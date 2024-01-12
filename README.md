# **M06-UF2-PR01_INITIAL_CODE**

Repositori del codi inicial de la pràctica M06-UF2

# **Instruccions**

- Si el professor ho considera convenient serà necessari superar una entrevista o presentació de la pràctica mostrant el correcte funcionament de l'aplicació per poder obtenir una nota.
- L'entrega es realitzarà utilitzant 2 plataformes: Sallenet i Github. És obligatoria l'entrega dins del termini a les dues per poder obtenir una nota.

# **Enunciat**

## **LS Fitness**

L'empresa "LS Fitness" té un gimnàs i ens demana que creem una web per poder gestionar les reserves d'entrenaments grupals i entrenaments individuals.

**No facis servir bucles per treballar amb els arrays, sempre fes servir funcions d'arrays, menys quan ho indiqui (el forEach el considerarem com a bucle, per tant no serà vàlid menys quan digui que es poden fer servir bucles).**

### _(2p)_ **Estructura de classes**

#### **Herència**

Crea la següent estructura de classes, fes els mètodes getters i setters que creguis necessaris, tingues en compte que si no és necessari no haurien d'existir els mètodes getters i setters. A part, també cal tenir en compte que alguns mètodes s'hauran de sobreescriure.

1. Superclasse: Entrenament
   - Atributs privats:
     - id: número identificatiu.
     - instructor: nom del treballador assignat.
     - diaHora: objecte date amb el dia i hora de la sessió d'entrenament.
     - sala: número de la sala on es farà l'entrenament, si no s'envia, per defecte serà sempre 1.
   - Mètodes:
     - toString: retorna els atributs en format string, en forma de fila d'una taula:
       - id
       - nom de l'instructor
       - diaHora
       - sala.
2. Subclasse: EntrenamentGrupal
   - Atributs privats:
     - clients: array d'objectes literals amb els noms i cognoms dels clients.
     - capacitatMaxima.
     - classe: nom del tipus de classe que es farà (yoga, pilates, crossfit, etc.)
   - Mètodes:
     - afegirClient: afegirà un client nou rebut per paràmetre a l'array de clients sempre que la llargada de l'array no superi la capacitatMaxima.
     - treureClient: treu un client rebut per paràmetre de l'array de clients. rebrà per paràmetre el nom i cognoms. No és vàlid posar la posició a null, cal eliminar l'objecte.
     - toString: retorna els atributs en format string, en forma de fila d'una taula:
       - id
       - nom de l'instructor
       - diaHora
       - sala
       - el text "grupal"
       - si a la sessió hi ha lloc o no: mostra un input checkbox. "Checked" si la sessió no està plena o "no checked" si està plena. Estarà plena quan encara hi hagi capacitat.
       - classe
3. Subclasse: EntrenamentIndividual
   - Atributs privats:
     - iva: sempre serà 21. Serà un atribut estàtic.
     - preuBrut.
     - client: objecte literal amb el nom i cognoms del client.
   - Mètodes:
     - afegirClient: afegirà un client nou rebut per paràmetre sempre que l'objecte client estigui buit, si està ple retornarà false.
     - treureClient: treu el client de la sessió d'entrenament posant-lo a null.
     - preuNet: serà atribut creat amb un mètode getter que calculi el preu net a partir del preuBrut i l'iva.
     - toString: retorna els atributs en format string, en forma de fila d'una taula:
       - id
       - nom de l'instructor
       - diaHora
       - sala
       - el text "individual"
       - si a la sessió hi ha lloc o no: mostra un input checkbox. "Checked" si la sessió no està plena o "no checked" si està plena. Estarà plena quan hi hagi un client.
       - el preu net

#### **Classe sense herència**

1. Classe: Calendari
   - Atributs públics:
     - sessionsGrupals: serà un array d'objectes EntrenamentGrupal.
     - sessionsIndividuals: serà un array d'objectes EntrenamentIndividual.
   - Mètodes:
     - **mostrarSessions**(): string
       - Retorna el contingut d'una taula HTML amb una llista de les sessions grupals i individuals, utilitza els mètodes toString.
       - Les sessions passades no s'han de mostrar.
       - Les sessions estaran ordenades desde la data actual fins a la data més futura.
       - Per passar correctament els tests, caldrà que l'etiqueta "tr" tingui l'atribut "data-session-id" en el que es guardi la id de la sessió mostrada en la fila corresponent.
     - **reservar**(id, nom del client, cognom1 del client, cognom2 del client, tipus de sessió grupal o individual): boolean
       - Crida al mètode corresponent de la classe per afegir el client a la sessió d'entrenament.
       - Retorna un true o un false depenent de si s'ha pogut afegir el client.
     - **eliminarReserva**(id, tipus de sessió grupal o individual, nom del client, cognom1 del client, cognom2 del client): boolean
       - Els paràmetres nom, cognom1 i cognom2 poden no enviar-se i seran null, sempre que l'entrenament sigui individual.
       - Crida al mètode corresponent de la classe per treure el client de la sessió d'entrenament.
       - Retorna un true o un false depenent de si s'ha pogut afegir el client.
     - **eliminarReservesPerDia**(dia, nom del client, cognom1 del client, cognom2 del client): boolean
       - El paràmetre dia és un string que caldrà convertir-lo a Date.
       - Borra totes les reserves d'una persona en un dia determinat. Aquí pots fer servir bucles.
       - Retorna true si n'ha trobat, false si no n'ha trobat cap.
     - **carregarSessionsInicials**(): void
       - Aquest mètode podrà rebre N paràmetres. Tots ells s'han de col·locar dins d'un array.
       - Utilitza un bucle per iterar sobre tot l'array i guardar una a una les sessions, a l'array corresponent.
       - Abans de guardar cada sessió comproba que tingui tots els atributs necessaris, si no els té utilitza una sentència de ruptura o una instrucció similar per saltar a la següent iteració.

### _(1p)_ **Dades inicials**

1. Perquè el gimnàs tingui la web amb dades inicials, quan es carregui la pàgina carrega un array de 5 sessions (3 grupals i 2 individuals). Utilitza les següents dades:

1. Entrenaments Grupal 1:
   - id: 1
   - instructor: 'instructor1'
   - diaHora: 2023-11-01 - 10:00:00
   - sala: 2
   - clients:
     - nom: 'Maria', cognom1: 'Lopez', cognom2: 'Garcia'
     - nom: 'Pep', cognom1: 'Garcia', cognom2: 'Lopez'
     - nom: 'Joan', cognom1: 'Lopez', cognom2: 'Garcia'
   - capacitat: 25
   - classe: Pilates
1. Entrenament Grupal 2:
   - id: 2
   - instructor: 'instructor2'
   - diaHora: 2023-12-01 - 10:00:00
   - sala: 2
   - clients:
     - nom: 'Maria', cognom1: 'Lopez', cognom2: 'Garcia'
     - nom: 'Pep', cognom1: 'Garcia', cognom2: 'Lopez'
     - nom: 'Joan', cognom1: 'Lopez', cognom2: 'Garcia'
   - capacitat: 3
   - classe: Yoga+
1. Entrenament Grupal 3:
   - id: 5
   - instructor: 'instructor3'
   - diaHora: 2023-12-03 - 10:00:00
   - sala: 2
   - clients:
     - nom: 'Maria', cognom1: 'Lopez', cognom2: 'Garcia'
     - nom: 'Pep', cognom1: 'Garcia', cognom2: 'Lopez'
   - capacitat: 3
   - classe: Yoga
1. Entrenament Individual 1:
   - id: 3
   - instructor: 'instructor1'
   - diaHora: 2023-12-02 - 10:00:00
   - sala: 2
   - client: null
   - preuBrut: 40
1. Entrenament Individual 2:
   - id: 4
   - instructor: 'instructor2'
   - diaHora: 2023-12-01 - 12:00:00
   - sala: 2
   - client: nom: 'Pep', cognom1: 'Garcia', cognom2: 'Lopez'
   - preuBrut: 35

Després, afegeix 3 sessions més inventades per tu, dos individuals i una grupal.

### **Interacció usuari**

_Cal fer servir els mètodes i atributs de les classes anteriors per a que sigui vàlid._

_(**Feature 1** - 1p)_ L'usuari al carregar la pàgina veurà una llista de totes les sessions d'entrenaments grupals i individuals en format de taula HTML.

Sota la llista de sessions, l'usuari tindrà un formulari que tindrà diferents botons per poder fer diferents accions, després de cada acció caldrà recarregar la taula de sessions si ha funcionat l'acció:
  - _(**Feature 2** - 1p)_ Apuntar-se a una sessió d'entrenament (millor no posis el tag <form> per evitar problemes que veurem a la UF següent). Per fer-ho el formulari tindrà els següents camps:
    - Id: serà un input tipus text HTML amb la id "id", on l'usuari escriurà la id de la sessió.
    - Nom del client: serà un input tipus text HTML amb la id "nomClient". - Cognom1 del client: serà un input tipus text HTML amb la id "cognom1Client".
    - Cognom2 del client: serà un input tipus text HTML amb la id "cognom2Client".
    - Tipus de sessió: serà un desplegable HTML amb el tipus de sessió "grupal" o "individual". Tindrà la id "tipus".
    - Botó per realitzar l'acció que tindrà la id "apuntar".
  - _(**Feature 3** - 1p)_ Esborrar una reserva d'una sessió. Per fer-ho el formulari no li calen més camps que els anteriors, només afegirem el botó per realitzar l'acció que tindrà la id "esborrar".
  - _(**Feature 4** - 1p)_ Esborrar totes les reserves d'un dia. Per fer-ho el formulari necessitarà que li afegim el camp següent:
    - DiaHora: serà un input tipus datetime HTML amb la id "diaHora".
    - Botó per realitzar l'acció que tindrà la id "esborrarDia".

## **Altres**

- **Files:** _(1p)_ \*Distribueix correctament el codi en diferents fitxers i fes servir imports i exports.

  - \*L'anterior puntuació, només s'obtindrà si s'arriba a una nota de 4 a la pràctica amb les puntuacions de les features.

- **Code Quality:** _-0,25p_ Per cada error de HTMLHint i ESLint.

- **Styles:** _(1p)_ \*\*Estils: Cal que hi hagi suficient codi CSS per a que es pugui valorar.
- **Github:** _(1p)_ \*\*Seguiment fent servir GitHub amb branques una per cada feature (amb merge al main quan estiguin acabades) i mínim un commit per classe (amb suficient feina feta), els noms de les branques i dels commits han de seguir la convenció i tenir sentit.
  - \*\*Les dues anteriors puntuacions, només s'obtindran completes si tots els tests e2e funcionen correctament, i no hi ha més de 4 errors de qualitat de codi.
  - \*\*S'obtindrà la meitat de les dues anteriors puntuacions si falla algun dels tests e2e o hi ha més de 4 errors de qualitat de codi, i s'aprova la pràctica amb la resta de les puntuacions
