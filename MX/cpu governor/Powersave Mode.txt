Debian:

cpufreq-info
sudo nano /etc/default/cpufrequtils

GOVERNOR="powersave"

sudo service cpufrequtils restart




Arch:

cpupower frequency-info
sudo cpupower frequency-set -g powersave

sudo nano /etc/default/cpupower


governor="powersave"



Porteus:

sudo nano /etc/default/tlp
tlp-stat
