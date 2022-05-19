# Testcafe Examples

Messing around with testcafe

## Installation

```bash
npm i
```

## Usage

```bash
npm test
```

## Docker

```bash
docker build -t testcafe -f Dockerfile .
```

```bash
docker run -u root -v ${PWD}:/tests -it testcafe/testcafe chromium /tests/**/*.spec.js
```

```bash
docker stop $(docker ps -qa --filter ancestor=testcafe)
```
