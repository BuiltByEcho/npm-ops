---
name: Package maintenance
description: Track package metadata, CI, release, or trusted publishing work
title: "[package] <name>: <task>"
labels: [npm, package-maintenance]
body:
  - type: input
    id: package
    attributes:
      label: Package
      placeholder: "@builtbyecho/example"
    validations:
      required: true
  - type: checkboxes
    id: checklist
    attributes:
      label: Readiness checklist
      options:
        - label: package maps to a GitHub repository
        - label: repository/package metadata fields are correct
        - label: README install and usage examples are current
        - label: test/build/typecheck scripts pass
        - label: npm pack dry-run reviewed
        - label: trusted publishing configured
        - label: release workflow exists
  - type: textarea
    id: notes
    attributes:
      label: Notes
