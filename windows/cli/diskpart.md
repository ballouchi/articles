
## Bootable partition with *diskpart*

1. `C:\> diskpart`
2. print disks `DISKPART> list disk`
3. select disk number `DISKPART> select disk 0`
4. print partition table `DISKPART> list partition` 
5. select the first partition `DISKPART> select partition 1` 
6. activate disk/partition (bootable) `DISKPART> active`
7. `DISKPART> exit`