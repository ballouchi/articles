
## Réinstaller/Restaurer GRUB 2

December 15, 2013  

**Attention** : la procédure suivante n'est valable que si vous souhaitez installer GRUB dans le MBR.  
Attention donc si vous avez installé ubuntu dans windows avec wubi ou si vous avez conservé bootmgr (par exemple, si votre ordinateur est tatoué) : dans ces cas, cette procédure ne résoudra pas votre problème et risque même de vous en créer...  

Si vous n'avez plus Grub2 suite, par exemple, à l'installation d'un autre système d'exploitation, voici les étapes à suivre pour le remettre en place :

1. Munissez-vous d'un CD d'installation (ou clé USB d'installation) d'Ubuntu 9.10 ou ultérieure) ;
2. Amorçez votre ordinateur avec ce CD-ROM ou cette clé USB en choisissant l'option, si besoin, ***Essayer Ubuntu sans rien changer sur votre ordinateur***
3. Montez la partition qui contenait GRUB2 auparavant. Cette partition est généralement la même qui contient tout le système Ubuntu. Dans une session d'essai d'Ubuntu, rendez-vous dans le menu Raccourcis et sélectionnez la partition à monter dans la liste des partitions existantes ;
4. Allez dans **Système - Administration - Utilitaire de disques** et notez :

- l'identifiant de périphérique de votre disque dur primaire (généralement `/dev/sda`),

- et le nom de montage de la partition que l'on vient juste de monter (par exemple `/media/disk`).

5. Dans un terminal, lancez la commande suivante en remplaçant `/media/disk` et `/dev/sda` par votre point de montage et le disque primaire notés précédemment :

`sudo grub-install --root-directory=/media/disk /dev/sda`

Redémarrez en enlevant votre live-cd ou votre clé-usb.