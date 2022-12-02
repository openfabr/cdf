# OpenFABR CDF CLI

Language-neutral CLI for project creators and package authors.

# Install

```
npm i --save-dev @openfabr/cdf-cli
```

# Use

Bootstrap a package
```
cdf-init-package --language ('typescript')
```

Bootstrap a project
```
cdf-init-project --language ('typescript')
```

Generating JSON Schema for a package
```
cdf-schema-gen (package-infra-config type name such as 'PackageInfraConfig') ()
```
