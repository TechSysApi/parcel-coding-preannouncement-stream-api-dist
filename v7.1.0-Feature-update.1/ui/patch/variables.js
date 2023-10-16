var variables={
  "name": "@ch-post-logistics/parcel-coding-preannouncement-stream-api",
  "version": "7.1.0-Feature-update.1",
  "description": "Parcel Coding Preannouncement Stream API",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix"
  },
  "author": "gfellerle",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.33.0",
    "@typescript-eslint/parser": "^4.33.0",
    "apikana": "^0.9.34",
    "apikana-defaults": "0.0.86",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.4.1",
    "prettier": "^2.8.8",
    "typescript": "^4.9.5"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "gfellerle",
    "namespace": "logistics.parcel.coding.preannouncement",
    "shortName": "parcel-coding-preannouncement",
    "projectName": "parcel-coding-preannouncement-stream-api",
    "title": "Parcel Coding Preannouncement Stream API",
    "plugins": [
      "maven",
      "dotnet",
      "readme"
    ],
    "javaPackage": "ch.post.logistics.parcel.coding.preannouncement.v1",
    "mavenGroupId": "ch.post.logistics.parcel.coding",
    "dotnetNamespace": "Ch.Post.Logistics.Parcel.Coding.Preannouncement.V1",
    "dotnetPackageId": "Ch.Post.Logistics.Parcel.Coding.Preannouncement.StreamApi",
    "mqs": "Kafka"
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}