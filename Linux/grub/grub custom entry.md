
## Grub Custom entry


	menuentry "Mandriva sur sda8" {
	 set root=(hd0,8) 
	 chainloader +1 
	}
	
	
## Example 1

	menuentry 'Debian GNU/Linux, avec Linux 2.6.37-2-amd64' --class debian --class gnu-linux --class gnu --class os {
		set gfxpayload=1920x1080 1440x900 1280x720
		insmod raid
		insmod mdraid
		insmod ext2
		set root='(md/0)'
		search --no-floppy --fs-uuid --set 116eb616-a149-4427-800a-12992a1f9492
		echo	'Chargement de Linux 2.6.37-2-amd64 ...'
		linux	/boot/vmlinuz-2.6.37-2-amd64 root=UUID=116eb616-a149-4427-800a-12992a1f9492 ro  
		echo	'Chargement du disque mémoire initial ...'
		initrd	/boot/initrd.img-2.6.37-2-amd64
	}
	
## Example 2

	menuentry 'Turnkey File Server' {
		set root='(hd1,1)'
		echo	'Chargement du noyau ...'
		linux	/boot/vmlinuz-4.19.0-16-amd64 root=UUID=ee7d20f2-3fd9-4a15-b7b3-73594ce5ca0f ro  
		echo	'Chargement du disque mémoire initial ...'
		initrd	/boot/initrd.img-4.19.0-16-amd64
	}
