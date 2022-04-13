# gitignore

## Usage

1. clone repo

```bash
git clone https://github.com/realamirhe/add-gitignore.git
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

> Note yarn link may also work but you may face some issues if you are using nvm and zsh.

4. run the command in any other project.

```bash

# generate python gitignore
gitignore python

# generate react gitignore & add webstorm related files to it
gitignore react webstorm
```
