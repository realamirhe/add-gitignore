# gitignore

## Usage

1. clone repo

```bash
git clone https://github.com/amirHossein-Ebrahimi/add-gitignore.git
```

2. setup project

```bash
cd add-gitignore
yarn install
```

3. Link project & make it available as global npm package

```bash
npm link
```

> Note yarn link may also work but you may face some issues if you are using zsh.

4. run the command in any other project.

```bash

# generate python gitignore
gitignore python

# generate react gitignore & add webstorm related files to it
gitignore react webstorm
```

> Note: By default webstorm will be added to your gitignore
