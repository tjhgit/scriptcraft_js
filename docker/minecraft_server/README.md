# docker-scriptcraft

This is cloned and modified from [here](https://github.com/tclavier/docker-scriptcraft)
It's a [Docker](http://www.docker.com) container for [minecraft]() with
[SigotMC](https://www.spigotmc.org/) and [ScriptCraft](http://scriptcraftjs.org/)
installed and ready to run.

ScriptCraft is a Minecraft Mod that lets you extend Minecraft using the Javascript Programming Language. ScriptCraft makes modding Minecraft easier. It includes a logo-like "Drone" object that can be used to build complex buildings, roads, villages, even entire cities. It also includes many other features that make modding Minecraft easier.

# Build

```bash
docker-compose build
```

# Run

```bash
docker-compose up -d 
```

# Play

Start minecraft client in `multiplayer` mode and then add `localhost:25565` to the server list. 