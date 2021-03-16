from minecraft_server_my-minecraft-base

run echo "eula=true" > /opt/minecraft/eula.txt
add server.properties /opt/minecraft/server.properties
add ops.json /opt/minecraft/ops.json
#add config.yml /opt/minecraft/plugins/scriptcraft/config.yml

# a default ssh access to upload js
add sshd_config /etc/ssh/sshd_config
run mkdir -p /opt/minecraft/scriptcraft/players/
run echo "root:minecraft" | chpasswd

add start /start
run chmod +x /start

expose 25565 22
volume ["/minecraft/"]
cmd /start
