from debian:buster-slim
env DEBIAN_FRONTEND noninteractive
env MINECRAFT_VERSION=1.14.4
env SCRIPTCRAFT_VERSION=3.4.0

run apt-get update && \
    apt-get dist-upgrade -y && \
    apt-get clean

# missing in slim the man directories
run apt-get update \
    && mkdir -p /usr/share/man/man1 \
    && apt-get install -y openjdk-11-jdk rsync ssh git vim \
    && apt-get clean

# Spigot (Minecraft server)
add https://hub.spigotmc.org/jenkins/job/BuildTools/lastSuccessfulBuild/artifact/target/BuildTools.jar /opt/minecraft/BuildTools.jar
workdir /opt/minecraft/
run java -jar BuildTools.jar --rev $MINECRAFT_VERSION --compile craftbukkit

# install scriptcraft
add https://github.com/walterhiggins/ScriptCraft/releases/download/$SCRIPTCRAFT_VERSION/scriptcraft.jar /opt/minecraft/plugins/scriptcraft.jar
