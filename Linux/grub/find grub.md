
## Trouver sur quelle partition `/boot/grub` est installé

**GRUB** n'est normalement pas dans la 1e partition du disque, mais il est en deux parties.
La première partie est dans la **MBR** (1er secteur du disque dur, hors partition).  
La 2e partie se trouve dans `/boot/grub` , et la partition dans laquelle se trouve ce répertoire peut varier selon la façon dont la distribution a été installée.  
Normalement, c'est sur la partition principale (`/`) de la distribution (ici **hda5**).
Le meilleur moyen de le savoir est de faire en ligne de commande (`#` signale que la commande doit être faite par le superutilisateur root, donc en **su** ou avec `sudo` selon le cas) :  

`#grub`  

et d'attendre d'avoir le prompt de Grub.  
Ensuite, taper :  

`find /boot/grub/stage1`

il indiquera alors sur quelle partition `/boot/grub` est installé.

`quit`

pour revenir à la console Linux normale. Il faut donc poster ce résultat pour savoir sur quelle base on part.
On aura aussi besoin de connaitre le résultat de la commande :  

`#fdisk -l`