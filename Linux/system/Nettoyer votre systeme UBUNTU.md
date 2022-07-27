
## Comment nettoyer votre systeme gnu/linux UBUNTU

[Forum Tunisia-sat](https://www.tunisia-sat.com/forums/threads/989997/)  
casanostra82, 15 Janvier 2010

### Introduction

J'ai fait ce petit travail pour montrer à nos amis comment nettoyer et rendre clean notre systeme Ubuntu/Linux et le débarasser des fichiers inutiles qui prennent un espace sur le disque.  
Alors , je vais essayer de vous montrer plusieurs méthodes qui vous permettent de vous débarrasser de la plupart ou la totalité des fichiers indisérables sur votre machine.  

### Suppression des résidus de configurations

#### DEFINITION

Les résidus de configuration sont des dépendances d'applications non supprimées aprés désinstallation d'un programme.

#### METHODE

Cette suppression s'effectue à partir du gestionnaire de paquets synaptic(système/administration/gestionnaire de paquets synaptic)  en bas à droite et clicker sur le bouton **ETAT** ou **status** en anglais et ça devra vous apparaitre les catégories suivantes :

- Installés
- Installés (locaux ou obsolètes)
- Non installés
- Non installés (résidus de configuration) celle la apparais si il ya des résidus sur votre systéme

Clickez alors sur résidus de configuration si l'option s'affiche (sinon vous n'avez pas de résidus de configuration)
Les résidus vont s'afficher à droite. Pour s'en débarasser il suffit de  les sélectionner puis avec le bouton droit **sélectionner pour suppression** puis cliquez sur le bouton **APPLIQUER** sur le gestionnaire pour lancer la suppression.

### Supression de paquets temporaires ou partiels

#### DEFINITION

Les paquets .deb téléchargés vont ètre cachés dans le répertoire `/var/cache/apt/archives`. Ces fichiers servent uniquement pour réinstaller des paquets sans re-télécharger.

#### METHODE

Tapez la commande suivante dans le terminal :

`sudo apt-get autoclean`

Tapez votre mot de passe puis **ENTRER**
Les fichiers supprimés vont apparaitre dans la fenètre du terminal.
***NB:*** cette méthode supprime les fichiers téléchargés partielement suite a un téléchargement annulé ou incomplet.

Il existe une autre méthode pour supprimer les copies des paquets installés en éxécutant cette commande dans un terminal :

`sudo apt-get clean`

### Suppression de fichiers de langue inutile

#### INTRODUCTION

La plus longue étape qui prend de temps pendant l'installation est l'étape de l'installation des paquests linguistiques alors y'en a plein de langues dont on na pas besoin.

#### METHODE

Ici on dois installer un paquets appelé ***localpurge***  avec synaptic​ ou bien en lanceant dans un terminal la commande suivante :

`sudo apt-get install localpurge`

Pendant l'installation, déplacez avec les fléches pour choisir les langues dont vous avez besoin.​

Pour lancer **localpurge** il suffit de lancer dans un terminal le mot `localpurge` et click **entrer**.

### Suppression de paquets orphelins

#### DEFINITION

Un fichier orphelin est un fichier qui n'a aucune dépendance et donc complètement inutile pour notre système.

#### METHODE

C'est trés simple ; ça nécessite l'installation de logiciel deborphan en lanceant dans un terminal la commande suivante:

`sudo apt-get install deborphan`

Créer un filtre pour deborphan dans **synaptic** :  
**configuration/filtres** puis dans la fenètre qui s'ouvre créer un nouveau filtre qu'on pourra nommer orphelin.
Pour utiliser votre nouveau filtre cliquez sur le bouton **Filtre** en bas à gauche dans Synaptic, puis sélectionnez
votre nouveau filtre **Orphelin** dans la liste en haut. Tous les paquets orphelins apparaîtront dans la partie droite, il
suffira alors de passer sur tous les paquets, un par un et de sélectionner **Sélectionner pour suppression complète**.
Après, cliquez sur le bouton **Appliquer** (en haut dans Synaptic) pour lancer la suppression.

### Suppression des miniatures des images

Lorsque on navigue dans des répertoires contenants des images ou des photos, les icones qui apparaissent en faites sont des miniatures des images qui sont conservés dans un répertoire nommé thumbnails. Ce répertoire peui rapidement atteindre une taille conséquente.

Lancer dans un terminal la commande suivante:

`rm -rf ~/.thumbnails/normal/*`

### Méthode pour vider le répertoire `/tmp`

Le répertoire `/tmp` est vidé automatiquement à chaque démarrage

Lancer dans un terminal la commande suivante:

`sudo rm -rf /tmp/*` puis **ENTRER**

### Supprimer un paquet
 
- suppimer un paquet en conservant sa configuration si on veut le réinstaller

`sudo apt-get remove <nom_du_paquet_a_desinstaller>` puis **ENTRER**

- ajouter l'option purge pour supprimer également la configuraion du paquet

`sudo apt-get autoremove <nom_du_paquet_a_desinstaller>` puis **ENTRER**

- supprimer totalement un fichier et supprimer aussi toute ses dépendances

`sudo apt-get autoremove --purge <nom_du_paquet_a_desinstaller>` puis **ENTRER**

**NB:** n'utulisez cette commande que lorsque vous ètes surs de vous.